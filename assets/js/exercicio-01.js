function calcularEx1() {
  const pessoas = [
    { altura: 1.75, sexo: 'M' }, { altura: 1.62, sexo: 'F' },
    { altura: 1.80, sexo: 'M' }, { altura: 1.55, sexo: 'F' },
    { altura: 1.70, sexo: 'M' }, { altura: 1.65, sexo: 'F' },
    { altura: 1.90, sexo: 'M' }, { altura: 1.68, sexo: 'F' },
    { altura: 1.77, sexo: 'M' }, { altura: 1.58, sexo: 'F' },
    { altura: 1.72, sexo: 'M' }, { altura: 1.60, sexo: 'F' },
    { altura: 1.82, sexo: 'M' }, { altura: 1.66, sexo: 'F' },
    { altura: 1.69, sexo: 'M' }
  ];

  const alturas = pessoas.map(p => p.altura);
  const maior = Math.max(...alturas);
  const menor = Math.min(...alturas);
  const mulheres = pessoas.filter(p => p.sexo === 'F');
  const mediaMulheres = mulheres.reduce((a, p) => a + p.altura, 0) / mulheres.length;
  const numHomens = pessoas.filter(p => p.sexo === 'M').length;

  document.getElementById('resultado-01').innerHTML = `
    <p><strong>Maior altura:</strong> ${maior.toFixed(2)} m</p>
    <p><strong>Menor altura:</strong> ${menor.toFixed(2)} m</p>
    <p><strong>Média altura (mulheres):</strong> ${mediaMulheres.toFixed(2)} m</p>
    <p><strong>Número de homens:</strong> ${numHomens}</p>`;
}
