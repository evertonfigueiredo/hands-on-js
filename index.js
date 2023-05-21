let usuarios = []
let carrinho = []

function formCadastro() {
    let nome = document.querySelector("#cadInputName").value
    let email = document.querySelector("#cadInputEmail").value
    let password = document.querySelector("#cadInputPassword").value
    validaForm(nome, email, password)
}

function validaForm(nome, email, password) {
    if (nome == "") {
        alert("Por favor, preencha o seu nome!!")
    }
    if (email == "") {
        alert("Por favor, preencha o seu e-mail!!")
    }
    if (password == "") {
        alert("Por favor, preencha a sua senha!!")
    }
    if (nome.length > 3 && email.length > 3 && password.length > 3) {
        let user = {
            nome,
            email,
            password
        }

        //pq não limpa os meus dados?
        nome = ''
        email = ''
        quantidade = ''

        alert("Usuário cadastrado com sucesso")
        usuarios.push(user)
        console.log(usuarios);
    }
}

function logar() {
    let email = document.getElementById('loginInputEmail').value
    let password = document.getElementById('loginInputPassword').value

    let usuario = usuarios.find(user => user.email === email && user.password == password)

    if (usuario) {
        //pq não limpa os meus dados?
        email = ''
        password = ''

        let x = (usuarios.indexOf(usuario))
        alert(`Usuário cadastro com sucesso. Seu nome é: ${usuarios[x].nome}`);

    } else {
        alert("Usuário ou senha incorretos");
    }
}

function adicionarProdutos() {
    let titulo = document.querySelector("#titulo").textContent
    let preco = document.querySelector("#product-form-price").textContent
    let quantidade = document.querySelector("#input-qty").value
    let cor = document.querySelector("#select-color").value

    let produto = {
        titulo,
        preco,
        quantidade,
        cor
    }
    carrinho.push(produto)
    console.log(carrinho);
    exibirCarrinho()
}


function exibirCarrinho() {
    let cardCarrinho = document.querySelector("#cardConteudo")
    cardCarrinho.textContent = ""

    carrinho.map(produto => {
        cardCarrinho.innerHTML += `<div class="card mb-4">
                                        <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="card-title">${produto.titulo}</h5>
                                                <p class="card-text">
                                                Preço: <b>${produto.preco}</b>
                                                </p>
                                                <p class="card-text">
                                                Quantidade: <b>${produto.quantidade}</b>
                                                </p>
                                                <p class="card-text">
                                                Cor: <b>${produto.cor}</b>
                                                </p></div>
                                        </div>
                                        </div>
                                    </div>`;
    })
}