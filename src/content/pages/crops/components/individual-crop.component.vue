<template>
  <div class="individual-crop">
    <button class="btn-return" @click="goBack">
      <img src="/general-icons/return-icon.png" alt="Regresar"/>
    </button>
    <h2 class="section-title">
      Cultivos de <span class="crop-name">{{ campoName }}</span>
    </h2>
    <div class="cultivation-list">
      <div v-for="cultivo in cultivos" :key="cultivo.id" class="cultivation-card">
        <div class="card-body">
          <img src="/general-icons/crop-icon.png" alt="Cultivo" class="crop-icon"/>
          <div class="cultivation-info">
            <h3 class="cultivation-title">{{ cultivo.name }}</h3>
            <p>Fecha de siembra: {{ cultivo.date }}</p>
            <p>Días desde siembra: {{ cultivo.days }} días</p>
            <p>Dispositivos IoT: {{ cultivo.devices }} conectados</p>
          </div>
        </div>
      </div>
    </div>
    <button class="add-button" @click="goToAdd">
      <img src="/general-icons/add-icon.png" alt="Agregar"/>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const campoName = 'Campo Huancayo - 1'
const cultivos = ref([
  { id: 1, name: 'Cultivo de Papas', date: '09/02/2025', days: 54, devices: 2 },
  { id: 2, name: 'Cultivo de Camote', date: '14/02/2025', days: 50, devices: 3 }
])
const goBack = () => router.push('/crops')
const goToAdd = () => router.push('/crops')
</script>

<style scoped>
.individual-crop {
  position: relative;
  padding: 70px;
}
.btn-return {
  position: absolute;
  top: 30px;
  left: 30px;
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
.section-title {
  font-size: 30px;
  color: #004225;
  margin: 16px 0;
}
.crop-name {
  color: #917529;
}
.cultivation-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.cultivation-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 520px;
  padding: 26px;
}
.card-body {
  display: flex;
  align-items: center;
  gap: 46px;
}
.crop-icon {
  width: 150px;
  height: 150px;
}
.cultivation-info {
  display: flex;
  flex-direction: column;
}
.cultivation-title {
  font-size: 25px;
  color: #004225;
  margin-bottom: 4px;
}
.cultivation-info p {
  font-size: 18px;
  color: #333;
  margin: 2px 0;
}
.add-button {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background-color: #004225;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.add-button img {
  width: 24px;
  height: 24px;
}
</style>
