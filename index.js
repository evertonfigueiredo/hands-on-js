let usuarios = []

function formCadastro() {

    let name = document.querySelector("#cadInputName").value
    let email = document.querySelector("#cadInputEmail").value
    let password = document.querySelector("#cadInputPassword").value

    let user = {
        name,
        email,
        password
    }

    name.value = ''
    email.value = ''
    password.value = ''

    usuarios.push(user)
    console.log(usuarios);

}

// 2

function validarCadastro() {
    let email = document.querySelector("#loginInputEmail").value
    let password = document.querySelector("#loginInputPassword").value
    let name = ''

    for (let i = 0; i < usuarios.length; i++) {
        usuario = usuarios[i]
        if (usuario.password === password && usuario.email === email) {
            name = usuario.name
        }
    }
    console.log(name)
}

validarCadastro()


// 
function adicionarItem() {

}