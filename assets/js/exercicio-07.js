function converterData() {
  const data = document.getElementById('data').value;
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  try {
    const [dia, mes, ano] = data.split('/');
    const mesNome = meses[parseInt(mes) - 1];
    if (!mesNome) throw new Error('Mês inválido');
    document.getElementById('resultado-07').innerText = `${dia} de ${mesNome} de ${ano}`;
  } catch {
    document.getElementById('resultado-07').innerText = 'Formato inválido! Use dd/mm/aaaa';
  }
}
