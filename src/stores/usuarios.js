import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from "../stores/login.js";

export const useUsuariosStore = defineStore("usuarios", () => {
  let token = ref(useLoginStore().user.token);

  let getUsuarios = async () => {
    try {
      let res = await axios.get("/usuarios", {
        headers: {
          token: token.value,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  let getUsuario = async (id) => {
    try {
      let res = await axios.get("/usuarios/" + id, {
        headers: {
          token: token.value,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  let postUsuario = async (usuario) => {
    try {
      let res = await axios.post("/usuarios", usuario, {
        headers: {
          token: token.value,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  let putUsuario = async (id, usuario) => {
    try {
      let res = await axios.put("/usuarios/" + id, usuario, {
        headers: {
          token: token.value,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const envioCorreo = async (email) => {
    try {
      console.log(email);

      const res = await axios.put(`/usuarios/envio/email`, { email: email });
      return res;
    } catch (error) {
      throw error;
    }
  };

  const nuevaContrasena = async (nuevaContrasena, token) => {
    try {
      return await axios.put("/usuarios/nueva/contrasena", {
        nuevaContrasena,
        token,
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    getUsuarios,
    getUsuario,
    postUsuario,
    putUsuario,
    envioCorreo,
    nuevaContrasena,
  };
});
