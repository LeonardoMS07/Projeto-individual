
    function entrar() {

        var emailVar = email_input.value;
        var senhaVar = senha_input.value;

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




                console.log("FORM LOGIN: ", emailVar);
                console.log("FORM SENHA: ", senhaVar);

                fetch("/usuarios/autenticar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        emailServer: emailVar,
                        senhaServer: senhaVar
                    })
                }).then(function (resposta) {
                    console.log("ESTOU NO THEN DO entrar()!")

                    if (resposta.ok) {
                        console.log(resposta);
                        Swal.fire(
                            'Login Realizado',
                            'Bem Vindo a Honoha',
                            'sucess'
                        )

                        setTimeout(function () {
                            window.location = "dashboard.html";
                        }, 2000);



                        

                    } else {

                        console.log("Houve um erro ao tentar realizar o login!");


                        resposta.text().then(texto => {
                            console.error(texto);

                        });
                    }

                }).catch(function (erro) {
                    console.log(erro);
                })

                return false;
            }
        }
    }