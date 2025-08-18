<template>
  <div class="estadisticas-menu">
    <div class="grafico-puntos">
      <h3>Resumen General</h3>
      <canvas ref="puntosChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUsuariosStore } from '../stores/usuarios.js';
import { useCultivosStore } from '../stores/cultivos.js';
import { useParcelasStore } from '../stores/parcelas.js';
import Chart from 'chart.js/auto';

const puntosChart = ref(null);

const usuariosStore = useUsuariosStore();
const cultivosStore = useCultivosStore();
const parcelasStore = useParcelasStore();

onMounted(async () => {
  await Promise.all([
    usuariosStore.getUsuarios(),
    cultivosStore.getCultivos(),
    parcelasStore.getParcelas()
  ]);

  // Gráfico de puntos: usuarios, cultivos, parcelas
  new Chart(puntosChart.value, {
    type: 'bar',
    data: {
      labels: ['Usuarios', 'Cultivos', 'Parcelas'],
      datasets: [{
        label: 'Cantidad',
        data: [
          usuariosStore.usuarios?.length || 0,
          cultivosStore.cultivos?.length || 0,
          parcelasStore.parcelas?.length || 0
        ],
        backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
});
</script>

<style scoped>
.estadisticas-menu {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}
.grafico-puntos {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1rem;
  width: 100%;
  min-width: 280px;
}
canvas {
  max-width: 100%;
  height: 220px;
}
</style>
