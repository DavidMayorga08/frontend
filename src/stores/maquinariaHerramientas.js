import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from "../stores/login.js";

export const useMaquinariaHerramientasStore = defineStore(
  "maquinariaHerramientas",
  () => {
    let token = ref(useLoginStore().user.token);

    let getMaquinariaHerramientas = async () => {
      try {
        let res = await axios.get("/maquinaria-herramientas", {
          headers: {
            token: token.value,
          },
        });
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };

    let getMaquinariaHerramienta = async (id) => {
      try {
        let res = await axios.get("/maquinaria-herramientas/" + id, {
          headers: {
            token: token.value,
          },
        });
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };

    let postMaquinariaHerramienta = async (maquinariaHerramienta) => {
      try {
        let res = await axios.post(
          "/maquinaria-herramientas",
          maquinariaHerramienta,
          {
            headers: {
              token: token.value,
            },
          }
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };

    let putMaquinariaHerramienta = async (id, maquinariaHerramienta) => {
      try {
        let res = await axios.put(
          "/maquinaria-herramientas/" + id,
          maquinariaHerramienta,
          {
            headers: {
              token: token.value,
            },
          }
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
    let addMantenimiento = async (id, mantenimiento) => {
      try {
        let res = await axios.post(
          `/maquinaria-herramientas/${id}/mantenimiento`,
          mantenimiento,
          {
            headers: { token: token.value },
          }
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };

    let addDesinfeccion = async (id, desinfeccion) => {
      try {
        let res = await axios.post(
          `/maquinaria-herramientas/${id}/desinfeccion`,
          desinfeccion,
          {
            headers: { token: token.value },
          }
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };

    return {
      getMaquinariaHerramientas,
      getMaquinariaHerramienta,
      postMaquinariaHerramienta,
      putMaquinariaHerramienta,
      addDesinfeccion,
      addMantenimiento
    };
  }
);
