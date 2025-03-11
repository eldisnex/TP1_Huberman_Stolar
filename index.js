const form = document.getElementById('form');
const promedio = document.getElementById('promedio');
const mayor = document.getElementById('mayor');
const resultado = document.getElementById('resultado');
const inputs = Array.from(document.querySelectorAll('input'));

form.addEventListener('submit', (e) => e.preventDefault());

promedio.addEventListener(
   'click',
   () =>
      (resultado.textContent =
         inputs.reduce((a, b) => a + parseFloat(b.value), 0) / inputs.length)
);
mayor.addEventListener(
   'click',
   () =>
      (resultado.textContent = inputs.find(
         (input) =>
            input.value == Math.max(...inputs.map((e) => parseFloat(e.value)))
      ).id)
);
