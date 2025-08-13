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
    <div class="polygon"></div>
    <div class="cont_img">
      <svg
        version="1.1"
        viewBox="0 0 908 888"
        width="260"
        height="255"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          transform="translate(9,396)"
          d="m0 0h407l-1 7-5 9-3 4h-2l-2 7-9 17-3 4h-2l-2 7-9 17-3 4h-2l-2 7-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-4 5h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-4 5h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-5 9-3 4h-2l-2 7-9 17-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-5 9-3 4h-2l-3 9-6 10-3 1-5-6-7-3-37-37 1-6 7-11 5-8 9-17 5-7 7-14 6-10 3-4 7-14 6-10 5-8 5-9 6-9 8-16 7-10 7-14 6-10 3-4 7-14 6-10 3-4 7-14 6-10 3-4 7-14 5-8 4-5 4-10v-22l-5-5-6-3-1-1-258-1-1-1-1-58-2-2 1-4z"
          fill="#020202"
        />
        <path
          transform="translate(453,468)"
          d="m0 0 4 2 9 17 5 6 7 14 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 9 19 7 9 4 7 4 5 9 19 7 9 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 1 5-2 3-23 11-17 9-8 4-5 5h-5l-9-11-6-12-6-8-6-12-6-8-6-12-6-8-9-19-7-9-6-12-6-8-6-12-6-8-9-19-7-9-6-12-6-8-6-12-6-8-6-12-6-7-3-7-7-14-5-6-11-6h-8l-10 5-3 4-2 5-4 8-4 5h-2l-2 7-4 8-4 5h-2l-2 7-4 8-4 5h-2l-2 7-5 9-3 4h-2l-2 7-5 9-3 4h-2l-2 7-4 8-5 9-5 6-2 5-5 9-5 6-2 5-5 9-5 6-2 5-5 9-3 4h-2l-2 7-5 9-3 4h-2l-2 7-9 17-3 4h-2l-2 7-4 9-6-1-56-28 1-4 3-6 6-7 3-7 6-10 5-8 9-17 5-7 6-12 6-8 7-14 6-10 3-4 6-12 6-8 7-14 6-10 3-4 6-12 6-7 3-7 6-10 3-4 7-14 6-10 3-4 6-12 6-8 7-14 6-10 3-4 6-12 6-7 3-7 6-10 3-4 7-14 6-10 3-4 6-12 6-7 4-8 3-7z"
          fill="#040404"
        />
        <path
          transform="translate(496,396)"
          d="m0 0h402l2 1v2l3 1 1 2v61l-5 1-262 1-7 7-1 2v20l8 16 5 9 6 9 6 11 6 9 8 15 4 7 5 8 9 17 6 9 8 15 4 7 5 8 5 9 6 9 8 15 4 7 5 8 9 17 6 9 6 11 6 9 8 15 4 7 3 3 5 10v7l-26 26-6 2-15 15-2 3h-2l-4-9-5-6-8-16-6-9-10-19-6-9-8-15-6-8-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-8-16-6-9-10-19-6-9-10-19z"
          fill="#020202"
        />
        <path
          transform="translate(441,8)"
          d="m0 0h28l5 3h7l8 3 16 8 8 5 7 6v2l4 2v2l4 2v2l4 2 8 10 7 14 2 9 2 2 1 6v38l-3 6-1 8-3 4-2 9-4 5h-2l-2 7-21 21-7 3-6 5-9 2-8 4-6 2h-45l-2-4h-9l-4-3-7-3-10-6-3-3-5-2-12-12-3-6-6-8-8-16-1-11-3-4v-36l3-4 2-9 5-10 5-9 2-5 12-13 5-5h2l1-3 13-8 16-8 13-2z"
          fill="#020202"
        />
        <path
          transform="translate(437,236)"
          d="m0 0h70l12 13 3 2v2h2l7 8 5 6 3 5 1 3 4 2v2h2v2h2v2h2v2h2l7 8 3 2v2h2v2l4 2 7 8 3 6 2 1v-79l1-1h54l1 1v122l-1 1h-73l-21-21-3-6-3-3v-2l-4-2v-2h-2l-7-8-9-9-3-6-11-12-8-8-2-1-1 79-2 1h-49l-1-1v-122z"
          fill="#050505"
        />
        <path
          transform="translate(101,232)"
          d="m0 0h85l6 3 9 3 14 7 5 6 4 9v7l-1 1h-54l-2-7-9-4h-38l-3 4-1 10 13 1 7 3 16 1 6 3 18 1 6 3 11 1 6 3 8 2 8 6 7 4 5 10 1 4v16l-7 8-10 10-8 4-10 2-2 2-22 2-1 2-16 1h-45l-7-1-2-2-14-2-2-2-9-2-11-6-6-8-4-8v-12l1-1h54l1 1v10l9 3 1 1 16 1 4 3h14l1-3 9-1 5-4v-6l-4-4-12-3-3-1-17-1-8-2-13-2-9-1-5-2-15-5-10-4-10-8-5-6-2-10-1-4 2-5 2-6 9-10 7-4 13-7 13-2z"
          fill="#060606"
        />
        <path
          transform="translate(729,236)"
          d="m0 0h66l4 5 3 6 5 6 3 6 6 9 7 10 6 9 7 11 7 10 7 11 6 9 7 10 4 6 5 7 3 5 1 3-7 1h-56l-4-9-5-5v-6h-92v6l-7 8-1 5-2 1h-57l-1-2 5-5 6-7 3-6 6-9 7-9 3-6 8-9 6-10 7-10 8-12 7-8 6-10 7-10 4-5zm29 31-9 17-5 6-4 7-7 11-1 4h52l1-2-6-13-6-11-4-5-6-12-2-2z"
          fill="#040404"
        />
        <path
          transform="translate(253,236)"
          d="m0 0h150l1 1v26l-1 1h-95l1 15 2 4 84 1 1 1v22l-2 1h-86v24h94l5 4 1 4v19l-2 1h-153l-1-1v-122z"
        />
        <path
          transform="translate(496,396)"
          d="m0 0h402l2 1v2l3 1 1 2v61l-4 1-1-64h-399l-1 5-3-4z"
          fill="#6B6B6B"
        />
        <path
          transform="translate(9,396)"
          d="m0 0h407l-1 7-3 3 1-6h-404l-1 3h-3l1-4z"
          fill="#6B6B6B"
        />
        <path
          transform="translate(308,332)"
          d="m0 0h94l5 4 1 4v19l-2 1h-153v-1h151v-23h-93l-3-1z"
          fill="#6F6F6F"
        />
        <path
          transform="translate(644,461)"
          d="m0 0h94l28 1 133 1v1h-259l4-1z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(401,236)"
          d="m0 0 3 1v26l-1 1h-95l-1-3 2-1h91z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(713,336)"
          d="m0 0h88l2 1v3h-90z"
          fill="#707070"
        />
        <path
          transform="translate(100,356)"
          d="m0 0h67l1 3-16 1h-45l-7-1z"
          fill="#7A7A7A"
        />
        <path
          transform="translate(901,400)"
          d="m0 0h2l1 2v61l-3 1z"
          fill="#BDBDBD"
        />
        <path
          transform="translate(392,284)"
          d="m0 0 4 1v22l-2 1h-86v-1h85z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(441,8)"
          d="m0 0h28l2 1v2l-31 1v-3z"
          fill="#828282"
        />
        <path
          transform="translate(650,352)"
          d="m0 0h2l-2 4-2 3 52-1 3-1-1 3h-57l-1-2 5-5z"
          fill="#838383"
        />
        <path
          transform="translate(127,253)"
          d="m0 0h24v3h-31l3-2 4 1z"
          fill="#797979"
        />
        <path
          transform="translate(401,236)"
          d="m0 0 3 1v26h-3z"
          fill="#D0D0D0"
        />
        <path
          transform="translate(508,238)"
          d="m0 0 12 12 2 1v2h2l7 8 5 6h-3l-1-3h-2v-2l-4-2-12-12-7-8z"
          fill="#919191"
        />
        <path
          transform="translate(432,196)"
          d="m0 0 6 1v2l35-1 11-1-1 2-7 1h-43l-2-3z"
          fill="#787878"
        />
        <path
          transform="translate(139,783)"
          d="m0 0 4 2 21 21v2l-4-2-21-21z"
          fill="#ACACAC"
        />
        <path
          transform="translate(551,287)"
          d="m0 0 5 2 4 5 2 1v2h2v2l4 2 7 8v3l-12-11-9-9z"
          fill="#888"
        />
        <path
          transform="translate(392,284)"
          d="m0 0 4 1v22l-4 1z"
          fill="#6B6B6B"
        />
        <path
          transform="translate(281,477)"
          d="m0 0 2 1v15l-4 10-3 2 3-9 1-18z"
          fill="#6A6A6A"
        />
        <path
          transform="translate(533,161)"
          d="m0 0 3 1-22 22h-2l2-4 17-17h2z"
          fill="#919191"
        />
        <path
          transform="translate(169,264)"
          d="m0 0h3v3h51v1h-54z"
          fill="#7A7A7A"
        />
        <path
          transform="translate(125,765)"
          d="m0 0h2v6l4 2 9 9-2 2-14-14z"
          fill="#545454"
        />
        <path
          transform="translate(187,658)"
          d="m0 0 1 3-12 20-4 5 1-5 5-9 6-9z"
          fill="#898989"
        />
        <path
          transform="translate(512,304)"
          d="m0 0 5 2 3 5 8 7 3 5-2 1-7-8-9-9z"
          fill="#989898"
        />
        <path
          transform="translate(540,336)"
          d="m0 0 4 2 13 13 2 4-4-2-14-14z"
          fill="#8D8D8D"
        />
        <path
          transform="translate(101,232)"
          d="m0 0h16l1 2-11 1-7 1v-3z"
          fill="#aaa"
        />
        <path
          transform="translate(380,163)"
          d="m0 0 7 6 9 9v2l-4-2-11-11z"
          fill="#AFAFAF"
        />
        <path
          transform="translate(163,316)"
          d="m0 0 4 1 4 4-1 6-4 5h-2l2-4 1-1v-6z"
          fill="#7D7D7D"
        />
        <path
          transform="translate(406,338)"
          d="m0 0 2 2v19h-3z"
          fill="#AEAEAE"
        />
        <path
          transform="translate(488,276)"
          d="m0 0 3 1v2l4 2 8 9h-3l-9-9-3-2z"
          fill="#888"
        />
        <path
          transform="translate(410,20)"
          d="m0 0 3 1-7 4h-2v2l-8 6-3-1 3-1 1-3z"
          fill="#858585"
        />
        <path
          transform="translate(167,693)"
          d="m0 0 1 3-6 9-5 9-1-3 6-11z"
          fill="#878787"
        />
        <path
          transform="translate(361,104)"
          d="m0 0h1l1 19-3-1v-12z"
          fill="#7D7D7D"
        />
        <path
          transform="translate(120,308)"
          d="m0 0h7l11 2 1 2h-8l-8-2z"
          fill="#737373"
        />
        <path
          transform="translate(242,563)"
          d="m0 0v3l-9 16-1-3 6-11z"
          fill="#8E8E8E"
        />
        <path
          transform="translate(258,535)"
          d="m0 0v3l-9 16-1-3 6-11z"
          fill="#8A8A8A"
        />
        <path
          transform="translate(780,298)"
          d="m0 0 4 4 4 7v3l-4-2-4-9z"
          fill="#777"
        />
        <path
          transform="translate(56,335)"
          d="m0 0 5 4 5 5 3 4-6-2-7-9z"
          fill="#757575"
        />
        <path
          transform="translate(627,478)"
          d="m0 0h1v15l-2-1-2-7v-4h2z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(768,783)"
          d="m0 0 2 1-12 12h-2l2-4 8-7z"
          fill="#C8C8C8"
        />
        <path
          transform="translate(361,84)"
          d="m0 0h2l-1 15h-1l-1-5v-8z"
          fill="#A8A8A8"
        />
      </svg>
    </div>
    <div class="cont_form">
      <div class="form">
        <div class="cont_titulo">
          <p class="titulo">{{ titulo }}</p>
        </div>
        <div class="cont">
          <div class="part1">
            <div class="cont_inputs">
              <label for="nombre">Nombre</label>
              <input type="text" class="input" v-model="nombre" />
            </div>
            <div class="cont_inputs">
              <label for="apellido">Apellido</label>
              <input type="text" class="input" v-model="apellido" />
            </div>
            <div class="cont_inputs">
              <label for="documento">Documento</label>
              <input type="text" class="input" v-model="documento" />
            </div>
            <div class="cont_inputs">
              <label for="telefono">Telefono</label>
              <input type="text" class="input" v-model="telefono" />
            </div>
            <div class="cont_inputs">
              <label for="direccion">Direccion</label>
              <input type="text" class="input" v-model="direccion" />
            </div>
          </div>
          <div class="part2">
            <div class="cont_inputs">
              <label for="email">Email</label>
              <input type="text" class="input" v-model="email" />
            </div>
            <div class="cont_inputs" v-if="Pass">
              <label for="password">Contraseña</label>
              <input type="password" class="input" v-model="password" />
            </div>
            <div class="cont_inputs">
              <label for="municipio">Municipio</label>
              <select class="input" v-model="municipio">
                <option
                  v-for="municipio in Municipios"
                  :key="municipio.id"
                  :value="municipio"
                >
                  {{ municipio.name }}
                </option>
              </select>
            </div>
            <div class="cont_inputs">
              <label for="rol">Rol</label>
              <select class="input" v-model="rol">
                <option value="admin">Administrador</option>
                <option value="trabajador">Trabajador</option>
              </select>
            </div>
            <div class="cont_inputs">
              <label for="finca">Finca</label>
              <select class="input" v-model="selectedFincas" disabled>
                <option v-for="finca in fincas" :key="finca._id" :value="finca">
                  {{ finca.Nombre }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="cont_btn">
          <button class="btn" @click="enviar()">Enviar</button>
        </div>
      </div>
    </div>
    <div class="cont_btn_volver">
      <q-btn
        color="primary"
        label="Volver"
        @click="router.push('/usuarios')"
      ></q-btn>
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
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import { useUsuariosStore } from "../../stores/usuarios.js";
import { useFincasStore } from "../../stores/fincas.js";
import municipios from "../../assets/municipios.js";

let useUsuarios = useUsuariosStore();
let useFincas = useFincasStore();

let spinner = ref(false);
let Municipios = municipios;
let id = ref(route.query.id);
let id_finca = ref(localStorage.getItem("Finca"));

let registroExitoso = ref(false);
let registroFallido = ref(false);
let text = ref("");

function cerrar() {
  registroExitoso.value = false;
  registroFallido.value = false;
}

function ocultar() {
  setTimeout(() => {
    registroExitoso.value = false;
    registroFallido.value = false;
  }, 3000);
}

let fincas = ref([]);

let titulo = ref("");
let nombre = ref("");
let apellido = ref("");
let documento = ref("");
let telefono = ref("");
let direccion = ref("");
let email = ref("");
let Pass = ref(true);
let password = ref("");
let municipio = ref("");
let rol = ref("");
let selectedFincas = ref([]);
let Estado = ref("activo");

if (id.value) {
  titulo.value = "Editar Usuario";
  Pass.value = false;
} else {
  titulo.value = "Crear Usuario";
}

let validarCampos = () => {
  if (!nombre.value.trim()) {
    registroFallido.value = true;
    text.value = "El campo Nombre no puede estar vacío";
    ocultar();
    return false;
  }
  if (!apellido.value.trim()) {
    registroFallido.value = true;
    text.value = "El campo Apellido no puede estar vacío";
    ocultar();
    return false;
  }
  if (!documento.value.trim()) {
    registroFallido.value = true;
    text.value = "El campo Documento no puede estar vacío";
    ocultar();
    return false;
  }
  if (!telefono.value.trim()) {
    registroFallido.value = true;
    text.value = "El campo Telefono no puede estar vacío";
    ocultar();
    return false;
  }
  if (!direccion.value.trim()) {
    registroFallido.value = true;
    text.value = "El campo Direccion no puede estar vacío";
    ocultar();
    return false;
  }
  if (!email.value.trim()) {
    registroFallido.value = true;
    text.value = "El campo Email no puede estar vacío";
    ocultar();
    return false;
  }
  if (Pass.value && !password.value.trim()) {
    registroFallido.value = true;
    text.value = "El campo Contraseña no puede estar vacío";
    ocultar();
    return false;
  }
  if (!municipio.value) {
    registroFallido.value = true;
    text.value = "Debe seleccionar un Municipio";
    ocultar();
    return false;
  }
  if (!rol.value) {
    registroFallido.value = true;
    text.value = "Debe seleccionar un Rol";
    ocultar();
    return false;
  }
  if (selectedFincas.value == "") {
    registroFallido.value = true;
    text.value = "Debe seleccionar una Finca";
    ocultar();
    return false;
  }
  return true;
};

let enviar = async () => {
  if (!validarCampos()) {
    return;
  }
  if (id.value) {
    console.log("Editar");
    spinner.value = true;

    let usuario = {
      Nombre: nombre.value,
      Apellido: apellido.value,
      Documento: documento.value,
      Telefono: telefono.value,
      Direccion: direccion.value,
      Email: email.value,
      Password: password.value,
      Municipio: municipio.value.name,
      Rol: rol.value,
      Fincas: [selectedFincas.value._id],
      Estado: Estado.value,
    };

    console.log(usuario);
    await useUsuarios.putUsuario(id.value, usuario);
    spinner.value = false;
    registroExitoso.value = true;
    text.value = "Usuario editado correctamente";
    ocultar();
  } else {
    console.log("Crear");
    spinner.value = true;

    let usuario = {
      Nombre: nombre.value,
      Apellido: apellido.value,
      Documento: documento.value,
      Telefono: telefono.value,
      Direccion: direccion.value,
      Email: email.value,
      Password: password.value,
      Municipio: municipio.value.name,
      Rol: rol.value,
      Fincas: [selectedFincas.value._id],
      Estado: Estado.value,
    };

    console.log(usuario);
    let r = await useUsuarios.postUsuario(usuario);
    spinner.value = false;
    console.log(r);
    registroExitoso.value = true;
    text.value = "Usuario creado correctamente";
    ocultar();
  }
};

onMounted(async () => {
  spinner.value = true;
  fincas.value = await useFincas.getFincas();
  if (id.value) {
    let usuario = await useUsuarios.getUsuario(id.value);
    nombre.value = usuario.Nombre;
    apellido.value = usuario.Apellido;
    documento.value = usuario.Documento;
    telefono.value = usuario.Telefono;
    direccion.value = usuario.Direccion;
    email.value = usuario.Email;
    password.value = usuario.Password;
    municipio.value = municipios.find((m) => m.name == usuario.Municipio);
    rol.value = usuario.Rol;
    selectedFincas.value = fincas.value.find((f) => f._id == usuario.Fincas[0]);
  } else {
    selectedFincas.value = fincas.value.find((f) => f._id == id_finca.value);
  }
  spinner.value = false;
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

.polygon {
  position: absolute;
  z-index: -1;
  width: 75%;
  height: 100vh;
  background-color: #70b039;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
}

.cont_img {
  position: absolute;
  top: 50%;
  right: 7%;
  transform: translateY(-50%);
}

.cont_form {
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);
  width: 50%;
}

.form {
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cont_titulo {
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo {
  color: #000000;
  font-size: 20px;
  font-weight: bold;
}

.cont {
  padding: 20px;
}

.cont_inputs {
  margin-bottom: 10px;
}

label {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
}

.input {
  width: 100%;
  height: 38px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 5px;
}

.cont_btn {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn {
  width: 20%;
  height: 38px;
  background-color: #70b039;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #5a8c2d;
}

.part1 {
  width: 50%;
  float: left;
  padding-right: 10px;
}

.part2 {
  width: 50%;
  float: right;
  padding-left: 10px;
}

.cont_btn_volver {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.cont_btn_volver q-btn {
  width: 100px;
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