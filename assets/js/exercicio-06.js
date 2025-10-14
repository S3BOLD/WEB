function calcularEx6() {
  const salario = Number(document.getElementById('salario').value);
  if (!salario || salario <= 0) return alert('Digite um salário válido');

  let perc;
  if (salario <= 280) perc = 20;
  else if (salario <= 700) perc = 15;
  else if (salario <= 1500) perc = 10;
  else perc = 5;

  const aumento = salario * (perc / 100);
  const novo = salario + aumento;

  document.getElementById('resultado-06').innerHTML = `
    <p>Salário anterior: R$ ${salario.toFixed(2)}</p>
    <p>Percentual aplicado: ${perc}%</p>
    <p>Valor do aumento: R$ ${aumento.toFixed(2)}</p>
    <p><strong>Novo salário:</strong> R$ ${novo.toFixed(2)}</p>`;
}
