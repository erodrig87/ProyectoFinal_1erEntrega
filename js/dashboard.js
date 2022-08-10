/* globals Chart:false, feather:false */

(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })
  
  // Grafico que visualiza gastos por dia en ultima semana
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      //eje x
      labels: [
        restarDias(6).toLocaleDateString(), //funcion que devuelve fecha actual - x dias pasados com parametro
        restarDias(5).toLocaleDateString(),
        restarDias(4).toLocaleDateString(),
        restarDias(3).toLocaleDateString(),
        restarDias(2).toLocaleDateString(),
        restarDias(1).toLocaleDateString(),
        restarDias(0).toLocaleDateString(),
      ],
      // eje y
      datasets: [{
        // data ejemplo -> futuro se remplazara con sumatoria de gastos por dia 
        data: [
          1540,
          3400,
          2940,
          859,
          3450,
          7890,
          1034
        ],
        lineTension: 0,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
