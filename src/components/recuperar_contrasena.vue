<template>
  <div class="recover-container">
    <form class="recover-form" @submit.prevent="handleSubmit">
      <h3>Recuperar Contraseña</h3>
      <p>Te enviaremos un enlace para restablecer tu contraseña.</p>

      <div class="input-group">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="ejemplo@correo.com"
          required
        />
      </div>

      <button type="submit">Enviar enlace</button>

      <form class="recover-form" @submit.prevent="handleSubmit">
        <p v-if="mensaje">{{ mensaje }}</p>
      </form>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUsuariosStore } from "../stores/usuarios.js";

// Instancias dentro del setup
const router = useRouter();
const useUsuarios = useUsuariosStore();

// Datos reactivos
const email = ref("");
const mensaje = ref("");

// Validación
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const handleSubmit = async () => {
  if (validarEmail(email.value)) {
    try {
      await useUsuarios.envioCorreo(email.value);
      mensaje.value = `Hemos enviado un enlace de recuperación a ${email.value}`;
      email.value = "";
    } catch (error) {
      mensaje.value = "Error al enviar el correo. Intenta nuevamente.";
      console.error(error);
    }
  } else {
    mensaje.value = "El correo electrónico no es válido.";
  }
};
</script>

<style scoped>
.recover-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #3d7011, #70b039);

  padding: 20px;
}

.recover-form {
  background-color: #fff;
  padding: 30px 25px;
  border-radius: 12px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.recover-form h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 35px;
}

.recover-form p {
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
  border-color: #0072ff;
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

button:hover {
  background-color: #005ec4;
}

.mensaje {
  margin-top: 15px;
  font-size: 14px;
  color: #28a745;
}
</style>
