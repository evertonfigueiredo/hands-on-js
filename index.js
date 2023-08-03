let usuarios = []

//let cart = [] -> vai receber os objetos da função addItem()

//1 - Crie uma função que pegue os valores do formulário de cadastro e adicione em um array um objeto para ser acesso posteriormente.

function registerUser(){
    let name = document.querySelector("#cadInputName").value
    let email = document.querySelector("#cadInputEmail").value
    let password = document.querySelector("#cadInputPassword").value
    let newUser = {
        name: name,
        email: email,
        password: password
    }
    usuarios.push(newUser)
}

let submit = document.querySelector("#cadSubmit")
submit.addEventListener("click",registerUser)

//2 - Com base no tópico anterior crie uma função que acesse o array criado e com o email e senha passado no formulário de login retorne o nome do usuário cadastrado.

function userAuth(){
    let email = document.querySelector("#loginInputEmail").value
    let password = document.querySelector("#loginInputPassword").value
    let findEmail = usuarios.find(user => user.email === email)
    let findPassword = usuarios.find(user => user.password === password)
    if(findEmail && findPassword){
        console.log(findEmail.name)
    }
    if(!findEmail || !findPassword){
        console.log("Usuário não cadastrado!")
    }
}
let login = document.querySelector("#btnLogin")
login.addEventListener("click",userAuth)

// 3 - Crie uma função que adicione o item da pagina a lista de carrinho.
//     Obs.: Você deve criar um array para armazenar os dados do produto e logo em seguida mostrar o array na lista do carrinho.

function addItem(){
    let items = []
    let itemName = document.querySelector("#itemName").textContent
    let itemPrice = document.querySelector("#product-form-price").textContent
    let itemQuantity = document.querySelector("#input-qty").value
    let itemColor = document.querySelector("#select-color").value

    // Cria um objeto com os produtos, insere tudo que for selecionado no objeto e depois da push na array

    // items.push(itemName, itemPrice, itemQuantity, itemColor)
    // document.querySelector(".card-title").textContent = itemName
    // document.querySelector("#itemQuantity").textContent = Number(itemQuantity)
    // document.querySelector("#itemColor").textContent.toUpperCase = itemColor
}

let addCart = document.querySelector("#addCart")
addCart.addEventListener("click",addItem)