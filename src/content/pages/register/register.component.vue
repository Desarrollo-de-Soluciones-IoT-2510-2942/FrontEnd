<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const submit = () => {
  // Aquí puedes añadir validación o llamada a tu API
  router.push('/home')
}
</script>

<template>
  <div class="login-container">
    <div class="login-form">
      <div class="logo">
        <img src="/nutricontrol-icon.png" alt="NutriControl Logo" class="logo-img" />
        <span class="logo-text">NutriControl</span>
      </div>
      <p class="tagline">Empieza a cultivar resultados</p>
      <h2 class="title">Inicia sesión en NutriControl</h2>
      <div class="fields">
        <input
            v-model="email"
            type="email"
            placeholder="Correo electrónico"
            class="text-input"
        />
        <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            class="text-input"
        />
      </div>
      <button class="btn-login" @click="submit">Iniciar sesión</button>
      <div class="footer-link">
        <span>¿No tienes una cuenta?</span>
        <a href="/register">Regístrate</a>
      </div>
    </div>
    <div class="login-image">
      <img src="/images/login-bg.jpg" alt="Cultivo" />
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.login-form {
  flex: 1;
  max-width: 600px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
}
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.logo-img {
  width: 48px;
  height: 48px;
}
.logo-text {
  font-size: 28px;
  font-weight: bold;
  color: #014728;
}
.tagline {
  color: #014728;
  font-size: 16px;
  margin-bottom: 24px;
}
.title {
  font-size: 28px;
  color: #014728;
  margin-bottom: 32px;
}
.fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}
.text-input {
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 2px solid #014728;
  border-radius: 8px;
  outline: none;
  color: #014728;
  box-sizing: border-box;
}
.text-input:focus {
  border-color: #9C7A36;
}
.btn-login {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  background: #014728;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background .2s;
}
.btn-login:hover {
  background: #0f593d;
}
.footer-link {
  margin-top: 24px;
  font-size: 14px;
  color: #014728;
}
.footer-link a {
  margin-left: 4px;
  color: #014728;
  text-decoration: underline;
}
.login-image {
  flex: 1;
  position: relative;
}
.login-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 900px) {
  .login-container {
    flex-direction: column;
  }
  .login-image {
    display: none;
  }
}
</style>
