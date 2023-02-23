class Produto{
    constructor(preco,quantidade,cor){
        this.preco = preco
        this.quantidade = quantidade
        this.cor = cor
    }
}

class Cadastro{
    constructor(nome,email,password){
        this.nome = nome
        this.email = email
        this.password = password
    }
}

let bancoCadastro = []
let produtos = []






function adicionarNovoCadastro() {

    let novoCadastro = new Cadastro
    novoCadastro.nome = document.getElementById("exampleInputName2").value
    novoCadastro.email = document.getElementById("exampleInputEmail2").value
    novoCadastro.password = document.getElementById("exampleInputPassword2").value
    
    bancoCadastro.push(novoCadastro)

    // console.log(bancoCadastro);
}


function adicionarNovoProduto() {

    let novoProduto= new Produto
    
    novoProduto.preco = document.querySelector("#product-form-price").innerText
    novoProduto.quantidade = document.getElementById("input-qty").value
    novoProduto.cor = document.getElementById("corSelecionada").value
    
    produtos.push(novoProduto)

    retornaCarrinho()

}



function confereNomeUsuario(emailProcurado = document.getElementById("exampleInputEmail1").value,senhaProcurada = document.getElementById("exampleInputPassword1").value) {
    let elementoAchado = bancoCadastro.find(element => element.email == emailProcurado)
    if (elementoAchado == undefined) {
        alert("E-mail não encontrado")
    }else if (emailProcurado == elementoAchado.email){
        if (senhaProcurada == elementoAchado.password) {
            alert(`O nome do usuário com essas credenciais é: ${elementoAchado.nome}`);    
        }else{
            alert("Senha incorreta")
        }  
    }
}


function retornaCarrinho() {

    let card = document.querySelector(".card")
    card.innerHTML = ''
    
    produtos.forEach(element => {
        card.innerHTML += 
        '<div class="card-body">' + 
          '<div class="row">' + 
            '<div class="col">' + 
                '<img id="first-image" src="https://cdnx.jumpseller.com/bootstrap/image/429444/resize/540/675?1614272621" srcset="https://cdnx.jumpseller.com/bootstrap/image/429444/resize/540/675?1614272621   1x, https://cdnx.jumpseller.com/bootstrap/image/429444/resize/1080/1350?1614272621 2x"' + 
                'alt="Wacom Bamboo Tablet" class="img-fluid"' + 
                '/>' + 
            '</div>' + 
            '<div class="col">' + 
                `<h5 class="card-title"></h5>` + 
                '<p class="card-text">' + 
                `Preço: <b>${element.preco}</b>` + 
                '</p>' + 
                '<p class="card-text">' + 
                  `Quantidade: <b>${element.quantidade}</b>` + 
                '</p>' + 
                '<p class="card-text">' + 
                  `Cor: <b>${element.cor}</b>` + 
                '</p></div>' + 
          '</div>' + 
        '</div>'
    });

}

