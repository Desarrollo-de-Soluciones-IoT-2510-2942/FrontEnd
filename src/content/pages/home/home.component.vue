<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const dashboard = reactive({
  usuario: { nombre: 'Hernan', apellido: 'Morales', creacionCuenta: '2023-10-01', suscripcion: 'ESTÁNDAR', correoElectronico: 'ernan@gmail.com' },
  camposAgricolas: { activos: 5, inactivos: 1 },
  aguaAhorrada: { lunes: 5, martes: 3, miercoles: 6, jueves: 8, viernes: 4, sabado: 2, domingo: 3 },
  dispositivosIoT: 8,
  totalCultivos: 10,
  calendario: { mes: 'Mayo', anio: 2025, diaActual: 9 },
  recomendacionDelDia: 'Activa el actuador de Riego ahora mismo',
  crecimientoCultivos: [
    { nombre: 'Tomate', porcentaje: 30 },
    { nombre: 'Lechuga', porcentaje: 21 },
    { nombre: 'Mango', porcentaje: 25 },
    { nombre: 'Pera', porcentaje: 21 },
    { nombre: 'Platano', porcentaje: 10 },
    { nombre: 'Yuca', porcentaje: 20 },
    { nombre: 'Uva', porcentaje: 8 }
  ]
})

const doughnutRef = ref(null)
const barRef = ref(null)
const growthRef = ref(null)

onMounted(() => {
  new Chart(doughnutRef.value, {
    type: 'doughnut',
    data: {
      labels: ['Activos', 'Inactivos'],
      datasets: [{
        data: [dashboard.camposAgricolas.activos, dashboard.camposAgricolas.inactivos],
        backgroundColor: ['#014728', '#9C7A36']
      }]
    },
    options: { plugins: { legend: { display: false } } }
  })

  const datos = dashboard.aguaAhorrada
  new Chart(barRef.value, {
    type: 'bar',
    data: {
      labels: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
      datasets: [{
        data: [datos.lunes, datos.martes, datos.miercoles, datos.jueves, datos.viernes, datos.sabado, datos.domingo],
        backgroundColor: ['#014728','#014728','#014728','#9C7A36','#014728','#014728','#014728']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } }
  })

  new Chart(growthRef.value, {
    type: 'bar',
    data: {
      labels: dashboard.crecimientoCultivos.map(c => c.nombre),
      datasets: [{
        data: dashboard.crecimientoCultivos.map(c => c.porcentaje),
        backgroundColor: dashboard.crecimientoCultivos.map((_, i) => i % 2 ? '#014728' : '#9C7A36')
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } }
  })
})

const calendarWeeks = computed(() => {
  const m = dashboard.calendario.mes
  const y = dashboard.calendario.anio
  const monthIndex = new Date(`${m} 1, ${y}`).getMonth()
  const days = new Date(y, monthIndex + 1, 0).getDate()
  const firstDay = new Date(y, monthIndex, 1).getDay()
  const weeks = []
  let week = Array(firstDay).fill('')
  for (let d = 1; d <= days; d++) {
    week.push(d)
    if (week.length === 7) { weeks.push(week); week = [] }
  }
  if (week.length) weeks.push([...week, ...Array(7 - week.length).fill('')])
  return weeks
})
</script>

<template>
  <div class="home-container">
    <div class="dashboard">
      <div class="header">
        <h2>Bienvenido a NutriControl,</h2>
        <h2 class="user-name">{{ dashboard.usuario.nombre }} {{ dashboard.usuario.apellido }}</h2>
      </div>
      <div class="cards-grid">
        <div class="card card-campos">
          <h3>Campos Agrícolas</h3>
          <canvas ref="doughnutRef" class="doughnut-chart"></canvas>
          <div class="legend">
            <span><span class="dot activos"></span> Campos Activos {{ dashboard.camposAgricolas.activos }}</span>
            <span><span class="dot inactivos"></span> Campos Inactivos {{ dashboard.camposAgricolas.inactivos }}</span>
          </div>
        </div>
        <div class="card card-agua">
          <h3>Agua ahorrada (Litros)</h3>
          <canvas ref="barRef" class="bar-chart"></canvas>
        </div>
        <div class="card card-iot">
          <img src="/general-icons/iot-icon.png" alt="IoT">
          <div>
            <span>Dispositivos IoT:</span>
            <span class="value">{{ dashboard.dispositivosIoT }}</span>
          </div>
        </div>
        <div class="card card-total">
          <img src="/general-icons/total-crops-icon.png" alt="Cultivos">
          <div>
            <span>Total de Cultivos:</span>
            <span class="value">{{ dashboard.totalCultivos }}</span>
          </div>
        </div>
        <div class="card card-calendario">
          <h3>{{ dashboard.calendario.mes }} {{ dashboard.calendario.anio }}</h3>
          <table class="calendar">
            <thead>
            <tr><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th><th>Dom</th></tr>
            </thead>
            <tbody>
            <tr v-for="(week,i) in calendarWeeks" :key="i">
              <td v-for="(day,j) in week" :key="j" :class="{ today: day === dashboard.calendario.diaActual }">{{ day }}</td>
            </tr>
            </tbody>
          </table>
          <div class="recomendation">• {{ dashboard.recomendacionDelDia }}</div>
        </div>
        <div class="card card-crecimiento">
          <h3>Crecimiento de cultivos</h3>
          <canvas ref="growthRef" class="growth-chart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1400px;
  margin: 0 auto;
}
.dashboard {
  padding: 20px;
  font-family: sans-serif;
}
.header h2 {
  margin: 0;
}
.header .user-name {
  color: #9C7A36;
  margin-top: 5px;
}
.cards-grid {
  display: grid;
  grid-template-areas:
    "campos agua iot"
    "total calendario crecimiento";
  grid-template-columns: 320px 1fr 300px;
  grid-template-rows: 430px 250px;
  gap: 20px;
}
.card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-campos {
  grid-area: campos;
}
.card-campos h3 {
  font-size: 20px;
}
.card-campos .doughnut-chart {
  width: 250px;
  height: 250px;
}
.card-agua {
  grid-area: agua;
}
.card-agua .bar-chart {
  width: 100%;
  height: 200px;
}
.card-iot {
  grid-area: iot;
  justify-content: center;
  gap: 15px;
}
.card-iot img {
  width: 48px;
  height: 48px;
}
.card-iot .value {
  font-size: 32px;
  font-weight: bold;
  color: #014728;
}
.card-total {
  grid-area: total;
  justify-content: center;
  gap: 15px;
}
.card-total img {
  width: 48px;
  height: 48px;
}
.card-total .value {
  font-size: 32px;
  font-weight: bold;
  color: #014728;
}
.card-calendario {
  grid-area: calendario;
  align-items: flex-start;
}
.card-calendario .calendar {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}
.card-calendario th,
.card-calendario td {
  width: 14.28%;
  text-align: center;
  padding: 5px;
}
.card-calendario td.today {
  background: #014728;
  color: #fff;
  border-radius: 50%;
}
.card-calendario .recomendation {
  margin-top: auto;
  font-size: 14px;
  align-self: flex-start;
}
.card-crecimiento {
  grid-area: crecimiento;
}
.card-crecimiento .growth-chart {
  width: 100%;
  height: 200px;
}
.legend {
  display: flex;
  gap: 15px;
  margin-top: 10px;
  font-size: 14px;
}
.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
}
.dot.activos {
  background: #014728;
}
.dot.inactivos {
  background: #9C7A36;
}
</style>
