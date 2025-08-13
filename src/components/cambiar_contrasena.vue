<template>
  <div class="change-container">
    <form class="change-form" @submit.prevent="handleSubmit">
      <h3>Cambiar Contraseña</h3>
      <p>Introduce tu nueva contraseña.</p>

      <div class="input-group">
        <label for="newPassword">Nueva Contraseña</label>
        <input
          type="password"
          id="newPassword"
          v-model="newPassword"
          required
          placeholder="••••••••"
        />
      </div>

      <div class="input-group">
        <label for="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          required
          placeholder="••••••••"
        />
      </div>

      <button type="submit">Guardar nueva contraseña</button>

      <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useUsuariosStore } from "../stores/usuarios.js";
import Swal from 'sweetalert2';


const newPassword = ref("");
const confirmPassword = ref("");
const mensaje = ref("");

const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const usuariosStore = useUsuariosStore();

const handleSubmit = async () => {
  if (newPassword.value === "" || confirmPassword.value === "") {
    Swal.fire(
      "Campos vacíos",
      "Por favor ingresa y confirma tu nueva contraseña",
      "warning"
    );
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    Swal.fire("Error", "Las contraseñas no coinciden", "error");
    return;
  }

  try {
    const token = route.query.token;
    console.log(token);

    const response = await usuariosStore.nuevaContrasena(
      newPassword.value,
      token
    );

    console.log(response);

    newPassword.value = "";
    confirmPassword.value = "";

    if (response.data.message === "Contraseña actualizada correctamente") {
      Swal.fire("Éxito", "Contraseña actualizada correctamente", "success");
      setTimeout(() => router.push("/login"), 3000);
    }
  } catch (error) {
    console.error("Error al restablecer la contraseña:", error);
    Swal.fire("Error", "Ocurrió un error al actualizar la contraseña", "error");
  }
};
</script>

<style scoped>
.change-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #3d7011, #70b039);
  padding: 20px;
}

.change-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.change-form h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 35px;
}

.change-form p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.input-group {
  text-align: left;
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 6px;
  color: #555;
  font-weight: 500;
}

.input-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  outline: none;
  border-color: #8e2de2;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #70b039;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.mensaje {
  margin-top: 15px;
  font-size: 14px;
  color: #28a745;
}
</style>
