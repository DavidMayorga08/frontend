<template>
  <div class="app">
    <div class="cont_spinner" v-if="spinner">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <header class="main-header">
      <label for="btn-nav" class="btn-nav">
        <svg
          version="1.1"
          viewBox="0 0 2048 2048"
          width="46"
          height="46"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(350,479)"
            fill="#fff"
            d="m0 0h1347l20 2 16 5 16 8 13 10 8 8 10 14 8 18 4 18v28l-4 17-5 12-8 14-9 11-10 9-13 8-14 6-16 4-9 1h-1362l-14-2-15-5-15-8-9-7-8-7-10-13-8-14-5-15-3-19v-11l2-16 5-16 8-16 9-12 11-11 15-10 17-7 15-3z"
          />
          <path
            transform="translate(350,927)"
            fill="#fff"
            d="m0 0h1347l20 2 16 5 16 8 13 10 8 8 10 14 8 18 4 18v28l-4 17-5 12-8 14-9 11-10 9-15 9-15 6-13 3-9 1h-1362l-14-2-15-5-15-8-9-7-8-7-10-13-8-14-5-15-3-19v-11l2-16 5-16 8-16 9-12 11-11 15-10 17-7 15-3z"
          />
          <path
            transform="translate(350,1375)"
            fill="#fff"
            d="m0 0h1347l20 2 16 5 16 8 13 10 8 8 10 14 8 18 4 18v28l-4 17-5 12-8 14-9 11-10 9-15 9-15 6-13 3-9 1h-1362l-18-3-13-5-13-7-9-7-8-7-10-13-8-14-5-15-3-19v-11l2-16 5-16 8-16 9-12 11-11 15-10 17-7 15-3z"
          />
        </svg>
      </label>
      <input type="checkbox" id="btn-nav" v-model="check"/>

      <div class="user-profile-button">
        <button title="Ver perfil" @click="verPerfil()">
          <svg
            version="1.1"
            viewBox="0 0 2048 2048"
            width="35"
            height="35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="translate(956)"
              fill="#fff"
              d="m0 0h144v1l62 7 46 7 44 9 48 12 36 11 36 12 34 13 38 16 24 11 17 9 16 8 26 14 22 13 23 14 24 16 20 14 18 13 13 10 14 11 16 13 13 11 14 12 16 15 10 9 8 8 6 5 6 7 24 24 7 8 12 13 9 11 10 11 11 14 13 16 14 19 13 18 16 23 24 38 14 24 14 26 14 27 15 32 12 28 13 33 13 37 13 43 13 52 10 50 6 40 6 54 2 1v159l-2 2-5 47-6 43-8 43-9 39-10 37-14 44-12 33-15 37-15 33-16 33-15 28-14 24-12 20-16 25-7 10-11 16-14 19-13 17-11 14-14 17-13 15-11 12-7 8-14 15-39 39-8 7-14 13-8 7-13 11-11 9-16 13-16 12-19 14-10 7-19 13-17 11-24 15-26 15-26 14-15 8-23 11-24 11-36 15-38 14-40 13-36 10-42 10-35 7-44 7-59 7-18 2h-140v-1l-22-3-44-5-38-6-50-10-40-10-37-11-36-12-30-11-34-14-33-15-17-8-38-20-24-14-22-13-23-15-25-17-19-14-12-9-13-10-16-13-11-9-10-9-8-7-10-9-12-11-13-12-30-30-7-8-7-7-7-8-11-12-9-11-12-14-7-9-11-14-15-20-13-18-16-24-13-20-15-25-12-21-15-28-16-32-16-36-12-30-13-36-10-30-12-43-10-42-7-35-8-53-6-57-1-1v-144l1-2 6-57 7-46 8-41 7-30 8-31 11-36 14-41 15-38 14-32 13-28 20-38 14-24 8-14 15-24 12-18 13-19 14-19 15-20 10-12 8-10 11-13 12-14 11-12 1-2h2l2-4 13-13 7-8 19-19h2l1-3 8-7 8-8 8-7 12-11 11-9 14-12 15-12 17-13 16-12 17-12 16-11 17-11 19-12 22-13 25-14 39-20 37-17 39-16 36-13 37-12 36-10 37-9 40-8 45-7 34-4zm25 121-43 3-43 5-47 8-44 10-40 11-37 12-32 12-29 12-37 17-22 11-22 12-21 12-13 8-22 14-22 15-18 13-16 12-16 13-9 7-15 13-10 9-8 7-12 11-12 12-7 6v2l-3 1-7 8-13 13-7 8-9 10-9 11-13 15-10 13-12 15-10 14-7 10-12 17-24 38-16 28-12 23-8 15-13 28-12 28-15 39-14 43-10 36-10 44-7 39-4 29-3 26-3 45v80l3 45 6 49 7 41 9 40 11 41 16 49 16 41 16 36 9 19 20 38 11 19 8 13 15 24 11 16 20 28 11 14 10 13 12 14 9 11 12 13 7 8 15 15 3-5 11-24 17-34 14-24 11-18 12-18 12-17 8-11 14-18 11-13 9-11 5-5v-2h2l7-8 6-7 17-17 2-1v-2l4-2 11-11 11-9 11-10 14-11 15-12 17-12 27-18 16-10 19-11 26-14 29-14 29-12 27-10 34-11 34-9 39-8 39-6 31-3 14-1 28-1h30l38 2 38 4 38 6 41 9 36 10 35 12 28 11 21 9 44 22 24 14 21 13 12 8 20 14 21 16 10 8 11 9 10 9 8 7 10 9 34 34 7 8 9 10 9 11 13 16 14 19 12 17 13 20 11 18 13 23 14 27 10 21 7 14 7-6 7-8 12-13 9-10 8-10 13-15 12-16 10-13 13-18 11-16 11-17 15-24 14-25 12-22 17-34 19-44 14-38 14-43 11-41 9-41 7-41 5-40 3-40 1-26v-55l-2-38-3-33-5-39-8-44-9-39-10-36-5-16-12-36-11-28-11-26-13-28-17-34-13-23-16-27-11-17-14-21-13-18-14-19-13-16-11-14-11-12-9-11-15-16-7-8h-2l-2-4-16-16h-2v-2h-2v-2l-8-7-9-9-11-9-12-11-11-9-16-13-13-10-19-14-17-12-15-10-22-14-27-16-22-12-23-12-25-12-27-12-28-11-25-9-36-12-40-11-40-9-38-7-38-5-31-3-35-2zm35 1220-29 1-33 3-33 5-34 7-29 8-36 12-32 13-22 10-19 10-25 14-22 14-17 12-11 8-13 10-13 11-11 9-7 6v2l-4 2-30 30-7 8-12 14-13 16-12 16-14 20-15 24-14 25-13 26-11 25-10 27-2 5v5l7 6 20 15 31 21 24 15 22 13 22 12 23 12 33 16 31 13 45 17 38 12 37 10 41 9 33 6 44 6 34 3 36 2h62l47-3 46-5 37-6 39-8 32-8 41-12 35-12 36-14 27-12 28-13 31-16 24-14 19-11 23-15 24-16 13-10 17-12-1-8-9-24-11-26-14-29-15-27-15-24-12-17-11-15-11-14-12-14-9-10-7-8-31-31-8-7-14-12-17-13-13-10-24-16-19-12-25-14-16-8-27-13-28-11-36-12-34-9-36-7-36-5-27-2z"
            />
            <path
              transform="translate(1026,320)"
              fill="#fff"
              d="m0 0 24 1 36 4 29 6 28 8 27 10 28 13 25 14 18 12 16 12 10 8 13 11 17 16 12 13 12 14 12 16 11 16 13 21 13 25 11 26 11 33 6 25 5 29 3 36v29l-3 35-5 29-6 24-12 36-11 25-13 25-13 21-12 17-11 14-12 14-12 13-10 10-8 7-14 12-17 13-15 10-18 11-18 10-24 11-27 10-23 7-33 7-30 4-14 1h-44l-31-3-27-5-31-8-26-9-23-10-16-8-15-8-22-14-18-13-11-9-15-13-5-4-10-10v-2h-2l-7-8-11-12-11-14-13-18-12-19-10-18-14-29-10-27-7-23-7-33-4-30-1-13v-43l3-30 4-24 8-32 9-27 10-24 8-16 9-17 10-16 11-16 13-17 13-15 9-10 17-17 11-9 13-11 11-8 21-14 17-10 23-12 23-10 36-12 30-7 26-4 19-2zm-22 122-25 3-23 5-30 10-27 13-18 11-14 10-11 9-10 9-18 18-8 10-12 16-12 19-8 16-8 18-8 25-5 22-3 21-1 14v24l2 21 5 28 7 24 9 22 8 16 9 16 14 20 13 15 22 22 14 11 12 9 21 13 23 11 25 9 23 6 26 4 10 1h35l26-3 27-6 24-8 18-8 21-11 14-9 12-9 10-8 15-14 10-10 7-8 13-17 11-17 14-27 9-24 6-21 5-27 1-11v-44l-3-24-6-26-8-24-9-20-9-17-9-14-14-19-12-13-11-12-8-7-15-12-21-14-22-12-21-9-21-7-21-5-20-3-12-1z"
            />
            <path transform="translate(0,1097)" d="m0 0" />
          </svg>
        </button>
      </div>
      <nav>
        <ul class="navigation">
          <li
            v-for="(section, index) in menuSections"
            :key="index"
            class="menu-item"
          >
            <a href="#" @click.prevent="toggleSection(index)">
              {{ section.title }}
            </a>
            <ul class="submenu">
              <li v-for="(item, subIndex) in section.items" :key="subIndex">
                <a @click="ventana(item)">{{ item }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <transition name="fade">
      <div class="cont_perfil" v-if="perfil">
        <div class="cont_nombre_apellido">
          <p class="nombre_perfil">{{ nombre }}</p>
          <p class="apellido_perfil">{{ apellido }}</p>
        </div>
        <div class="cont_cambiar_finca">
          <button class="btn_cambiar" @click="cambiar()">Cambiar finca</button>
        </div>
        <div class="cont_btn_salir">
          <div class="btn_salir" @click="logOut()">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="35"
              height="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(434)"
                fill="#ff0000"
                d="m0 0h581v1l48 8 40 10 29 10 29 12 25 12 23 13 19 12 20 14 13 10 11 9 14 12 7 7 8 7 11 11 7 8 11 12 9 11 16 21 14 21 15 25 15 29 11 25 11 30 7 24 6 24 5 27 4 33 1 16 1 46v26l-1 45-4 17-8 16-8 10-8 8-14 9-11 5-11 3-7 1h-20l-14-3-12-5-11-7-12-11-9-12-7-14-4-16-1-12-1-98-3-29-4-22-7-27-9-25-11-24-11-20-9-14-10-14-9-11-12-14-20-20-11-9-17-13-15-10-19-11-22-11-20-8-25-8-27-6-22-3-37-2h-482l-26 1-27 3-28 6-26 8-25 10-19 10-18 10-16 11-14 11-11 9-4 2v2l-8 7-13 13-9 11-10 12-9 13-10 15-10 18-11 23-7 18-8 27-6 28-3 29-1 33v1074l1 26 3 27 5 25 7 25 10 26 12 25 8 14 7 11 12 17 11 13 9 11 16 16 8 7 16 13 18 13 22 13 19 10 30 12 22 7 29 6 26 3 13 1h517l30-3 26-5 27-8 24-9 29-14 15-9 15-10 16-12 15-13 7-7 7-6 7-8 11-12 14-19 11-17 9-16 8-16 9-21 8-24 6-24 4-25 2-22 1-102 2-15 4-12 8-15 11-13 10-8 14-8 12-4 15-2h10l14 2 12 4 13 7 10 8 9 9 9 14 5 12 3 13 1 34v41l-1 45-2 25-5 33-6 29-7 25-9 27-9 22-11 24-12 23-12 20-8 12-12 17-10 13-11 13-7 9h-2l-2 4-9 9-7 8-13 12-12 11-11 9-18 14-20 14-21 13-18 10-15 8-29 13-18 7-31 10-28 7-31 6-32 5h-577l-3-2-36-6-24-5-29-8-34-12-25-11-16-8-21-11-23-14-20-14-13-10-10-8-13-11-13-12-26-26-9-11-12-14-12-16-13-19-13-21-10-18-13-26-11-27-12-36-6-22-6-31-5-32-1-1v-1184l1-1 6-39 8-36 9-29 7-20 11-26 8-17 12-22 10-17 15-22 11-15 13-16 9-11 8-8 7-8 17-17 8-7 10-9 14-11 13-10 20-14 18-11 23-13 29-14 25-10 33-11 27-7 36-7z"
              />
              <path
                transform="translate(786,943)"
                fill="#ff0000"
                d="m0 0h865l20 2 14 5 11 6 10 8 9 9 9 14 6 15 2 9v25l-4 16-8 16-8 10-8 8-10 7-15 7-12 3-7 1h-881l-16-3-14-6-14-10-9-9-7-10-7-14-4-15-1-8v-9l2-14 4-13 8-15 9-11h2l2-4 13-9 12-6 16-4z"
              />
              <path
                transform="translate(1730,655)"
                fill="#ff0000"
                d="m0 0h11l15 2 16 6 12 8 14 12 44 44 8 7 56 56 6 5v2l4 2 34 34 8 7 23 23 7 8 11 13 10 14 9 15 10 19 9 24 7 26 2 10h2v74l-2 2-5 23-7 23-8 18-8 16-9 15-11 15-9 11-14 15-132 132h-2l-2 4-7 6-5 6-8 7-31 31-14 9-11 5-17 4h-22l-13-3-12-5-11-7-12-11-9-12-7-14-4-14-1-8v-11l3-17 4-11 6-11 10-13h2l2-4 40-40h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2v-2h2v-2l8-7 46-46 9-11 6-11 4-10 3-14v-18l-3-15-5-12-7-12-12-13-37-37-8-7v-2l-4-2-45-45-8-7-37-37-8-7v-2l-4-2-34-34-7-10-8-16-3-12-1-8v-12l3-17 6-15 9-13 5-6h2l2-4 14-10 11-5 9-3z"
              />
              <path transform="translate(0,1617)" d="m0 0" />
            </svg>
          </div>
        </div>
      </div>
    </transition>
    <router-view />
    <div class="contenedor" v-if="bienvenida">
    <!-- Nombre de la Finca -->
    <div class="cont_nombre_finca">
      <p class="titulo">Finca</p>
      <p class="nombre_finca">{{ nombreFinca }}</p>
    </div>

    <!-- Información de la finca -->
    <div class="cont_info_finca">
      <!-- Propietario -->
      <div class="tarjeta">
        <p class="label">👤 Propietario:</p>
        <p class="valor">{{ nombrePropietario }}</p>
      </div>

      <!-- Tipo de finca -->
      <div class="tarjeta">
        <p class="label">🌱 Tipo de finca:</p>
        <p class="valor">{{ tipoFinca }}</p>
      </div>
    </div>

    <!-- Ubicación -->
    <div class="tarjeta tarjeta-ubicacion">
      <p class="label">📍 Ubicación:</p>
      <p class="valor">{{ ubicacion }}</p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import { useLoginStore } from "../stores/login.js";
import { useFincasStore } from "../stores/fincas.js";

let useFinca = useFincasStore();

const spinner = ref(false);

const menuSections = ref([
  {
    title: "Administración y Recursos Humanos",
    items: ["Usuarios", "Nóminas"],
  },
  {
    title: "Gestión de Parcelas",
    items: ["Parcelas", "Climas", "Maquinaria y Herramientas"],
  },
  {
    title: "Control de Cultivos y Producción",
    items: ["Cultivos", "Siembras", "Producciones", "Semillas"],
  },
  {
    title: "Manejo de Suelos",
    items: [
      "Análisis de Suelos",
      "Preparación de Suelos",
      "Elaboración de Sustratos",
    ],
  },
  {
    title: "Gestión de Insumos y Plagas",
    items: ["Control de Plagas", "Fertilizaciones", "Insumos", "Riegos"],
  },
  {
    title: "Compras y Proveedores",
    items: [
      "Compradores",
      "Proveedores",
      "Gastos",
      "Facturas de Compras",
      "Facturas de Ventas",
    ],
  },
  {
    title: "Procesos",
    items: ["Procesos"],
  },
]);

let bienvenida = ref();
let check = ref(false);

const ventana = (item) => {
  if (item === "Usuarios") {
    router.push("/usuarios");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Análisis de Suelos") {
    router.push("/analisisSuelos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Compradores") {
    router.push("/compradores");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Facturas de Compras") {
    router.push("/facturasCompras");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Facturas de Ventas") {
    router.push("/facturasVentas");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Maquinaria y Herramientas") {
    router.push("/maquinariaHerramientas");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Cultivos") {
    router.push("/cultivos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Elaboración de Sustratos") {
    router.push("/elaboracion-sustratos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Fertilizaciones") {
    router.push("/fertilizantes");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Insumos") {
    router.push("/insumos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Parcelas") {
    router.push("/parcelas");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Procesos") {
    router.push("/procesos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Producciones") {
    router.push("/producciones");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Riegos") {
    router.push("/riegos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Cultivos") {
    router.push("/cultivos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Semillas") {
    router.push("/semillas");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Siembras") {
    router.push("/siembras");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Control de Plagas") {
    router.push("/controlPlagas");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Climas") {
    router.push("/clima");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Nóminas") {
    router.push("/nominas");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Preparación de Suelos") {
    router.push("/preparacionSuelos");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Proveedores") {
    router.push("/proveedores");
    bienvenida.value = false;
    check.value = false;
  } else if (item === "Gastos") {
    router.push("/gastos");
    bienvenida.value = false;
    check.value = false;
  }
};

let nombre = useLoginStore().user.usuario.Nombre;
let apellido = useLoginStore().user.usuario.Apellido;

let perfil = ref(false);

let verPerfil = () => {
  perfil.value = !perfil.value;
};

let cambiar = () => {
  localStorage.removeItem("Finca");
  router.push("/fincas");
  perfil.value = false;
};

let logOut = () => {
  localStorage.removeItem("login");
  localStorage.removeItem("Finca");
  router.push("/login");
};

let nombreFinca = ref("");
let nombrePropietario = ref("");
let tipoFinca = ref("");
let ubicacion = ref("");

onMounted(async() => {
  if (route.path === "/menu") {
    bienvenida.value = true;
  }
  spinner.value = true;
  let finca = await useFinca.getFinca(localStorage.getItem("Finca"));
  nombreFinca.value = finca.Nombre;
  nombrePropietario.value = finca.Propietario;
  tipoFinca.value = finca.Tipo_finca;
  ubicacion.value = finca.Ubicacion;
  console.log(finca);
  spinner.value = false;
});

watch(route, (newRoute) => {
  if (newRoute.path === "/menu") {
    bienvenida.value = true;
  } else {
    bienvenida.value = false;
  }
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cont_spinner {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* From Uiverse.io by Shoh2008 */ 
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ffffff;
  margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}

.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}

.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}

.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}

.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}

.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}

.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

body {
  font-family: "Roboto", "sans-serif";
  overflow: hidden;
}

.main-header {
  background: #70b039;
  width: 100%;
  height: 60px;
  position: relative;
  z-index: 100;
}

nav {
  position: absolute;
  left: 0;
  top: 60px;
  width: 19%;
  height: calc(100vh - 60px);
  background: #70b039;
  transform: translateX(-100%);
  transition: 0.4s ease;
  color: white;
  z-index: 100;
}

.navigation li {
  list-style: none;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.123);
  position: relative;
}

.navigation a {
  color: #ffffff;
  display: block;
  line-height: 3.5;
  padding: 0 10px;
  text-decoration: none;
  transition: 0.4s ease;
  cursor: pointer;
}

.navigation a:hover {
  transform: translateX(10%);
}

#btn-nav {
  display: none;
}

#btn-nav:checked ~ nav {
  transform: translateX(0);
}

.btn-nav {
  position: absolute;
  left: 0.5%;
  top: 6px;
  cursor: pointer;
}

.submenu {
  display: none;
  background-color: #4a8c2b;
}

.menu-item:hover .submenu {
  display: block;
  position: absolute;
  left: 100%;
  top: 0;
  width: 200px;
}

.submenu a {
  color: var(--main-color);
  padding-left: 20px;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-profile-button {
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-right: 1%;
}

.user-profile-button button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.cont_perfil {
  width: 20%;
  height: 35vh;
  background-color: #ffffff;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.342);
  position: absolute;
  right: 0;
  z-index: 90;
  border-bottom-left-radius: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cont_nombre_apellido {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nombre_perfil {
  font-size: 32px;
  color: #70b039;
  font-weight: bold;
}

.apellido_perfil {
  font-size: 28px;
  color: #70b039;
  font-weight: bold;
}

.cont_cambiar_finca {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_cambiar {
  padding: 8px 20px;
  background-color: #70b039;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn_cambiar:hover {
  background-color: #4a8c2b;
}

.cont_btn_salir {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 5%;
}

.btn_salir {
  cursor: pointer;
}

.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #f5f5f5;
  padding: 40px;
}

/* Estilos del título */
.titulo {
  font-size: 26px;
  font-weight: 600;
  color: #444;
  text-align: center;
}

.nombre_finca {
  font-size: 46px;
  font-weight: bold;
  color: #4CAF50;
  text-align: center;
}

/* Contenedor de información */
.cont_info_finca {
  display: flex;
  gap: 40px;
  margin-top: 30px;
}

/* Tarjetas de información */
.tarjeta {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  min-width: 270px;
  text-align: center;
}

.tarjeta-ubicacion {
  margin-top: 30px;
  width: 100%;
  max-width: 500px;
}

/* Etiquetas */
.label {
  font-size: 20px;
  font-weight: 500;
  color: #555;
}

/* Valores */
.valor {
  font-size: 22px;
  font-weight: bold;
  color: #222;
}
</style>