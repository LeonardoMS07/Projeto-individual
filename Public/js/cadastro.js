
var listaPersonagem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

var listaCla = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function cadastrar() {

    var nomeVar = nome_input.value
    var emailVar = email_input.value
    var senhaVar = senha_input.value
    var confirma_senhaVar = confirmacao_senha_input.value
    var personagemVar = personagem_select.value
    var claVar = cla_select.value

    if (emailVar.indexOf('@') == -1 && emailVar.indexOf('.com') == -1) {
        email_invalido.innerHTML = `Email sem o '@' e sem '.com'`
        email_invalido.style.color = 'red'
        email_input.style.border = '2px solid red'

    } else if (emailVar.indexOf('@') == -1) {
        email_invalido.innerHTML = `Email sem o '@'`
        email_invalido.style.color = 'red'
        email_input.style.border = '2px solid red'

    } else if (emailVar.indexOf('.com') == -1) {
        email_invalido.innerHTML = `Email sem o '.com'`
        email_invalido.style.color = 'red'
        email_input.style.border = '2px solid red'
    } else {
        email_invalido.innerHTML = ''
        email_input.style.border = ''

        if (senhaVar.length < 8) {
            senha_invalida.innerHTML = `Senha menor que 8 caracteres`
            senha_invalida.style.color = 'red'
            senha_input.style.border = '2px solid red'
        } else {
            senha_invalida.innerHTML = ''
            senha_input.style.border = ''

            if (confirma_senhaVar != senhaVar) {
                confirma_senha_invalida.innerHTML = 'Senha nao Corresponde com a de Cima'
                confirma_senha_invalida.style.color = 'red'
                confirmacao_senha_input.style.border = '2px solid red'

            } else {
                confirma_senha_invalida.innerHTML = ''
                confirmacao_senha_input.style.border = ''

                if (personagemVar == 0) {
                    personagem_selecionado.innerHTML = 'Personagem nao Selecionado'
                    personagem_selecionado.style.color = 'red'
                    personagem_select.style.border = '2px solid red'

                } else {
                    personagem_selecionado.innerHTML = ''
                    personagem_select.style.border = ''

                    if (claVar == 0) {
                        cla_selecionado.innerHTML = 'Cla nao selecionado'
                        cla_selecionado.style.color = 'red'
                        cla_select.style.border = '2px solid red'
                    }



//
                    var fkPersonagem = 0

                    for (posicao = 0; posicao <= listaPersonagem.length; posicao++) {
                        if (posicao == personagemVar) {
                            fkPersonagem = listaPersonagem[posicao]
                            console.log(fkPersonagem)
                        }
                    }

                    var fkCla = 0

                    for (posicao = 0; posicao <= listaCla.length; posicao++) {
                        if (posicao == claVar) {
                            fkCla = listaCla[posicao]
                            console.log(fkCla)
                        }
                    }


                }


                // Enviando o valor da nova input
                fetch("/usuarios/cadastrar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        // crie um atributo que recebe o valor recuperado aqui
                        // Agora vá para o arquivo routes/usuario.js
                        nomeServer: nomeVar,
                        emailServer: emailVar,
                        senhaServer: senhaVar,
                        personagemSever: fkPersonagem,
                        claServer: fkCla
                    })
                }).then(function (resposta) {

                    console.log("resposta: ", resposta);

                    if (resposta.ok) {
                        cla_selecionado.innerHTML = ''
                        cla_select.style.border = ''

                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Cadastro Realizado',
                            showConfirmButton: true,
                            timer: 7000
                        })
                        setTimeout(function () {
                            window.location = "login.html";
                        }, 1000); // apenas para exibir o loading

                    } else {
                        Swal.fire(
                            'Houve um erro ao tentar realizar o cadastro',
                            'Error'
                        )
                        setTimeout(function () {
                            window.location = "cadastro.html";
                        }, 1000);
                        throw ("Houve um erro ao tentar realizar o cadastro!");
                       
                    }
                }).catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);

                });

                return false;
            }

        }
    }
} 
