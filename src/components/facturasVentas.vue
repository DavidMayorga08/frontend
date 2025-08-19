<script setup>
import { ref, onMounted } from "vue";

import { computed } from "vue";
import { useQuasar } from "quasar";

import { useProduccionesStore } from "../stores/producciones.js";
import { useCompradoresStore } from "../stores/compradores.js";
import { useFacturasVentasStore } from "../stores/facturasVentas.js";
import { useFacturasComprasStore } from "../stores/facturasCompras.js";
import { useProveedoresStore } from "../stores/proveedores.js";

import * as XLSX from "xlsx";

import Swal from "sweetalert2";
let useFacturasCompras = useFacturasComprasStore();
const useComprador = useCompradoresStore();
const useProduccion = useProduccionesStore();
let id_finca = ref(localStorage.getItem("Finca"));
const idUsuario = JSON.parse(localStorage.getItem("login")).user.usuario._id;
let proveedores = ref([]);

let useFacturasVentas = useFacturasVentasStore();
let medium = ref(false);

const cantidad = ref(null);
const precio = ref(null);
const loteComercialnum = ref(null);
const disabled = ref(false);
let produccion = [];
let datos = {};
let comprador2 = [];
let datos2 = {};
const options2 = ref(comprador2);
const options = ref(produccion);
let registroExitoso = ref(false);
let registroFallido = ref(false);
let text = ref("");

const cantidadExistente = ref({});

const metodoPago = ref({
  Tipo: "",
  Detalles: {
    Banco: "",
    Numero_referencia: "",
    Fecha_pago: "",
  },
});
const guardarPago = () => {
  console.log("Método de Pago:", metodoPago.value);
  medium.value = false; // Cerrar el diálogo
};
function ocultar() {
  setTimeout(() => {
    registroExitoso.value = false;
    registroFallido.value = false;
  }, 3000);
}

async function listarComprador() {
  try {
    const data = await useComprador.getCompradores();
    console.log("Respuesta de getCompradores:", data); // Verifica la estructura

    if (!Array.isArray(data)) {
      console.error("Error: data no es un array");
      return;
    }

    comprador2.length = 0;

    data.forEach((item, index) => {
      console.log(`Item ${index}:`, item);

      if (item?.Datos_natural && item.Datos_natural.length > 0) {
        const datosNatural = item.Datos_natural[0]; // Accede al primer elemento del array
        comprador2.push({
          label: `${datosNatural.Nombre} - ${datosNatural.Num_identificacion}`,
          value: item._id,
        });
      } else {
        console.error("Elemento inválido o faltan propiedades:", item);
      }
    });

    console.log("Lista de compradores:", comprador2);
  } catch (error) {
    console.error("Error al listar compradores:", error);
  }
}

async function listarProduccion() {
  try {
    const data = await useProduccion.getProducciones();
    console.log("Respuesta de getInsumos:", data);

    if (!Array.isArray(data)) {
      console.error("Error: data no es un array");
      return;
    }

    produccion.length = 0;

    data.forEach((item) => {
      produccion.push({
        label: item?.Id_cultivo.Nombre,
        value: item._id,
        tipoInsumo: item.Especie,
        unidad: item.Unidad,
        cantidad: item.Cantidad,
      });
    });

    console.log("Lista de insumos:", produccion);
  } catch (error) {
    console.error("Error al listar insumos:", error);
  }
}

let abrirModalCrearFactura = ref(false);

let nuevaFactura = ref({
  productosSeleccionados: [],
  numero: "",
  fecha: "",
  comprador: "",
});

let productoSeleccionado = ref(null);
let compradorSeleccionado = ref(null);

const agregarProducto = () => {
  if (!productoSeleccionado.value || !cantidad.value || !precio.value) {
    console.log("Por favor, completa todos los campos.");
    return;
  }

  if (!compradorSeleccionado.value) {
    console.log("Por favor, selecciona un comprador.");
    return;
  }

  nuevaFactura.value.comprador = compradorSeleccionado.value.value;
  nuevaFactura.value.loteComercialnum = loteComercialnum.value;

  if (!nuevaFactura.value.productosSeleccionados) {
    nuevaFactura.value.productosSeleccionados = [];
  }

  let productoEnInventario = options.value.find(
    (p) => p.value === productoSeleccionado.value.value
  );

  if (!productoEnInventario) {
    alert(
      `El producto "${productoSeleccionado.value.label}" no se encuentra en el inventario.`
    );
    return;
  }

  const stockDisponible = productoEnInventario.cantidad;

  if (Number(cantidad.value) > stockDisponible) {
    alert(
      `La cantidad ingresada (${cantidad.value}) supera el stock disponible (${stockDisponible}) para "${productoSeleccionado.value.label}".`
    );
    return;
  }

  const isEditingExistingFactura = detallesFactura.value.length > 0;
  const productoExistente = isEditingExistingFactura
    ? detallesFactura.value.find(
        (p) => p.nombreProducto === productoSeleccionado.value.label
      )
    : nuevaFactura.value.productosSeleccionados.find(
        (p) => p.nombreProducto === productoSeleccionado.value.label
      );

  if (productoExistente) {
    productoExistente.cantidad += Number(cantidad.value);
    productoExistente.subtotal =
      productoExistente.precio * productoExistente.cantidad;
  } else {
    const nuevoProducto = {
      idProduccion: productoSeleccionado.value.value,
      nombreProducto: productoSeleccionado.value.label,
      tipoInsumo: productoSeleccionado.value.tipoInsumo,
      unidad: productoSeleccionado.value.unidad,
      cantidad: Number(cantidad.value),
      precio: Number(precio.value),
      subtotal: Number(precio.value) * Number(cantidad.value),
      total: Number(precio.value) * Number(cantidad.value),
      idComprador: nuevaFactura.value.comprador,
      loteComercialnum: nuevaFactura.value.loteComercialnum,
    };

    if (isEditingExistingFactura) {
      detallesFactura.value.push(nuevoProducto);
    } else {
      nuevaFactura.value.productosSeleccionados.push(nuevoProducto);
    }
  }

  const totalGeneral = (
    isEditingExistingFactura
      ? detallesFactura.value
      : nuevaFactura.value.productosSeleccionados
  )
    .reduce((acc, producto) => acc + producto.total, 0)
    .toLocaleString("es-CO");

  nuevaFactura.value.totalGeneral = totalGeneral;

  productoSeleccionado.value = null;
  cantidad.value = null;
  precio.value = null;
};

const actualizarTotalProducto = (producto) => {
  producto.total = producto.precio * producto.cantidad;
};
// async function listarFactura() {
//   const r = await UseFactura.listarFactura();
//   rows.value = r.data.factura.reverse();
//   console.log(r.data.factura);
// }

async function cerrarCrear() {
  abrirModalCrearFactura.value = false;
  nuevaFactura.value = {
    productosSeleccionados: [],
    numero: "",
    fecha: "",
    comprador: "",
    loteComercialnum: "",
  };
  compradorSeleccionado.value = null;
}
async function abrirCrear() {
  abrirModalCrearFactura.value = true;
  nuevaFactura.value = {
    productosSeleccionados: [],
    numero: "",
    fecha: "",
    comprador: "",
    loteComercialnum: "",
  };
  compradorSeleccionado.value = "";
  loteComercialnum.value = "";
}
async function cerrareditar() {
  abrir.value = false;
  productoSeleccionado.value = "";
}
function cerrar() {
  registroExitoso.value = false;
  registroFallido.value = false;
}
let getFacturasVentas = async () => {
  let facturasVentas = await useFacturasVentas.getFacturasVentas();
  rows.value = facturasVentas;
};
const crearFactura = async () => {
  if (nuevaFactura.value.productosSeleccionados.length === 0) {
    Notify.create({
      message: "Debe agregar al menos un producto para crear la factura.",
    });
    return;
  }

  if (!metodoPago.value.Tipo || !metodoPago.value.Detalles.Fecha_pago) {
    alert("Debe agregar un método de pago para crear la factura.");

    return;
  }
  const impuestoFijo = 0.16; // Por ejemplo, 16% de IVA
  let totalSinImpuesto = 0;
  let totalCantidad = 0; // Inicializar total de cantidades

  const detalle = nuevaFactura.value.productosSeleccionados.map((producto) => {
    const subtotal = producto.precio * producto.cantidad;
    totalSinImpuesto += subtotal;
    totalCantidad += producto.cantidad; // Sumar la cantidad del producto

    return {
      idProduccion: producto.idProduccion,
      nombreProducto: producto.nombreProducto,
      Cantidad: producto.cantidad,
      Precio_unitario: producto.precio,
      Subtotal: subtotal,
      iva: producto.iva || 0,
      Tipo_cultivo: producto.tipoInsumo, // Agregamos el tipo de insumo
      Unidad_medida: producto.unidad,
    };
  });

  const impuestoCalculado = totalSinImpuesto * impuestoFijo;

  const totalPagar = totalSinImpuesto + impuestoCalculado;
  console.log(nuevaFactura);

  const primerProducto = detalle.length > 0 ? detalle[0] : {};
  const facturaData = {
    Tipo_factura: "Venta",
    Fecha_generacion: new Date().toISOString(),
    Consecutivo: loteComercialnum.value,
    Productos: detalle,
    Id_produccion: primerProducto.idProduccion || null,
    Id_comprador: nuevaFactura.value.comprador,
    Tipo_cultivo: primerProducto.tipoInsumo || "",
    Unidad_medida: primerProducto.unidad || "",
    Id_finca: id_finca.value,
    Total: totalCantidad,
    Impuesto: impuestoCalculado.toFixed(2),
    Total_pagar: totalPagar.toFixed(2),
    Id_Emisor: idUsuario || null,
    Metodo_pago: metodoPago.value,
  };

  console.log(facturaData);

  try {
    await useFacturasVentas.postVenta(facturaData);
    Swal.fire({
      icon: "success",
      title: "Factura creada correctamente",
      showConfirmButton: false,
      timer: 2000,
    });

    await getFacturasVentas();

    registroExitoso.value = true;
    text.value = "Factura creado correctamente";
    ocultar();
    abrirModalCrearFactura.value = false;

    nuevaFactura.value = {
      productosSeleccionados: [],
      numero: "",
      fecha: "",
      comprador: "",
      loteComercialnum: "",
    };
  } catch (error) {
    let errorMessage = "No hay suficiente stock para el producto.";

    if (error.response && error.response.data && error.response.data.msg) {
      errorMessage = error.response.data.msg;
    }

    console.error("Error al crear la factura:", error);
  }
};

const EditarFactura = async () => {
  if (detallesFactura.value.length === 0) {
    Notify.create({
      message: "Debe agregar al menos un producto para crear la factura.",
    });
    return;
  }

  const detalle = detallesFactura.value.map((producto) => {
    const subtotal = producto.precio * producto.cantidad;
    return {
      idProduccion: producto.idProduccion,
      nombreProducto: producto.nombreProducto,
      cantidad: producto.cantidad,
      precio: producto.precio,
      subtotal: subtotal,
      iva: producto.iva || 0,
    };
  });

  const facturaData = {
    numero: nuevaFactura.value.numero,
    Id_finca: id_finca.value,
    fecha: new Date().toISOString(),
    idComprador: detallesFactura.value.idComprador,
    loteComercialnum: loteComercialnum.value,
    detalle: detalle,
  };
  console.log(facturaData);

  try {
    await UseFactura.putFactura(idFacturaAEditar, facturaData);
    Notify.create({
      type: "positive",

      message: "Factura editada exitosamente",
    });

    nuevaFactura.value = {
      productosSeleccionados: [],
      numero: "",
      fecha: "",
      comprador: "",
      loteComercialnum: "",
    };
    abrir.value = false;

    // listarFactura();
  } catch (error) {
    console.error("Error al editar la factura:", error);
    Notify.create({
      message: "Error al editar la factura, por favor intente nuevamente.",
    });
  }
};

let abrir = ref(false);
let maximizedToggle = ref(true);
let total = ref(0);
let numero = ref("");
let fecha = ref("");
let comprador = ref("");
let productosFiltrados = ref([]);
let busqueda = ref(null);
let open = ref(false);
let formatCurrency = (value) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
};
const columns = ref([
  {
    name: "Tipo_factura",
    label: "Tipo de Factura",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Tipo_factura",
  },
  {
    name: "Consecutivo",
    label: "Consecutivo",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Consecutivo",
  },
  {
    name: "Fecha_generacion",
    label: "Fecha de Generación",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => row.Fecha_generacion.split("T")[0],
  },
  {
    name: "Id_Emisor",
    label: "Emisor",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => (row.Id_Emisor ? row.Id_Emisor.Nombre : "N/A"),
  },
  {
    name: "Id_comprador",
    label: "Receptor",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      if (!row.Id_comprador) return "N/A";

      if (row.Id_comprador.Tipo_comprador === "Natural") {
        return row.Id_comprador.Datos_natural?.[0]?.Nombre || "N/A";
      }

      if (row.Id_comprador.Tipo_comprador === "Juridica") {
        return row.Id_comprador.Datos_juridica?.[0]?.Nombre || "N/A";
      }

      return "N/A";
    },
  },
  {
    name: "Total",
    label: "Total",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Total),
  },
  {
    name: "Impuesto",
    label: "Impuesto",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Impuesto),
  },
  {
    name: "Total_pagar",
    label: "Total a Pagar",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Total_pagar),
  },
  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
]);

const rows = ref([]);

let detallesFactura = ref([]);

let idFacturaAEditar = null;

function ver(r) {
  abrir.value = true;

  compradorSeleccionado.value = r.idComprador.nombre;

  const fechaOriginal = new Date(r.fecha);
  const fechaFormateada = fechaOriginal.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  fecha.value = fechaFormateada;
  loteComercialnum.value = r.loteComercialnum;

  detallesFactura.value = r.detalle.map((item) => ({
    ...item,
    iva: item.iva || 0,
  }));

  idFacturaAEditar = r._id;
  console.log(idFacturaAEditar);
}

function verDetalle(r) {
  console.log(r);
}

const totalProductos = computed(() => {
  return productos.value
    .reduce(
      (acum, current) => acum + current.cantidad * current.precioUnitario,
      0
    )
    .toLocaleString("es-CO");
});
const eliminarProducto = (producto) => {
  if (Array.isArray(nuevaFactura.value.productosSeleccionados)) {
    nuevaFactura.value.productosSeleccionados =
      nuevaFactura.value.productosSeleccionados.filter(
        (item) => item.idProduccion !== producto.idProduccion
      );
  }

  if (Array.isArray(detallesFactura.value)) {
    detallesFactura.value = detallesFactura.value.filter(
      (item) => item.idProduccion !== producto.idProduccion
    );
  }

  const totalGeneral = nuevaFactura.value.productosSeleccionados
    .reduce((acc, producto) => acc + producto.total, 0)
    .toLocaleString("es-CO");

  nuevaFactura.value.totalGeneral = totalGeneral;
};
const totalPagar = computed(() => {
  const totalSinImpuesto = nuevaFactura.value.productosSeleccionados.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  const impuestoCalculado = totalSinImpuesto * 0.16; // 16% de IVA
  return totalSinImpuesto + impuestoCalculado;
});
const exportarExcelUtilidad = async () => {
  let ventas = await useFacturasVentas.getFacturasVentas();
  let compras = await useFacturasCompras.getFacturasCompras();

  const resumen = {};
  ventas.forEach((v) => {
    const mes = v.Fecha_generacion.split("T")[0].slice(0, 7);
    if (!resumen[mes]) resumen[mes] = { ventas: 0, compras: 0 };
    resumen[mes].ventas += v.Total_pagar;
  });
  compras.forEach((c) => {
    const mes = c.Fecha_factura.split("T")[0].slice(0, 7);
    if (!resumen[mes]) resumen[mes] = { ventas: 0, compras: 0 };
    resumen[mes].compras += c.Total_pagar;
  });

  const resumenData = Object.entries(resumen).map(([mes, val]) => ({
    Mes: mes,
    "Ventas Totales": val.ventas,
    "Compras Totales": val.compras,
    "Utilidad Bruta": val.ventas - val.compras,
  }));

  const ventasData = ventas.map((v) => ({
    Fecha: v.Fecha_generacion.split("T")[0],
    "Tipo Factura": v.Tipo_factura,
    Consecutivo: v.Consecutivo,
    Receptor: v.Id_comprador
      ? v.Id_comprador.Tipo_comprador === "Natural"
        ? v.Id_comprador.Datos_natural?.[0]?.Nombre
        : v.Id_comprador.Datos_juridica?.[0]?.Nombre
      : "N/A",
    Total: v.Total,
    Impuesto: v.Impuesto,
    "Total Pagar": v.Total_pagar,
  }));

  const comprasData = compras.map((c) => {
    let proveedor = proveedores.value.find((p) => p._id === c.Id_proveedor);
    let nombreProv =
      proveedor?.Tipo_proveedor === "Natural"
        ? proveedor?.Datos_natural[0]?.Nombre
        : proveedor?.Datos_juridico[0]?.Representante_legal[0]?.Nombre;

    return {
      Fecha: c.Fecha_factura.split("T")[0],
      Proveedor: nombreProv,
      Total: c.Total,
      Impuestos: c.Impuestos,
      "Total Pagar": c.Total_pagar,
      "Estado Pago": c.Estado_pago,
      "Método Pago": c.Metodo_pago?.Tipo,
    };
  });

  const wb = XLSX.utils.book_new();

  const wsResumen = XLSX.utils.json_to_sheet(resumenData);
  const wsVentas = XLSX.utils.json_to_sheet(ventasData);
  const wsCompras = XLSX.utils.json_to_sheet(comprasData);

  XLSX.utils.book_append_sheet(wb, wsResumen, "Resumen");
  XLSX.utils.book_append_sheet(wb, wsVentas, "Ventas");
  XLSX.utils.book_append_sheet(wb, wsCompras, "Compras");

  XLSX.writeFile(wb, "Reporte_Utilidad.xlsx");
};
onMounted(() => {
  listarProduccion();
  listarComprador();
  getFacturasVentas();
  // listarFactura();
});
</script>

<template>
  <div class="container">
    <div style="display: flex; justify-content: flex-end; margin: 10px">
      <!-- Botón Crear -->
      <q-btn
        @click="abrirCrear"
        color="primary"
        style="margin-top: 40px; color: white"
      >
        <svg
          version="1.1"
          viewBox="0 0 2048 2048"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(1e3)"
            fill="#ffffff"
            d="m0 0h45l3 2 16 6 15 8 10 8 9 8 10 13 6 10 6 15 4 16 1 9v826h828l17 3 15 5 16 9 10 8 8 7 12 16 8 16 5 14 2 1v46l-2 2-6 18-6 11-9 13-14 14-15 10-16 7-15 4-19 2h-819v822l-2 17-4 14-5 12-9 15-11 12-10 9-13 8-15 7-16 5h-41l-1-2-15-5-16-8-13-10-11-11-10-14-8-17-4-13-2-13v-828h-821l-18-2-15-4-17-8-14-10-12-12-10-14-8-16-6-18v-40h2l1-8 5-14 8-14 9-12h2l2-4 10-9 14-9 15-7 17-4 7-1h763l65-1 1-829 4-19 5-13 8-14 7-9 11-12 14-10 16-8 15-5z"
          />
        </svg>
      </q-btn>

      <!-- Botón Exportar Excel -->
      <q-btn
        class="q-ml-md"
        color="green"
        @click="exportarExcelUtilidad"
        icon="analytics"
        label="Excel Utilidad"
        style="margin-top: 40px; color: white"
      />
    </div>

    <q-dialog v-model="fullWidth" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">Full Width</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="abrirModalCrearFactura"
      persistent
      :maximized="maximizedToggle"
    >
      <q-card>
        <q-bar style="background: #70b039">
          <q-space />
          <q-btn
            dense
            flat
            icon="close"
            @click="abrirModalCrearFactura = false"
          >
            <q-tooltip class="bg-white text-primary">Cerrar</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="titulo">
            <h3 style="margin-bottom: 20px">Crear Nueva Factura</h3>
          </div>

          <q-row class="inputAgregar">
            <q-col cols="12" sm="4" style="width: 20%">
              <q-select
                v-model="compradorSeleccionado"
                :options="options2"
                label="Seleccionar comprador"
                style="margin-top: 20px"
              />
            </q-col>
            <q-col cols="12" sm="4" style="width: 20%">
              <q-select
                v-model="productoSeleccionado"
                :options="options"
                label="Seleccionar producto"
                style="margin-top: 20px"
              />
            </q-col>
            <q-col cols="12" sm="4" style="width: 20%">
              <q-input
                v-model="cantidad"
                label="Cantidad"
                type="number"
                style="margin-top: 20px"
              />
            </q-col>
          </q-row>

          <q-row class="inputAgregar">
            <q-col cols="12" sm="4" class="width: 20%;">
              <q-input
                v-model="precio"
                label="Precio"
                type="number"
                style="margin-top: 20px; width: 100%"
              />
            </q-col>
            <q-col cols="6" sm="4" style="width: 40%" class="inputAgregar2">
              <q-input
                v-model="loteComercialnum"
                label="Consecutivo"
                type="number"
                style="margin-top: 20px"
              />
              <q-btn
                label="➕"
                style="margin-top: 20px; background: green; width: 20%"
                @click="agregarProducto"
              />
              <q-btn
                label="Agregar Pago"
                style="
                  margin-top: 20px;
                  background: green;
                  width: 50%;
                  color: white;
                "
                @click="medium = true"
              />
              <q-dialog v-model="medium">
                <q-card style="width: 700px; max-width: 80vw">
                  <q-card-section>
                    <div class="text-h6">Información de Pago</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-form @submit="guardarPago">
                      <div class="row q-col-gutter-md">
                        <!-- Método de Pago -->
                        <div class="col-12 col-md-6">
                          <q-select
                            v-model="metodoPago.Tipo"
                            label="Método de Pago"
                            :options="['Efectivo', 'Transferencia', 'Tarjeta']"
                            outlined
                            required
                          />
                        </div>

                        <!-- Fecha de Pago -->
                        <div class="col-12 col-md-6">
                          <q-input
                            v-model="metodoPago.Detalles.Fecha_pago"
                            label="Fecha de Pago"
                            type="date"
                            outlined
                            required
                          />
                        </div>

                        <!-- Banco (Solo si no es Efectivo) -->
                        <div
                          class="col-12 col-md-6"
                          v-if="metodoPago.Tipo !== 'Efectivo'"
                        >
                          <q-input
                            v-model="metodoPago.Detalles.Banco"
                            label="Banco"
                            outlined
                            required
                          />
                        </div>

                        <!-- Número de Referencia (Solo si no es Efectivo) -->
                        <div
                          class="col-12 col-md-6"
                          v-if="metodoPago.Tipo !== 'Efectivo'"
                        >
                          <q-input
                            v-model="metodoPago.Detalles.Numero_referencia"
                            label="Número de Referencia"
                            outlined
                            required
                          />
                        </div>

                        <!-- Total a Pagar -->
                        <div class="col-12 col-md-6">
                          <q-input
                            v-model="totalPagar"
                            label="Total a Pagar"
                            type="number"
                            outlined
                            readonly
                          />
                        </div>
                      </div>
                    </q-form>
                  </q-card-section>

                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn
                      flat
                      label="Cancelar"
                      class="bg-blue text-white"
                      v-close-popup
                    />
                    <q-btn
                      flat
                      label="Guardar"
                      class="bg-green text-white"
                      @click="guardarPago"
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-col>
          </q-row>

          <q-table
            :rows="nuevaFactura.productosSeleccionados"
            :columns="[
              {
                name: 'producto',
                required: true,
                label: 'Producto',
                align: 'center',
                field: (row) => row.nombreProducto,
              },
              {
                name: 'precio',
                label: 'Precio',
                align: 'center',
                field: (row) => row.precio,
                format: (val) =>
                  val ? `$${Number(val).toLocaleString()}` : '$0',
              },
              {
                name: 'cantidad',
                label: 'Cantidad',
                align: 'center',
                field: (row) => row.cantidad,
                required: true,
              },
              {
                name: 'total',
                label: 'Total',
                align: 'center',
                field: (row) => row.total,
                format: (val) =>
                  val ? `$${Number(val).toLocaleString()}` : '$0',
              },
              {
                name: 'acciones',
                label: 'Acciones',
                align: 'center',
                field: (row) => row,
              },
            ]"
            row-key="producto"
            class="q-pa-sm text-center"
            style="margin-top: 20px"
          >
            <template v-slot:body-cell-cantidad="props">
              <q-td :props="props" class="text-center q-pa-none">
                <div class="full-height flex flex-center">
                  <q-input
                    v-model.number="props.row.cantidad"
                    type="number"
                    @input="updateTotal(props.row)"
                    min="0"
                    :dense="true"
                    class="q-ma-none text-center"
                    style="width: 100px"
                  />
                </div>
              </q-td>
            </template>

            <template v-slot:body-cell-acciones="props">
              <q-td :props="props" class="text-center">
                <q-btn
                  label="Eliminar"
                  color="negative"
                  @click="eliminarProducto(props.row)"
                  dense
                  size="sm"
                />
              </q-td>
            </template>
          </q-table>
        </q-card-section>

        <q-card-section align="right">
          <q-btn
            label="Cancelar"
            color="negative"
            style="margin-right: 20px"
            @click="cerrarCrear"
          />
          <q-btn label="Crear Factura" color="positive" @click="crearFactura" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <div>
      <q-table
        title="Facturas Ventas"
        :rows="rows"
        :columns="columns"
        row-key="name"
        bordered
        class="tabla"
      >
        <template v-slot:body-cell-opciones="props">
          <q-td :props="props">
            <button @click="ver(props.row)">👁️</button>
          </q-td>
        </template>
      </q-table>
      <div :class="registroExitoso ? 'success1' : 'success'">
        <div class="success__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            height="24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              fill="#393a37"
              d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="success__title">{{ text }}</div>
        <div class="success__close" @click="cerrar()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 20 20"
            height="20"
          >
            <path
              fill="#393a37"
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <q-dialog v-model="abrir" persistent :maximized="maximizedToggle">
      <q-card>
        <q-bar style="background: green">
          <q-space />
          <q-btn dense flat icon="close" @click="abrir = false">
            <q-tooltip class="bg-white text-primary">Cerrar</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="titulo">
            <h3 style="margin-bottom: 20px">Detalles de la Factura</h3>
          </div>

          <q-row class="inputAgregar">
            <q-col cols="12" sm="4" style="width: 20%">
              <q-select
                v-model="compradorSeleccionado"
                :options="options2"
                label="Seleccionar comprador"
                style="margin-top: 20px"
                :disabled="false"
              />
            </q-col>
            <q-col cols="12" sm="4" style="width: 20%">
              <q-select
                v-model="productoSeleccionado"
                :options="options"
                label="Seleccionar producto"
                style="margin-top: 20px"
              />
            </q-col>
            <q-col cols="12" sm="4" style="width: 20%">
              <q-input
                v-model="fecha"
                label="Fecha"
                class="q-mb-sm"
                :disabled="false"
              />
            </q-col>
          </q-row>

          <q-row class="inputAgregar">
            <q-col cols="12" sm="4" style="width: 20%">
              <q-input
                v-model="cantidad"
                label="Cantidad"
                type="number"
                style="margin-top: 20px"
              />
            </q-col>
            <q-col cols="12" sm="4" style="width: 20%">
              <q-input
                v-model="precio"
                label="Precio"
                type="number"
                style="margin-top: 20px"
              />
            </q-col>
            <q-col cols="6" sm="4" style="width: 20%" class="inputAgregar2">
              <q-input
                v-model="loteComercialnum"
                label="Lote Comercial"
                type="number"
                style="margin-top: 20px"
                :disabled="true"
              />
              <q-btn
                label="➕"
                style="margin-top: 20px; background: #70b039; width: 20%"
                @click="agregarProducto"
              />
            </q-col>
          </q-row>

          <q-table
            :rows="detallesFactura"
            :columns="[
              {
                name: 'nombreProducto',
                label: 'Producto',
                align: 'left',
                field: 'nombreProducto',
              },
              {
                name: 'cantidad',
                label: 'Cantidad',
                align: 'center',
                field: 'cantidad',
              },
              {
                name: 'precio',
                label: 'Precio',
                align: 'center',
                field: 'precio',
                format: (val) => `$${Number(val).toLocaleString()}`,
              },
              {
                name: 'subtotal',
                label: 'Subtotal',
                align: 'center',
                field: 'subtotal',
                format: (val) => `$${Number(val).toLocaleString()}`,
              },
              {
                name: 'iva',
                label: 'IVA',
                align: 'center',
                field: 'iva',
                format: (val) => {
                  return `$${Number(val || 0).toLocaleString()}`;
                },
              },
            ]"
            row-key="nombreProducto"
            class="q-pa-sm text-center"
            style="margin-top: 20px"
          >
            <template v-slot:body-cell-cantidad="props">
              <q-td :props="props" class="text-center q-pa-none">
                <div class="full-height flex flex-center">
                  <q-input
                    v-model.number="props.row.cantidad"
                    type="number"
                    @input="updateTotal(props.row)"
                    min="0"
                    :dense="true"
                    class="q-ma-none text-center"
                    style="width: 100px"
                  />
                </div>
              </q-td>
            </template>
          </q-table>
        </q-card-section>
        <q-card-section align="right">
          <q-btn
            label="Cancelar"
            color="red"
            style="margin-right: 20px"
            @click="cerrareditar"
          />
          <q-btn
            label="Guardar Factura"
            color="positive"
            @click="EditarFactura"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="open">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
* {
  margin: 0;
}
.container {
  padding: 20px;
}

.titulo {
  text-align: center;
}

.formulario {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.inputAgregar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 80px;
}
.inputAgregar2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 80px;
}
.inputFeCom {
  width: 20%;
}
.success {
  position: absolute;
  z-index: 10000;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #84d65a;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.success1 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #84d65a;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.success__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.success__icon path {
  fill: #393a37;
}

.success__title {
  font-weight: 500;
  font-size: 14px;
  color: #393a37;
}

.success__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.success__close path {
  fill: #393a37;
}
</style>
