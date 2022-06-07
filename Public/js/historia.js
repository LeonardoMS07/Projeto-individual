







function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;

    var corpo = {
        titulo: form_postagem.titulo.value,
        descricao: form_postagem.descricao.value
    }

    fetch(`/aviso/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log(resposta);

        if (resposta.ok) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Poste Realizado com sucesso',
                showConfirmButton: true,
                timer: 10000
            })


            window.location = "historia.html";
            limparFormulario();
            finalizarAguardar();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;

}



function atualizarFeed() {
    //aguardar();
    fetch("/aviso/listar").then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: Leonardo ", JSON.stringify(resposta));



                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    div_historia.innerHTML += `
                    <div  class="feed-container">
                   <span>Nome:${publicacao.Nome}<br>
                    Titulo:${publicacao.titulo}<br>
                     Descricao: ${publicacao.descricao}
                    </span>
                </div>
                        `


                }


            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

function testar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_postagem")));

    var divResultado = document.getElementById("div_feed");

    divResultado.appendChild(document.createTextNode(formulario.get("descricao")));
    divResultado.innerHTML = formulario.get("descricao");

    finalizarAguardar();

    return false;
}
function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}