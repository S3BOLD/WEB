function calcularEx3() {
  const numeros = [3, 7, 10, 12, 5, 8, 15, 2, 9, 11];

  function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
  }

  const somaPares = numeros.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
  const somaPrimos = numeros.filter(ehPrimo).reduce((a, b) => a + b, 0);

  document.getElementById('resultado-03').innerHTML = `
    <p>Soma dos pares: ${somaPares}</p>
    <p>Soma dos primos: ${somaPrimos}</p>`;
}
