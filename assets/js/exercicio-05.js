function calcularEx5() {
  const pessoas = [
    { idade: 25, peso: 70, sexo: 'M' }, { idade: 30, peso: 60, sexo: 'F' },
    { idade: 22, peso: 65, sexo: 'M' }, { idade: 28, peso: 55, sexo: 'F' },
    { idade: 35, peso: 80, sexo: 'M' }, { idade: 24, peso: 52, sexo: 'F' },
    { idade: 40, peso: 90, sexo: 'M' }, { idade: 31, peso: 58, sexo: 'F' },
    { idade: 27, peso: 75, sexo: 'M' }, { idade: 29, peso: 62, sexo: 'F' }
  ];

  const homens = pessoas.filter(p => p.sexo === 'M');
  const mulheres = pessoas.filter(p => p.sexo === 'F');
  const mediaIdadeHomens = homens.reduce((a, p) => a + p.idade, 0) / homens.length;
  const mediaPesoMulheres = mulheres.reduce((a, p) => a + p.peso, 0) / mulheres.length;

  document.getElementById('resultado-05').innerHTML = `
    <p>Total de homens: ${homens.length}</p>
    <p>Total de mulheres: ${mulheres.length}</p>
    <p>Média idade homens: ${mediaIdadeHomens.toFixed(2)}</p>
    <p>Média peso mulheres: ${mediaPesoMulheres.toFixed(2)}</p>`;
}
