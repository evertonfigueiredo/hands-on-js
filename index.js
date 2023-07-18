const usuarios = []
const carrinho = []

class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome,
        this.email = email,
        this.senha = senha
    }
}

class Item {
    constructor(nome, preco, qtd, cor) {
        this.nome = nome,
        this.preco = preco,
        this.qtd = quantidade,
        this.cor = cor
    }
}

function cadastrarUsuario() {
    let nome = document.querySelector("#cadInputName").value;
    let email = document.querySelector("#cadInputEmail").value;
    let senha = document.querySelector("#cadInputPassword").value;
    
    if(!nome || !email || !senha) {
        alert('Você deixou um campo do formulário em branco! Cheque o preenchimento e tente novamente.')
    } else {
        let usuario = new Usuario(nome, email, senha);
        usuarios.push(usuario);
        alert('Cadastrado com sucesso! Agora você já pode fazer login na nossa plataforma.')
    }
}

function consultarUsuario() {
    let email = document.querySelector("#loginInputEmail").value;
    let senha = document.querySelector("#loginInputPassword").value;
    let validador = usuarios.find(usuario => usuario.email === email).email + usuarios.find(usuario => usuario.email === email).senha;

    if(!email || !senha) {
        alert('Você deixou um campo do formulário em branco! Cheque o preenchimento e tente novamente.');
    } else {
        let concat = email + senha;
        if(validador === concat) {
            let nome = usuarios.find(usuario => usuario.email === email).nome;
            alert(`Bem-vindo, ${nome}! Agora você está logado.`);
        } else {
            alert(`Não conseguimos validar o seu cadastro, tente novamente.`);
        }
    }
}

const buttons = document.querySelectorAll('button')
let botaoCadastro
let botaoLogin
let botaoCarrinho

buttons.forEach((button) => {
    if(button.innerText === 'Cadastro') {
        botaoCadastro = button;
    } else if(button.innerText === 'Login') {
        botaoLogin = button;
    } else if(button.innerText === 'Adicionar ao Carrinho') {
        botaoCarrinho = button;
    }
})

botaoCadastro.addEventListener('click', cadastrarUsuario);
botaoLogin.addEventListener('click', consultarUsuario);