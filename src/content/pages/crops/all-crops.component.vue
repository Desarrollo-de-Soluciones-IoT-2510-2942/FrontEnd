<template>
  <div class="all-crops">
    <h2 class="section-title">Tus Campos Agrícolas</h2>
    <div class="crops-list">
      <div v-for="campo in campos" :key="campo.id" class="crop-card">
        <div class="card-header">
          <img src="/general-icons/field-icon.png" alt="Campo" class="field-icon"/>
          <div class="edit-btn">
            <img src="/general-icons/edit-icon.png" alt="Editar"/>
          </div>
        </div>
        <div class="card-body">
          <h3 class="crop-title">{{ campo.name }}</h3>
          <p>Hectáreas: {{ campo.hectareas }}</p>
          <p>Cultivos: {{ campo.cultivos }}</p>
          <p>Estado: {{ campo.estado }}</p>
        </div>
      </div>
    </div>
    <button class="add-button">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const campos = ref([
  { id: 1, name: 'Campo Huancayo - 1', hectareas: 5, cultivos: 'Papa, Camote', estado: 'Activo' },
  { id: 2, name: 'Campo Huancayo - 2', hectareas: 12, cultivos: 'Lechuga', estado: 'Activo' },
  { id: 3, name: 'Campo Huancayo - 3', hectareas: 4, cultivos: 'Yuca, Papa', estado: 'Activo' }
])
</script>

<style scoped>
.all-crops {
  position: relative;
  padding: 30px;
}
.section-title {
  font-size: 24px;
  color: #004225;
  margin-bottom: 16px;
}
.crops-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.crop-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 320px;
  padding: 16px;
}
.card-header {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
.field-icon {
  width: 200px;
  height: 200px;
}
.edit-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background-color: #004225;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
}
.edit-btn img {
  width: 20px;
  height: 20px;
}
.crop-title {
  font-size: 26px;
  color: #004225;
  margin-bottom: 8px;
}
.card-body p {
  font-size: 24px;
  color: #333;
  margin: 4px 0;
}
.add-button {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #004225;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
</style>
