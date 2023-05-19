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

// 3

let produtos = []

function adicionarProdutos() {

    let price = document.querySelector("#product-form-price").value
    let quantity = document.querySelector("#input-qty").value
    let color = document.querySelector("#select-color").value

    let produto = {
        price,
        quantity,
        color
    }

    produtos.push(produto)
    console.log(produtos);
}