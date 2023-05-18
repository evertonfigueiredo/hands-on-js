let usuarios = []

function formCadastro() {

    let name = document.querySelector("#exampleInputName").value
    let email = document.querySelector("#exampleInputEmail").value
    let password = document.querySelector("#exampleInputPassword").value

    let user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    name.value = ''
    email.value = ''
    password.value = ''

    usuarios.push(user)
    console.log(usuarios);
}

