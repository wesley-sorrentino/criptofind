function simulate() {
  const value = document.getElementById('investment').value;
  if (!value) {
    document.getElementById('result').innerText = 'Digite um valor válido';
    return;
  }
  const simulated = (value * 1.25).toFixed(2);
  document.getElementById('result').innerText = `Retorno estimado: ${simulated} USDT`;
}

// Placeholder para animações 3D e storytelling
console.log('Crypto site 2026 pronto para evoluir com 3D e IA.');
