// Gráfico de rendimiento académico relacionado con el desayuno
const ctx = document.getElementById('rendimientoGrafico').getContext('2d');

const rendimientoGrafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Desayuno Completo', 'Desayuno Ligero', 'No Desayuno'],
    datasets: [{
      label: 'Rendimiento Académico (%)',
      data: [90, 75, 50], // Datos hipotéticos
      backgroundColor: [
        '#8B0000', // Rojo vino
        '#FF6347', // Rojo tomate
        '#D3D3D3', // Gris claro
      ],
      borderColor: '#fff',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Código para la interactividad del botón de Canva
const button = document.querySelector('.cta-button');
button.addEventListener('click', () => {
  alert("¡Estás siendo redirigido a Canva!");
});
