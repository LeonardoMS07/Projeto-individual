function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;




