let usuarios = []

function formCadastro() {

    let name = document.querySelector("#exampleInputName").value
    let email = document.querySelector("#exampleInputEmail").value
    let password = document.querySelector("#exampleInputPassword").value

    let user = {
        name,
        email,
        password
    }

    usuarios.push(user)
    console.log(usuarios);
}