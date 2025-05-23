const form = document.getElementById("inventarioForm");
const ctxBarras = document.getElementById("graficaBarras").getContext("2d");
const ctxTorta = document.getElementById("graficaTorta").getContext("2d");

let chartBarras, chartTorta;

function actualizarGraficas(data) {
  const etiquetas = Object.keys(data);
  const valores = Object.values(data);

  const colores = ["#8b5e3c", "#a9745b", "#c49a6c", "#d7b899", "#e5d0aa"];

  if (chartBarras) chartBarras.destroy();
  if (chartTorta) chartTorta.destroy();

  chartBarras = new Chart(ctxBarras, {
    type: "bar",
    data: {
      labels: etiquetas,
      datasets: [
        {
          label: "Cantidad",
          data: valores,
          backgroundColor: colores,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Inventario por Categoría",
        },
      },
    },
  });

  chartTorta = new Chart(ctxTorta, {
    type: "doughnut",
    data: {
      labels: etiquetas,
      datasets: [
        {
          data: valores,
          backgroundColor: colores,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        title: {
          display: true,
          text: "Distribución de Inventario",
        },
      },
    },
  });
}

function obtenerDatosYActualizar() {
  const data = {
    Camas: +document.getElementById("camas").value,
    Mesas: +document.getElementById("mesas").value,
    Sillas: +document.getElementById("sillas").value,
    "Muebles de Sala": +document.getElementById("muebles").value,
    Decoraciones: +document.getElementById("decoraciones").value,
  };
  actualizarGraficas(data);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  obtenerDatosYActualizar(e);
});

setTimeout(() => {
    obtenerDatosYActualizar()
}, 1000);

// Inicializar con valores por defecto
actualizarGraficas({
  Camas: 0,
  Mesas: 0,
  Sillas: 0,
  "Muebles de Sala": 0,
  Decoraciones: 0,
});
