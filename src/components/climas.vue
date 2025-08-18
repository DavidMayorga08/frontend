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
    <div class="cont_nombre">
      <p class="text_nombre">Clima actual</p>
    </div>
    <div class="cont_clima">
      <div class="card">
        <div class="part1">
          <div class="sub_cont">
            <div class="cont_img" v-html="icono"></div>
            <div class="cont_temperatura">
              <p class="text_temperatura">{{ temperatura }}</p>
            </div>
          </div>
          <div class="cont_descripcion">
            <p class="text_descripcion">{{ descripcion }}</p>
          </div>
        </div>
        <div class="cont_lugar">
          <p class="text_lugar">{{ lugar }}</p>
        </div>
        <div class="cont_hora">
          <p class="text_hora">{{ diaSemana }} - {{ hora }}</p>
        </div>
        <div class="part2">
          <div class="cont_humedad">
            <p class="text_humedad">Humedad: {{ humedad }}</p>
          </div>
          <div class="cont_velocidadViento">
            <p class="text_velocidadViento">Velocidad del viento: {{ velocidadViento }}</p>
          </div>
          <div class="cont_nubosidad">
            <p class="text_nubosidad">nubosidad: {{ nubosidad }}</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="registroFallido ? 'error1' : 'error'">
      <div class="error__icon">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
      <div class="error__title">{{ text }}</div>
      <div class="error__close" @click="cerrar()">
        <svg
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
    </div>
    <div class="q-pa-md">
      <q-table
        title="Climas"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:top-right>
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
      </q-table>
    </div>
  </div>
</template>
  <script setup>
import { ref, onMounted } from "vue";
import iconMap from "../assets/iconMap.js";
import { useClimasStore } from "../stores/climas.js";

let useClimas = useClimasStore();

let spinner = ref(true);
let registroFallido = ref(false);
let text = ref();

function cerrar() {
  registroFallido.value = false;
}

function ocultar() {
  setTimeout(() => {
    registroFallido.value = false;
  }, 3000);
}

let icono = ref();
let temperatura = ref();
let descripcion = ref();
let lugar = ref();
let diaSemana = ref();
let hora = ref();
let humedad = ref();
let velocidadViento = ref();
let nubosidad = ref();

// Clave de la API
const key = "9981b692ffd9368507765c6d14917e71";

// Verifica si el navegador admite la API de Geolocalización
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    // Si el usuario concede permiso
    function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          icono.value = iconMap[data.weather[0].icon];
          temperatura.value = `${Math.round(data.main.temp - 273.15) + 5}°C`;
          descripcion.value = data.weather[0].description;
          lugar.value = data.name;
          hora.value = new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          diaSemana.value = new Date(data.dt * 1000).toLocaleDateString('es-ES', { weekday: 'long' });
          humedad.value = `${data.main.humidity}%`;
          velocidadViento.value = `${(data.wind.speed * 3.6).toFixed(2)} km/h`;
          nubosidad.value = `${data.clouds.all}%`;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      spinner.value = false;
    },
    // Si el usuario deniega el permiso o hay algún error
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("El usuario denegó el permiso de geolocalización.");
          text.value = "Eror al obtener la ubicación";
          registroFallido.value = true;
          ocultar();
          spinner.value = false;
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("La información de ubicación no está disponible.");
          text.value = "Eror al obtener la ubicación";
          registroFallido.value = true;
          ocultar();
          spinner.value = false;
          break;
        case error.TIMEOUT:
          console.log("La solicitud de ubicación ha caducado.");
          text.value = "Eror al obtener la ubicación";
          registroFallido.value = true;
          ocultar();
          spinner.value = false;
          break;
        case error.UNKNOWN_ERROR:
          console.log("Un error desconocido ocurrió.");
          text.value = "Eror al obtener la ubicación";
          registroFallido.value = true;
          ocultar();
          spinner.value = false;
          break;
      }
    }
  );
} else {
  console.log("La geolocalización no es soportada por este navegador.");
}

let columns = [
  {
    name: "Temperatura",
    label: "Temperatura",
    align: "center",
    field: "Temperatura",
    headerStyle: "font-weight: bold;",
  },
  {
    name: "Fecha",
    label: "Fecha",
    align: "center",
    field: (row) => row.Fecha.split("T")[0],
    headerStyle: "font-weight: bold;",
  },
  {
    name: "Clima",
    label: "Clima",
    align: "center",
    field: "Clima",
    headerStyle: "font-weight: bold;",
  },
  {
    name: "Humedad",
    label: "Humedad",
    align: "center",
    field: "Humedad",
    headerStyle: "font-weight: bold;",
  },
  {
    name: "Velocidad_viento",
    label: "Velocidad del viento",
    align: "center",
    field: "Velocidad_viento",
    headerStyle: "font-weight: bold;",
  },
  {
    name: "Nubosidad",
    label: "Nubosidad",
    align: "center",
    field: "Nubosidad",
    headerStyle: "font-weight: bold;",
  }
];

let finca = ref("");
let rows = ref([]);

let traerClimas = async () => {
  let response = await useClimas.getClimas();
  rows.value = response.filter((clima) => clima.Id_finca === finca.value);
}



let crear =

onMounted(() => {
  finca.value = localStorage.getItem("finca");
  traerClimas();
});
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cont_spinner {
  position: absolute;
  width: 100%;
  height: 92vh;
  margin-top: -15px;
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

.cont_nombre {
  margin: 15px 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text_nombre {
  font-size: 35px;
  color: #000000;
  font-weight: bold;
}

.cont_clima {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
}

.card {
  width: 53%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
  border-radius: 10px;
}

.part1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  margin-top: 20px;
}

.sub_cont {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
}

.cont_temperatura {
  margin-left: 10px;
}

.text_temperatura {
  font-size: 40px;
  color: #5f992d;
}

.cont_img {
  margin-right: 10px;
}

.cont_descripcion {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.text_descripcion {
  font-size: 20px;
  color: #444444;
}

.cont_lugar {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.text_lugar {
  font-size: 20px;
  color: #333333;
}

.cont_hora {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text_hora {
  font-size: 20px;
  color: #333333;
}

.part2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
}

.cont_humedad {
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text_humedad {
  font-size: 20px;
  color: #333333;
}

.cont_velocidadViento {
  width: 40%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text_velocidadViento {
  font-size: 20px;
  color: #333333;
}

.cont_nubosidad {
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text_nubosidad {
  font-size: 20px;
  color: #333333;
}

.error {
  position: absolute;
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
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error1 {
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
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.error__icon path {
  fill: #ef665b;
}

.error__title {
  font-weight: 500;
  font-size: 14px;
  color: #71192f;
}

.error__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.error__close path {
  fill: #71192f;
}

@keyframes down {
  0%,
  100% {
    transform: none;
  }

  25% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(100%) translateY(100%);
  }

  75% {
    transform: translateY(100%);
  }
}

@keyframes up {
  0%,
  100% {
    transform: none;
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-100%) translateY(-100%);
  }

  75% {
    transform: translateY(-100%);
  }
}
</style>