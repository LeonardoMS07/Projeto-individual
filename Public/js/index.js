function leiaMais() {
    const tresPontos = document.getElementById('tresPontos');
    const mostrarMais = document.getElementById('mostrarMais');
    const btnLeiaMais = document.getElementById('btnLeiaMais');

    if (tresPontos.style.display === 'none') {
        tresPontos.style.display = 'inline';
        mostrarMais.style.display = 'none';
        btnLeiaMais.innerHTML = 'Leia Mais';
    } else {
        tresPontos.style.display = 'none';
        mostrarMais.style.display = 'inline';
        btnLeiaMais.innerHTML = 'Leia Menos';
    }
}
