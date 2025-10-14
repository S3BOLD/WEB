function calcularEx4() {
  const n1 = Number(document.getElementById('n1').value);
  const n2 = Number(document.getElementById('n2').value);
  if (isNaN(n1) || isNaN(n2)) return alert('Digite dois números válidos.');

  const soma = n1 + n2;
  const produto = n1 * n2;
  const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) : 'Divisão por zero';
  const resto = n2 !== 0 ? n1 % n2 : 'N/A';

  document.getElementById('resultado-04').innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Produto: ${produto}</p>
    <p>Divisão: ${divisao}</p>
    <p>Resto: ${resto}</p>`;
}
