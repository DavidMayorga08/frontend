<template>
  <div class="app">
    <div class="q-pa-md">
      <q-table
        title="Analisis de suelos"
        :rows="AnalisisFiltradas"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-select
            v-model="filtroNombre"
            :options="opcionesNombres"
            label="Filtrar por Responsable"
            dense
            outlined
            emit-value
            map-options
            class="q-mr-sm"
            style="min-width: 220px"
          />
          <q-select
            v-model="filtroTipo"
            :options="['Preliminar', 'Finalizado', 'Revisado']"
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
          <q-btn
            class="q-mx-md"
            color="secondary"
            @click="exportarPDF"
            icon="picture_as_pdf"
          />
        </template>
        <template v-slot:body-cell-Estado="props">
          <q-td :props="props">
            <q-chip
              color="secondary"
              text-color="white"
              :label="props.row.Estado"
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
        <template v-slot:body-cell-Resultado="props">
          <q-td :props="props">
            <q-btn color="primary" @click="verResultados(props.row)">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 511.386142 340.660304"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(-0.106148,426.505739) scale(0.100000,-0.100000)"
                  fill="#ffffff"
                  stroke="none"
                >
                  <path
                    d="M2390 4260 c-992 -62 -1885 -647 -2327 -1525 -62 -124 -65 -133 -61-188 4 -47 16 -81 62 -169 238 -457 588 -835 1022 -1104 444 -275 944 -416 1474 -416 459 1 844 91 1249 293 297 148 491 288 732 528 228 228 376 430 518 704 52 99 56 113 56 175 0 60 -5 77 -48 162 -142 279 -297 491 -526 721 -242 241 -436 381 -732 528 -446 222 -930 321 -1419 291z m423 -475 c445 -52 849 -217 1193 -486 128 -100 325 -302 423 -432 85 -113 191 -284 191 -307 0 -23 -106 -194 -191 -307 -89 -118 -274 -312 -384 -400 -477 -386 -1087 -577 -1670 -523 -591 55 -1112 304 -1513 725 -174 182 -371 467 -358 517 3 13 35 69 71 126 187 299 476 584 769 761 208 126 511 245 738 291 246 50 501 62 731 35z"
                  />
                  <path
                    d="M2393 3495 c-228 -41 -433 -164 -577 -346 -250 -316 -274 -751 -60 -1096 64 -104 206 -244 312 -307 94 -56 244 -110 352 -127 92 -14 282 -6 365 16 319 84 568 312 671 612 74 217 74 409 0 626 -149 436 -607 705 -1063 622z m321 -477 c197 -64 327 -244 327 -453 1 -140 -44 -250 -142 -347 -235 -236 -632 -165 -777 139 -37 77 -37 79 -37 203 0 124 0 126 37 203 108 226 356 333 592 255z"
                  />
                </g>
              </svg>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="rowsResultados.length">
      <q-table
        title="Resultados"
        :rows="rowsResultados"
        :columns="columnsResultados"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-btn color="negative" @click="cerrarResultados()">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 297.910350 297.916632"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(-107.044825,404.954655) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M1195 4033 c-44 -23 -84 -63 -106 -105 -23 -46 -25 -127 -3 -171 9 -18 278 -294 597 -614 l582 -583 -582 -582 c-319 -321 -588 -597 -597 -615 -22 -44 -20 -125 3 -171 24 -46 76 -97 114 -111 36 -14 117 -14 154 -1 15 6 290 273 616 598 l587 587 588 -587 c325 -325 600 -592 615 -598 37 -13 118 -13 154 1 38 14 90 65 114 111 23 46 25 127 3 171 -9 18 -278 294 -597 615 l-582 582 582 583 c319 320 588 596 597 614 21 41 21 125 0 166 -23 45 -63 86 -106 108 -46 23 -127 25 -171 3 -18 -9 -294 -278 -614 -597 l-583 -582 -582 582 c-321 319 -597 588 -615 597 -41 20 -129 20 -168 -1z"
                />
              </g>
            </svg>
          </q-btn>
        </template>
      </q-table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useAnalisisSuelosStore } from "../stores/analisisSuelos.js";
import { useParcelasStore } from "../stores/parcelas.js";
import { useRouter } from "vue-router";
const router = useRouter();
import jsPDF from "jspdf";
import "jspdf-autotable";
const opcionesNombres = ref([]);

let useAnalisisSuelos = useAnalisisSuelosStore();

let useParcelas = useParcelasStore();

let parcelas = ref([]);

let columns = [
  {
    name: "Fecha",
    label: "Fecha",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => row.Fecha.split("T")[0],
  },
  {
    name: "Id_parcela",
    label: "Parcela",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let parcela = parcelas.value.find(
        (parcela) => parcela._id === row.Id_parcela
      );
      return parcela ? parcela.Numero : "";
    },
  },
  {
    name: "Responsable",
    label: "Responsable",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Responsable",
  },
  {
    name: "Laboratorio",
    label: "Laboratorio",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Laboratorio",
  },
  {
    name: "Recomendaciones",
    label: "Recomendaciones",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Recomendaciones",
  },
  {
    name: "Muestra",
    label: "Muestra",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Muestra",
  },
  {
    name: "Estado",
    label: "Estado",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Estado",
  },
  {
    name: "Resultado",
    label: "Resultado",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Resultado",
  },
  {
    name: "Acciones",
    label: "",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Acciones",
  },
];

let rows = ref([]);

let columnsResultados = [
  {
    name: "Fosforo",
    label: "Fósforo",
    align: "center",
    field: "Fosforo",
  },
  {
    name: "Azufre",
    label: "Azufre",
    align: "center",
    field: "Azufre",
  },
  {
    name: "Zinc",
    label: "Zinc",
    align: "center",
    field: "Zinc",
  },
  {
    name: "Manganeso",
    label: "Manganeso",
    align: "center",
    field: "Manganeso",
  },
  {
    name: "Cobre",
    label: "Cobre",
    align: "center",
    field: "Cobre",
  },
  {
    name: "Potasio",
    label: "Potasio",
    align: "center",
    field: "Potasio",
  },
  {
    name: "Calcio",
    label: "Calcio",
    align: "center",
    field: "Calcio",
  },
  {
    name: "Magnesio",
    label: "Magnesio",
    align: "center",
    field: "Magnesio",
  },
  {
    name: "Sodio",
    label: "Sodio",
    align: "center",
    field: "Sodio",
  },
];

let rowsResultados = ref([]);

let exportarPDF = () => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Reporte de Analisis Suelo", 14, 22);

  const columnasImportantes = columns.slice(0, 5);

  doc.autoTable({
    head: [columnasImportantes.map((col) => col.label)],
    body: rows.value.map((row) =>
      columnasImportantes.map((col) =>
        typeof col.field === "function" ? col.field(row) : row[col.field]
      )
    ),
    startY: 30,
  });

  doc.save("Reporte_Analisis_Suelo.pdf");
};

let traerAnalisisSuelos = async () => {
  let response = await useAnalisisSuelos.getAnalisisSuelos();
  parcelas.value = await useParcelas.getParcelas();
  rows.value = response.filter((analisisSuelos) => {
    return analisisSuelos.Id_finca === finca.value;
  });
};

let crear = () => {
  router.push("/formAnalisisSuelos");
};

let editar = (analisisSuelos) => {
  let id = analisisSuelos._id;
  router.push({ path: "/formAnalisisSuelos", query: { id } });
};

let finca = ref("");
const filtroNombre = ref(null);
const filtroTipo = ref(null);
const AnalisisFiltradas = computed(() => {
  return rows.value.filter((p) => {
    const coincideNumero =
      !filtroNombre.value || p.Responsable == filtroNombre.value;
    const coincideEstado = !filtroTipo.value || p.Estado === filtroTipo.value;
    return coincideNumero && coincideEstado;
  });
});

const cargarResponsables = async () => {
  try {
    const data = await useAnalisisSuelos.getAnalisisSuelos();
    console.log(data);

    rows.value = data;

    const nombresUnicos = [...new Set(data.map((u) => u.Responsable))];
    opcionesNombres.value = nombresUnicos.map((n) => ({ label: n, value: n }));
  } catch (error) {
    console.error(error);
  }
};
const limpiarFiltros = () => {
  filtroNombre.value = null;
  filtroTipo.value = null;
};

let verResultados = (Resultados) => {
  rowsResultados.value = [
    {
      Fosforo: Resultados.Resultado[0].Fosforo,
      Azufre: Resultados.Resultado[0].Azufre,
      Zinc: Resultados.Resultado[0].Zinc,
      Manganeso: Resultados.Resultado[0].Manganeso,
      Cobre: Resultados.Resultado[0].Cobre,
      Potasio: Resultados.Resultado[0].Potasio,
      Calcio: Resultados.Resultado[0].Calcio,
      Magnesio: Resultados.Resultado[0].Magnesio,
      Sodio: Resultados.Resultado[0].Sodio,
    },
  ];
};

let cerrarResultados = () => {
  rowsResultados.value = [];
};

onMounted(() => {
  finca.value = localStorage.getItem("Finca");
  console.log(finca.value);
  traerAnalisisSuelos();
  cargarResponsables();
});
</script>
<style scoped></style>
