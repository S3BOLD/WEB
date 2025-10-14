function calcularEx2() {
  const espectadores = [
    { idade: 25, opiniao: 3 }, { idade: 30, opiniao: 2 },
    { idade: 19, opiniao: 1 }, { idade: 40, opiniao: 3 },
    { idade: 28, opiniao: 2 }, { idade: 22, opiniao: 1 },
    { idade: 35, opiniao: 3 }, { idade: 45, opiniao: 2 },
    { idade: 26, opiniao: 3 }, { idade: 20, opiniao: 2 },
    { idade: 33, opiniao: 1 }, { idade: 27, opiniao: 2 },
    { idade: 41, opiniao: 3 }, { idade: 24, opiniao: 1 },
    { idade: 29, opiniao: 2 }
  ];

  const otimos = espectadores.filter(e => e.opiniao === 3);
  const regulares = espectadores.filter(e => e.opiniao === 1);
  const bons = espectadores.filter(e => e.opiniao === 2);

  const mediaIdadeOtimos = otimos.reduce((a, e) => a + e.idade, 0) / otimos.length;
  const percBons = (bons.length / espectadores.length) * 100;

  document.getElementById('resultado-02').innerHTML = `
    <p>Média idade (ótimo): ${mediaIdadeOtimos.toFixed(2)} anos</p>
    <p>Quantidade de regulares: ${regulares.length}</p>
    <p>Porcentagem "bom": ${percBons.toFixed(2)}%</p>`;
}
