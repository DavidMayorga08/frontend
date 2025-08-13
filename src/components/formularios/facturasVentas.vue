<script setup>
import { ref, onMounted } from "vue";

import { computed } from "vue";
import { Notify } from "quasar";

import { useInsumosStore } from "../../stores/insumos.js";
import { useCompradoresStore } from "../../stores/compradores.js";
import { useFacturasVentasStore } from "../../stores/facturasVentas.js";

const useComprador = useCompradoresStore();
const useProduccion = useInsumosStore();

let useFacturasVentas = useFacturasVentasStore();
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
      console.log(`Item ${index}:`, item); // Verifica la estructura completa de cada item

      // Verifica que Datos_natural tenga elementos y accede al primer elemento
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
    const data = await useProduccion.getInsumos();
    console.log("Respuesta de getCompradores:", data); // Ver estructura

    if (!Array.isArray(data)) {
      console.error("Error: data no es un array");
      return;
    }

    produccion.length = 0;

    data.forEach((item) => {
      produccion.push({
        label: `${item?.Nombre}`,
        value: item._id,
      });
    });

    console.log("Lista de compradores:", produccion);
  } catch (error) {
    console.error("Error al listar compradores:", error);
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
  if (productoSeleccionado.value && cantidad.value && precio.value) {
    if (compradorSeleccionado.value) {
      nuevaFactura.value.comprador = compradorSeleccionado.value.value;
      nuevaFactura.value.loteComercialnum = loteComercialnum.value;

      if (!nuevaFactura.value.productosSeleccionados) {
        nuevaFactura.value.productosSeleccionados = [];
      }
    } else {
      console.log("Por favor, selecciona un comprador.");
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

    console.log(productoSeleccionado);

    if (productoExistente) {
      productoExistente.cantidad += Number(cantidad.value);
      productoExistente.subtotal =
        productoExistente.precio * productoExistente.cantidad;
    } else {
      let producto = options.value.find(
        (p) => p.value === productoSeleccionado.value.value
      );

      const nuevoProducto = {
        idProduccion: productoSeleccionado.value.value,
        nombreProducto: productoSeleccionado.value.label,
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

    const totalGeneral = isEditingExistingFactura
      ? detallesFactura.value
          .reduce((acc, producto) => acc + producto.subtotal, 0)
          .toLocaleString("es-CO")
      : nuevaFactura.value.productosSeleccionados
          .reduce((acc, producto) => acc + producto.total, 0)
          .toLocaleString("es-CO");

    nuevaFactura.value.totalGeneral = totalGeneral;

    productoSeleccionado.value = null;
    cantidad.value = null;
    precio.value = null;
  } else {
    console.log("Por favor, completa todos los campos.");
  }
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

const crearFactura = async () => {
  if (nuevaFactura.value.productosSeleccionados.length === 0) {
    Notify.create({
      message: "Debe agregar al menos un producto para crear la factura.",
    });
    return;
  }

  const detalle = nuevaFactura.value.productosSeleccionados.map((producto) => {
    const subtotal = producto.precio * producto.cantidad;
    return {
      idProduccion: producto.idProduccion,
      nombreProducto: producto.nombreProducto,
      cantidad: producto.cantidad,
      precio: producto.precio,
      subtotal: subtotal,
      iva:100,
    };
  });

  const facturaData = {
    Tipo_factura: "Venta",
    Fecha_generacion: new Date().toISOString(),
    loteComercialnum: loteComercialnum.value,
    Productos: detalle,
    Id_produccion: producto.idProduccion,
    idComprador: detallesFactura.value.idComprador,
  };
  console.log(facturaData);

  try {
    await useFacturasVentas.postVenta(facturaData);

    Notify.create({
      type: "positive",

      message: "Factura creada exitosamente",
    });

    abrirModalCrearFactura.value = false;

    nuevaFactura.value = {
      productosSeleccionados: [],
      numero: "",
      fecha: "",
      comprador: "",
      loteComercialnum: "",
    };
    // listarFactura();
  } catch (error) {
    let errorMessage = "No hay suficiente stock para el producto .";

    if (error.response && error.response.data && error.response.data.msg) {
      errorMessage = error.response.data.msg;
    }

    Notify.create({
      message: errorMessage,
      color: "red",
    });

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
    Tipo_factura: "Venta",
    Fecha_generacion: new Date().toISOString(),
    idComprador: detallesFactura.value.idComprador,
    loteComercialnum: loteComercialnum.value,
    Productos: detalle,
  };

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
    name: "Id_finca",
    label: "Finca",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Id_finca",
  },
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
    name: "Emisor",
    label: "Emisor",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Emisor.Nombre",
  },
  {
    name: "Receptor",
    label: "Receptor",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Receptor.Nombre",
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
let getFacturasVentas = async () => {
  let facturasVentas = await useFacturasVentas.getFacturasVentas();
  rows.value = facturasVentas;
};
onMounted(() => {
  listarProduccion();
  listarComprador();
  getFacturasVentas();
  // listarFactura();
});
</script>

<template>
  <!-- <q-dialog
    v-model="abrirModalCrearFactura"
  > -->
  <q-card persistent>
    <q-bar style="background: #70b039">
      <q-space />
      <q-btn dense flat icon="close" @click="abrirModalCrearFactura = false">
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
            :lazy="false"
          />
        </q-col>
        <q-col cols="12" sm="4" style="width: 20%">
          <q-select
            v-model="productoSeleccionado"
            :options="options"
            label="Seleccionar producto"
            style="margin-top: 20px"
            :lazy="false"
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
            style="margin-top: 20px"
          />
        </q-col>
        <q-col cols="6" sm="4" style="width: 20%" class="inputAgregar2">
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
            format: (val) => (val ? `$${Number(val).toLocaleString()}` : '$0'),
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
            format: (val) => (val ? `$${Number(val).toLocaleString()}` : '$0'),
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
  <!-- </q-dialog> -->
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
</style>
