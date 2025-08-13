<template>
  <div class="app">
    <div class="q-pa-md">
      <q-table
        title="Producciones"
        :rows="produccionesFiltradas"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-select
            v-model="filtroEstado"
            :options="['En curso', 'Completado', 'Cancelado']"
            label="Filtrar por Estado"
            dense
            outlined
            class="q-mr-sm"
            style="min-width: 180px"
          />
          <q-select
            v-model="filtroCalidad"
            :options="['Excelente', 'Buena', 'Regular', 'Mala']"
            label="Filtrar por Calidad"
            dense
            outlined
            class="q-mr-sm"
            style="min-width: 180px"
          />
          <q-btn
            color="negative"
            outline
            label="Clean"
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

          <q-btn
            class="q-mx-md"
            color="secondary"
            @click="exportarPDF"
            icon="picture_as_pdf"
          />
        </template>
        <template v-slot:body-cell-Estado_produccion="props">
          <q-td :props="props">
            <q-chip
              color="secondary"
              text-color="white"
              :label="props.row.Estado_produccion"
            />
          </q-td>
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
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useProduccionesStore } from "../stores/producciones.js";
import { useCultivosStore } from "../stores/cultivos.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
let useProducciones = useProduccionesStore();
let useCultivos = useCultivosStore();

let cultivos = ref([]);

let columns = [
  {
    name: "Id_cultivo",
    label: "Cultivo",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let cultivo = cultivos.value.find(
        (cultivo) => cultivo._id === row.Id_cultivo
      );
      return cultivo ? cultivo.Nombre : "";
    },
  },
  {
    name: "Fecha",
    label: "Fecha",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => row.Fecha.split("T")[0],
  },
  {
    name: "NroLote",
    label: "Numero de lote",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "NroLote",
  },
  {
    name: "Especie",
    label: "Especie",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Especie",
  },
  {
    name: "Cantidad",
    label: "Cantidad producida",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Cantidad",
  },
  {
    name: "Cantidad_trabajadores",
    label: "Cantidad de trabajadores",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Cantidad_trabajadores",
  },
  {
    name: "Observaciones",
    label: "Observaciones",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Observaciones",
  },
  {
    name: "Estado_produccion",
    label: "Estado",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Estado_produccion",
  },
  {
    name: "Calidad_produccion",
    label: "Calidad",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Calidad_produccion",
  },
  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
];

let rows = ref([]);
let exportarPDF = () => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Reporte de Producciones", 14, 22);

  const headers = columns.map((col) => col.label);
  const data = rows.value.map((row) =>
    columns.map((col) => {
      if (typeof col.field === "function") {
        return col.field(row);
      }
      return row[col.field];
    })
  );

  const group1 = columns.slice(0, 5);
  const group2 = columns.slice(5); // Segundo grupo de columnas

  doc.autoTable({
    head: [group1.map((col) => col.label)],
    body: rows.value.map((row) =>
      group1.map((col) =>
        typeof col.field === "function" ? col.field(row) : row[col.field]
      )
    ),
    startY: 30,
  });

  doc.autoTable({
    head: [group2.map((col) => col.label)],
    body: rows.value.map((row) =>
      group2.map((col) =>
        typeof col.field === "function" ? col.field(row) : row[col.field]
      )
    ),
    startY: doc.lastAutoTable.finalY + 10,
  });
  doc.save("Reporte_Producciones.pdf");
};
let traerProducciones = async () => {
  let producciones = await useProducciones.getProducciones();
  cultivos.value = await useCultivos.getCultivos();
  console.log(producciones);
  rows.value = producciones.filter(
    (produccion) => produccion.Id_finca === finca.value
  );
};

let crear = () => {
  router.push("/formProducciones");
};

let editar = (producciones) => {
  router.push({ path: "/formProducciones", query: { id: producciones._id } });
};

let finca = ref("");
const filtroEstado = ref(null);
const filtroCalidad = ref(null);

const produccionesFiltradas = computed(() => {
  return rows.value.filter((p) => {
    const coincideEstado =
      !filtroEstado.value || p.Estado_produccion == filtroEstado.value;
    const coincideCalidad =
      !filtroCalidad.value || p.Calidad_produccion === filtroCalidad.value;
    return coincideEstado && coincideCalidad;
  });
});

const limpiarFiltros = () => {
  filtroEstado.value = null;
  filtroCalidad.value = null;
};

onMounted(() => {
  finca.value = localStorage.getItem("Finca");
  console.log(finca.value);
  traerProducciones();
});
</script>

<style scoped></style>
