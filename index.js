let usuarios = []
let carrinho = []
let btnCadastro = document.querySelector("#btnCadastro") // Botão do Cadastro
let btnLogin = document.querySelector("#btnLogin") // Botão de login
let btnAddCarrinho = document.querySelector("#btnAddCarrinho") // Botão para adicionar produto ao carrinho

// Cadastro de usuário
function formCadastro() {

    let name = document.querySelector("#cadInputName").value
    let email = document.querySelector("#cadInputEmail").value
    let password = document.querySelector("#cadInputPassword").value

    if (!validaName(name) || !validaEmail(email) || !validaPassword(password)) {
        alert("Preencha todos os campos")
        return
    }

    let user = {
        name,
        email,
        password
    }

    usuarios.push(user)
    console.log(usuarios);

    alert("Cadastro realizado com sucesso")
}

// Validação do Email 
function validaEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

// Validação da Password
function validaPassword(password) {
    let passwordPattern = /[a-zA-z0-9]{4}/
    return passwordPattern.test(password)
}

// Validação do Name
function validaName(name) {
    let namePattern = /[a-zA-z]{3}/
    return namePattern.test(name)
}

// Chamando o Cadastro
btnCadastro.addEventListener('click', () => {
    formCadastro()
})

// Realizando Login
btnLogin.addEventListener('click', () => {
    // Dados do formulário login
    let loginEmail = document.querySelector("#loginEmail").value
    let loginPassword = document.querySelector("#loginPassword").value

    if (!validaEmail(loginEmail) || !validaPassword(loginPassword)) {
        alert("Preencha todos os campos")
        return
    }

    // Procurando usuario no array
    let found = usuarios.find((usuario) => usuario.email == loginEmail && usuario.password == loginPassword)

    // Usuário não encontrado
    if (found == undefined) {
        alert("Email ou senha incorreto")
        return
    }

    // Usuário encontrado
    alert(`Seja bem vindo ${found.name}`)
})

// Adicionando ao carrinho
btnAddCarrinho.addEventListener('click', () => {
    // Quantidade e cor do produto
    let selectColor = document.querySelector("#select-color").value
    let inputQty = document.querySelector("#input-qty").value

    let produto = {
        name: "Wacom Bamboo Tablet",
        preco: 150,
        qnt: inputQty,
        color: selectColor,
    }

    carrinho.push(produto)

    alert(`Produto ${produto.name} adicionado ao carrinho`)
    atualizaCarrinho()
})

// Atualizando carrinho
function atualizaCarrinho() {
    let divCarrinho = document.querySelector("#divCarrinho")

    divCarrinho.textContent = ""

    carrinho.map(produto => {
        divCarrinho.innerHTML += `
      <div class="card" id="divCarrinho">
          <div class="card-body">
              <div class="row">
                  <div class="col">
                      <h5 class="card-title">${produto.name}</h5>
                      <p class="card-text">
                          Preço: <b>${produto.preco}</b>
                      </p>
                      <p class="card-text">
                          Quantidade: <b>${produto.qnt}</b>
                      </p>
                      <p class="card-text">
                          Cor: <b>${produto.color}</b>
                      </p></div>
                  </div>
              </div>
          </div>
      </div>`
    })

    // Atualizando subTotal
    let subTotal = document.querySelector("#subTotal")
    let subtot = carrinho.reduce((account, itemAtual) => {
        return account + itemAtual.preco * itemAtual.qnt
    }, 0)

    subTotal.innerHTML = `SubTotal: ${subtot}`

}