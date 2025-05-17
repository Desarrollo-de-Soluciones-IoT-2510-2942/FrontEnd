<template>
  <div class="edit-crop">
    <h2 class="section-title">Tus Campos Agrícolas</h2>
    <button class="btn-return" @click="onReturn">
      <img src="/general-icons/return-icon.png" alt="Regresar"/>
    </button>
    <h3 class="sub-title">Nuevo Campo:</h3>
    <div class="form-card">
      <div class="card-header">
        <img src="/general-icons/field-icon.png" alt="Campo" class="field-icon"/>
      </div>
      <div class="form-body">
        <label>Nombre:</label>
        <input type="text" v-model="name" />
        <label>Hectáreas:</label>
        <input type="text" v-model="hectareas" />
        <label>Estado:</label>
        <input type="text" v-model="estado" />
      </div>
    </div>
    <button class="btn-submit" @click="onSubmit">
      <img src="/general-icons/check-icon.png" alt="Guardar"/>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const name = ref('')
const hectareas = ref('')
const estado = ref('')
const onReturn = () => router.push('/crops')
const onSubmit = () => router.push('/crops')
</script>

<style scoped>
.edit-crop {
  position: relative;
  padding: 70px;
}
.section-title {
  font-size: 30px;
  color: #004225;
  margin-bottom: 16px;
}
.btn-return {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: #004225;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.btn-return img {
  width: 20px;
  height: 20px;
}
.sub-title {
  font-size: 25px;
  color: #004225;
  margin: 16px 0;
}
.form-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  padding: 16px;
}
.card-header {
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.field-icon {
  width: 320px;
  height: 320px;
}
.form-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.form-body label {
  font-size: 20px;
  color: #004225;
}
.form-body input {
  border: 1px solid #004225;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
}
.btn-submit {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 76px;
  height: 76px;
  background-color: #004225;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.btn-submit img {
  width: 24px;
  height: 24px;
}
</style>
