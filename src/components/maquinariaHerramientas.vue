<template>
  <div class="app">
    <div class="q-pa-md">
      <q-table
        title="Maquinaria y Herramientas"
        :rows="maquinariaFiltradas"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-select
            v-model="filtroNombre"
            :options="opcionesNombres"
            label="Filtrar por nombre"
            dense
            outlined
            emit-value
            map-options
            class="q-mr-sm"
            style="min-width: 220px"
          />

          <q-select
            v-model="filtroTipo"
            :options="['Maquinaria', 'Herramienta']"
            label="Filtrar por estado"
            dense
            outlined
            class="q-mr-sm"
            style="min-width: 180px"
          />
          <q-btn
            color="negative"
            outline
            label="Limpiar"
            icon="clear_all"
            class="q-mr-sm limpiar"
            @click="limpiarFiltros"
          />
          <q-btn color="primary" @click="crear()">
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
        </template>
        <template v-slot:body-cell-Acciones="props">
          <q-td :props="props">
            <q-btn color="secondary" @click="editar(props.row)">
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(1736)"
                  fill="#ffffff"
                  d="m0 0h75l4 2 30 7 23 8 20 9 19 10 12 8 19 14 12 11 8 7v2h2l7 8 9 10 14 19 12 20 8 15 10 25 7 23 5 25 2 17 1 17v15l-3 31-5 25-7 23-6 15-12 25-11 18-8 11-11 14-12 13-1238 1238-11 7-14 6-57 18-258 80-65 20-13 3h-18l-11-3-16-8-12-11-7-10-6-13-2-8v-21l6-25 11-44 17-66 14-55 19-75 15-58 14-56 9-33 8-16 11-12 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 8-7 1168-1168 14-11 18-13 21-12 21-10 30-10zm28 128-17 2-17 4-18 7-15 9-13 10-7 7-8 7-36 36v2l-4 2v2l-2 1 2 5 181 181h2l2 4h4l7-8 48-48 10-13 9-16 6-14 5-17 2-15v-27l-4-22-4-12-7-16-9-15-11-13-11-11-15-11-12-7-20-8-17-4-17-2zm-138 90m-92 92-8 7-1069 1069-6 22-15 58-11 44-19 74-18 71v3l9-2 64-20 177-55 9-4 1073-1073 2-1v-2h2l-2-5h-2l-2-4h-2l-2-4-176-176z"
                />
                <path
                  transform="translate(77,1919)"
                  fill="#ffffff"
                  d="m0 0h1322l15 2 11 4 11 7 10 9 9 13 5 12 2 10v15l-3 13-4 10-7 10-7 8-10 7-12 6-8 3h-1349v-2l-10-3-11-6-12-11-9-13-5-13-2-10v-12l4-17 8-15 11-12 10-7 15-6z"
                />
              </svg>
            </q-btn>
            <q-btn
              color="secondary"
              icon="build"
              class="q-mx-md"
              @click="openMaintenanceModal(props.row)"
            />
            <q-btn
              color="secondary"
              icon="cleaning_services"
              class="q-mx-md"
              @click="openDesinfeccionModal(props.row)"
            />
          </q-td>

          <q-dialog v-model="showMaintenanceModal">
            <q-card class="q-pa-md" style="min-width: 600px; max-width: 800px">
              <q-card-section>
                <div class="text-h6">Agregar Mantenimiento</div>
              </q-card-section>
              <q-card-section>
                <q-input
                  filled
                  v-model="formMantenimiento.Fecha"
                  label="Fecha"
                  type="date"
                  class="q-mb-md"
                />
                <q-input
                  filled
                  v-model="formMantenimiento.Responsable"
                  label="Responsable"
                  class="q-mb-md"
                />
                <q-input
                  filled
                  v-model="formMantenimiento.Observaciones"
                  label="Observaciones"
                  type="text"
                  class="q-mb-md"
                />
                <q-input
                  filled
                  v-model="formMantenimiento.Precio"
                  label="Precio"
                  type="number"
                  class="q-mb-md"
                />
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="Cancelar" color="negative" v-close-popup />
                <q-btn
                  flat
                  label="Guardar"
                  color="primary"
                  @click="guardarMantenimiento"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
          <q-dialog v-model="showDesinfeccionModal">
            <q-card class="q-pa-md" style="min-width: 600px; max-width: 800px">
              <q-card-section>
                <div class="text-h6">Agregar Desinfección</div>
              </q-card-section>
              <q-card-section>
                <q-input
                  filled
                  v-model="formDesinfeccion.Fecha"
                  label="Fecha"
                  type="date"
                  class="q-mb-md"
                />
                <q-select
                  filled
                  v-model="formDesinfeccion.Insumo"
                  :options="insumos"
                  label="Insumos"
                  option-label="Nombre"
                  option-value="_id"
                  emit-value
                  map-options
                  class="q-mb-md"
                />
                <q-input
                  filled
                  v-model="formDesinfeccion.Responsable"
                  label="Responsable"
                  class="q-mb-md"
                />
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="Cancelar" color="negative" v-close-popup />
                <q-btn
                  flat
                  label="Guardar"
                  color="primary"
                  @click="guardarDesinfeccion"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </template>
      </q-table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useMaquinariaHerramientasStore } from "../stores/maquinariaHerramientas.js";
import { useProveedoresStore } from "../stores/proveedores.js";
import { useInsumosStore } from "../stores/insumos.js";
import Swal from "sweetalert2";

let useMaquinariaHerramientas = useMaquinariaHerramientasStore();
let useProveedores = useProveedoresStore();
let useInsumos = useInsumosStore();
const opcionesNombres = ref([]);

let formatCurrency = (value) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
};

let showMaintenanceModal = ref(false);
let showDesinfeccionModal = ref(false);

let selectedRow = ref(null);

const openMaintenanceModal = (row) => {
  selectedRow.value = row;
  showMaintenanceModal.value = true;
};
const openDesinfeccionModal = (row) => {
  selectedRow.value = row;
  showDesinfeccionModal.value = true;
};
let Proveedores = ref([]);

let columns = [
  {
    name: "Id_proveedor",
    label: "Proveedor",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let proveedor = Proveedores.value.find(
        (proveedor) => proveedor._id === row.Id_proveedor
      );
      if (proveedor.Tipo_proveedor === "Natural") {
        return proveedor ? proveedor.Datos_natural[0].Nombre : "";
      } else {
        return proveedor
          ? proveedor.Datos_juridico[0].Representante_legal[0].Nombre
          : "";
      }
    },
  },
  {
    name: "Nombre",
    label: "Nombre",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Nombre",
  },
  {
    name: "Tipo",
    label: "Tipo de maquinaria o herramienta",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Tipo",
  },
  {
    name: "Fecha_compra",
    label: "Fecha de Compra",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => (row.Fecha_compra ? row.Fecha_compra.split("T")[0] : ""),
  },

  {
    name: "Observaciones",
    label: "Observaciones",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Observaciones",
  },
  {
    name: "Cantidad",
    label: "Cantidad",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Cantidad",
  },
  {
    name: "Total",
    label: "Total",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Total),
  },

  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
];

let rows = ref([]);

let getMaquinariaHerramientas = async () => {
  let maquinariaHerramientas =
    await useMaquinariaHerramientas.getMaquinariaHerramientas();
  Proveedores.value = await useProveedores.getProveedores();
  rows.value = maquinariaHerramientas.filter(
    (maquinariaHerramientas) => maquinariaHerramientas.Id_finca === finca.value
  );
};

let crear = () => {
  router.push("/formMaquinariaHerramientas");
};

let editar = (maquinariaHerramientas) => {
  let id = maquinariaHerramientas._id;
  router.push({ path: "/formMaquinariaHerramientas", query: { id } });
};

let insumos = ref([]);
let finca = ref("");
const filtroNombre = ref(null);
const filtroTipo = ref(null);
const maquinariaFiltradas = computed(() => {
  return rows.value.filter((p) => {
    const coincideNumero =
      !filtroNombre.value || p.Nombre == filtroNombre.value;
    const coincideEstado = !filtroTipo.value || p.Tipo === filtroTipo.value;
    return coincideNumero && coincideEstado;
  });
});
let formMantenimiento = ref({
  Fecha: "",
  Responsable: "",
  Observaciones: "",
  Precio: 0,
});

let formDesinfeccion = ref({
  Fecha: "",
  insumo: "",
  Responsable: "",
});

const cargarUsuarios = async () => {
  try {
    const data = await useMaquinariaHerramientas.getMaquinariaHerramientas();
    console.log(data);

    rows.value = data;

    const nombresUnicos = [...new Set(data.map((u) => u.Nombre))];
    opcionesNombres.value = nombresUnicos.map((n) => ({ label: n, value: n }));
  } catch (error) {
    console.error(error);
  }
};
const limpiarFiltros = () => {
  filtroNombre.value = null;
  filtroTipo.value = null;
};
const guardarMantenimiento = async () => {
  try {
    await useMaquinariaHerramientas.addMantenimiento(
      selectedRow.value._id,
      formMantenimiento.value
    );
    Swal.fire("Éxito", "Mantenimiento agregado correctamente", "success");

    formMantenimiento.value = {
      fecha: "",
      descripcion: "",
      responsable: "",
      costo: "",
    };

    showMaintenanceModal.value = false;
    getMaquinariaHerramientas();
  } catch (error) {
    console.error(error);
    Swal.fire("Error", "No se pudo guardar el mantenimiento", "error");
  }
};

const guardarDesinfeccion = async () => {
  try {
    await useMaquinariaHerramientas.addDesinfeccion(
      selectedRow.value._id,
      formDesinfeccion.value
    );
    Swal.fire("Éxito", "Desinfección agregada correctamente", "success");

    formDesinfeccion.value = {
      fecha: "",
      descripcion: "",
      responsable: "",
      productos: "",
    };

    showDesinfeccionModal.value = false;
    getMaquinariaHerramientas();
  } catch (error) {
    console.error(error);
    Swal.fire("Error", "No se pudo guardar la desinfección", "error");
  }
};

onMounted(async () => {
  finca.value = localStorage.getItem("Finca");
  console.log(finca.value);
  insumos.value = await useInsumos.getInsumos();
  getMaquinariaHerramientas();
  cargarUsuarios();
});
</script>
<style scoped></style>
