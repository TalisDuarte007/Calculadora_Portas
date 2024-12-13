// Função para cálculo com porta embutida
function embutida() {
    const medidaInterna = Number(document.querySelector('#largura').value);
    const numeroDePortas = Number(document.querySelector('#numPortas').value);
  
    const medidaPortas = (medidaInterna - (0.3 * (numeroDePortas + 1))) / numeroDePortas;
  
    document.querySelector('#resultados').innerHTML = `
      O móvel terá ${numeroDePortas} portas com ${medidaPortas.toFixed(2)}cm.
    `;
  
    if (numeroDePortas == 2) {
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 1 vão de ${medidaInterna}cm.
      `;
    } else if (numeroDePortas == 3) {
      const vao1 = medidaPortas - 0.6;
      const vao2 = medidaPortas * 2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 2 vãos. Um deles de ${vao1.toFixed(2)}cm, outro com ${vao2.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 4) {
      const vao1 = (medidaInterna - 1.8) / 2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 2 vãos iguais de ${vao1.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 5) {
      const vao1 = medidaPortas + 0.3;
      const vao2 = (medidaInterna - 3.6 - vao1) / 2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 3 vãos. Um deles com ${vao1.toFixed(2)}cm, outros 2 com ${vao2.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 6) {
      const vao1 = (medidaPortas * 2) - 1.2;
      const vao2 = (medidaInterna - vao1) / 2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 3 vãos. O do meio com ${vao1.toFixed(2)}cm, outros dois com ${vao2.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 7) {
      const vao1 = medidaPortas + 0.3;
      const vao2 = (medidaPortas * 2) + 1.2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 4 vãos. Um lateral com ${vao1.toFixed(2)}cm, outros 3 iguais com ${vao2.toFixed(2)}cm.
      `;
    } else {
      document.querySelector('#resultados').innerHTML = `
        Valor inválido. Por favor, indique um número válido.
      `;
    }
  }
  
  // Função para cálculo com porta não embutida
  function nEmbutida() {
    const medidaInterna = Number(document.querySelector('#largura').value);
    const numeroDePortas = Number(document.querySelector('#numPortas').value);
  
    const medidaPortas = ((medidaInterna + 1.2) - (0.3 * (numeroDePortas - 1))) / numeroDePortas;
  
    document.querySelector('#resultados').innerHTML = `
      O móvel terá ${numeroDePortas} portas com ${medidaPortas.toFixed(2)}cm.
    `;
  
    if (numeroDePortas == 2) {
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 1 vão de ${medidaInterna}cm.
      `;
    } else if (numeroDePortas == 3) {
      const vao1 = medidaPortas - 1.5;
      const vao2 = (medidaPortas * 2) - 0.9;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 2 vãos. Um deles de ${vao1.toFixed(2)}cm, outro com ${vao2.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 4) {
      const vao1 = (medidaInterna - 1.8) / 2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 2 vãos iguais de ${vao1.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 5) {
      const vao1 = medidaPortas - 1.5;
      const vao2 = (medidaInterna + 3.6 - vao1) / 2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 3 vãos. Um deles com ${vao1.toFixed(2)}cm, outros 2 com ${vao2.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 6) {
      const vao1 = (medidaPortas * 2) - 1.2;
      const vao2 = (medidaInterna - vao1) / 2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 3 vãos. O do meio com ${vao1.toFixed(2)}cm, outros dois com ${vao2.toFixed(2)}cm.
      `;
    } else if (numeroDePortas == 7) {
      const vao1 = medidaPortas + 0.3;
      const vao2 = (medidaPortas * 2) + 1.2;
      document.querySelector('#resultados').innerHTML += `
        O móvel terá 4 vãos. Um lateral com ${vao1.toFixed(2)}cm, outros 3 iguais com ${vao2.toFixed(2)}cm.
      `;
    } else {
      document.querySelector('#resultados').innerHTML = `
        Valor inválido. Por favor, indique um número válido.
      `;
    }
  }
  
  // Evento para o formulário
  document.getElementById('form-calculadora').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const tipoPorta = document.querySelector('input[name="tipoPorta"]:checked').value;
  
    if (tipoPorta === 'embutida') {
      embutida();
    } else if (tipoPorta === 'naoEmbutida') {
      nEmbutida();
    }
  });
console.log(medidaInterna)
console.log(numeroDePortas)
console.log(tipoPorta)