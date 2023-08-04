let usuarios = []
let cart = []
const nameCad = document.querySelector("#cadInputName")
const emailCad = document.querySelector("#cadInputEmail")
const passwordCad = document.querySelector("#cadInputPassword")
const submitBtn = document.querySelector("#cadSubmit")
const loginBtn = document.querySelector("#btnLogin")
const emailLogin = document.querySelector("#loginInputEmail")
const passwordLogin = document.querySelector("#loginInputPassword")
const nameCart = document.querySelector("#itemName")
const priceCart = document.querySelector("#product-form-price")
const qtyCart = document.querySelector("#input-qty")
const colorCart = document.querySelector("#select-color")



//1 - Crie uma função que pegue os valores do formulário de cadastro e adicione em um array um objeto para ser acesso posteriormente.

function registerUser(){
    let name = nameCad.value
    let email = emailCad.value
    let password = passwordCad.value
    let findEmail = usuarios.find(user => user.email === email)
    if(findEmail){
        alert("Email já cadastrado! Tente novamente.")
        submitBtn.removeAttribute("data-dismiss", "modal")
        return
    }
    if(name && email && password){
        let newUser = {
            name: name,
            email: email,
            password: password
        }
        usuarios.push(newUser)
        alert("Cadastro realizado com sucesso!")
        submitBtn.setAttribute("data-dismiss", "modal")
        nameCad.value = ""
        emailCad.value = ""
        passwordCad.value = ""
        return
    }else{
        alert ("Cadastro não realizado. Todos os campos devem ser preenchidos!")
        submitBtn.removeAttribute("data-dismiss", "modal")
    }
}

let submit = document.querySelector("#cadSubmit")
submit.addEventListener("click",registerUser)

//2 - Com base no tópico anterior crie uma função que acesse o array criado e com o email e senha passado no formulário de login retorne o nome do usuário cadastrado.

function userAuth(){
    let email = emailLogin.value
    let password = passwordLogin.value
    let findUser = usuarios.find(user => user.email === email)
    if(findUser === undefined){
        alert("Email ou senha incorretos, tente novamente!")
        loginBtn.removeAttribute("data-dismiss", "modal")
        emailLogin.value = ""
        passwordLogin.value = ""
        return
    }
    if(findUser.password !== password){
        alert("Email ou senha incorretos, tente novamente!")
        loginBtn.removeAttribute("data-dismiss", "modal")
        emailLogin.value = ""
        passwordLogin.value = ""
        return
    }
    if(findUser){
        alert("Bem vindo, " + findUser.name + " !")
        loginBtn.setAttribute("data-dismiss", "modal")
        emailLogin.value = ""
        passwordLogin.value = ""
        return
    }

}
let login = document.querySelector("#btnLogin")
login.addEventListener("click",userAuth)

// 3 - Crie uma função que adicione o item da pagina a lista de carrinho.
//     Obs.: Você deve criar um array para armazenar os dados do produto e logo em seguida mostrar o array na lista do carrinho.

function addItem(){
    let itemName = nameCart.textContent
    let itemPrice = priceCart.textContent
    let itemQuantity = Number(qtyCart.value)
    let itemColor = colorCart.value
    let findItem = cart.find(item => item.itemName === itemName && item.itemColor === itemColor);
    if (findItem){
        findItem.itemQuantity += itemQuantity;
    } else {
        let item = {
            itemName: itemName,
            itemPrice: itemPrice,
            itemQuantity: itemQuantity,
            itemColor: itemColor
            }
            cart.push(item)
    }
    console.log(cart)
}

let addCart = document.querySelector("#addCart")
addCart.addEventListener("click",addItem)