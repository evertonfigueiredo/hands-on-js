let usuarios = [];
let produtos = [];

let btnCadastro = document.querySelector("#btn-cadastro").addEventListener("click", adicionarUsuario)
let btnLogin = document.querySelector("#btn-login").addEventListener("click", validaUsuario)
let btnCarrinho = document.querySelector("#btn-carrinho").addEventListener("click", adicionarProduto)


function adicionarUsuario() {
    let user = {
        name: document.querySelector("#cadInputName").value,
        email: document.querySelector("#cadInputEmail").value,
        password: document.querySelector("#cadInputPassword").value
    }
    // console.log(user)
    usuarios.push(user)
    alert("Usuário adicionado com sucesso")
    console.log(usuarios);
}

function validaUsuario(){

    let email = document.querySelector("#loginInputEmail").value;
    let password= document.querySelector("#loginInputPassword").value;
    let checkUser = usuarios.find(usuario => usuario.email==email);
    console.log(checkUser)
    let result=false;
    if(!checkUser)
    {
        document.querySelector("#return-failed-login").innerHTML = "<p>Usuário não cadastrado.</p>"
    }else if(checkUser){
        result = checkUser.password == password
        let name = checkUser.name;
        if(result)
        {
            $("#ModalLogin").modal('hide');
            let el = document.querySelector("#header-saudacao");
            el.setAttribute("class", "saudacao")
            let text = "Olá, "+name;
            let elemento= "<p>"+text+"</p>";
            el.innerHTML= elemento
        }else{
            document.querySelector("#return-failed-login").innerHTML = "<p>Senha incorreta.</p>"
        }
        console.log(result);
    }else {
        alert("Ocorreu um erro, tente novamente mais tarde")
    }
}

function adicionarProduto() {
    $("#ModalCarrinho").modal('show');

    let produto = {
        quantity: document.querySelector("#input-qty").value,
        color: document.querySelector("#select-color").value,
    }
    console.log(produto)
    produtos.push(produto)
    console.log(produtos);
}


