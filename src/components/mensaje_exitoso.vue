<template>
  <div class="success-container">
    <div class="success-card">
      <svg class="check-icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12zm6.364 8.05l-7.778 7.778a1 1 0 01-1.414 0l-3.535-3.535a1 1 0 111.414-1.414l2.828 2.828 7.071-7.071a1 1 0 111.414 1.414z"
        />
      </svg>
      <h2>¡Contraseña cambiada!</h2>
      <p>Tu nueva contraseña ha sido guardada correctamente.</p>

      <router-link to="/login" class="login-button">Iniciar sesión</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #3d7011, #70b039);

  padding: 20px;
}

.success-card {
  background-color: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.check-icon {
  width: 60px;
  height: 60px;
  color: #70b039;
  margin-bottom: 20px;
}

h2 {
  color: #333;
  margin-bottom: 10px;
  font-size: 40px;
}

p {
  color: #666;
  margin-bottom: 30px;
}

.login-button {
  display: inline-block;
  background-color: #70b039;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #5c982f;
}
</style>
