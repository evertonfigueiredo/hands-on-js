
const usuarios = [];
const cart = [];

//1 - Crie uma função que pegue os valores do formulário de cadastro e adicione em um array um objeto para ser acesso posteriormente.

function registerUser(){
    const nameCad = document.querySelector("#cadInputName")
    const emailCad = document.querySelector("#cadInputEmail")
    const passwordCad = document.querySelector("#cadInputPassword")
    const submitBtn = document.querySelector("#cadSubmit")
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
    const loginBtn = document.querySelector("#btnLogin")
    const emailLogin = document.querySelector("#loginInputEmail")
    const passwordLogin = document.querySelector("#loginInputPassword")
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
    const nameCart = document.querySelector("#itemName")
    const priceCart = document.querySelector("#product-form-price")
    const qtyCart = document.querySelector("#input-qty")
    const colorCart = document.querySelector("#select-color")
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
}

let addCart = document.querySelector("#addCart")
addCart.addEventListener("click",addItem)

function showCartContent(){
        const cartContent = document.querySelector("#cart-content")
        cartContent.innerHTML = '';
        cart.forEach((item) => {
            const card = document.createElement('div');
            card.classList.add('card-body');

            const row = document.createElement('div');
            row.classList.add('row', 'row-cart');

            const col = document.createElement('div');
            col.classList.add('col');

            const itemName = document.createElement('h5');
            itemName.classList.add('card-title');
            itemName.textContent = item.itemName

            const itemPriceText = document.createElement('p')
            itemPriceText.classList.add('card-text');
            itemPriceText.textContent = 'Preço: '

            const itemPrice = document.createElement('span')
            itemPrice.textContent = item.itemPrice

            const itemQtyText = document.createElement('p')
            itemQtyText.classList.add('card-text');
            itemQtyText.textContent = 'Quantidade: '

            const itemQty = document.createElement('span')
            itemQty.textContent = item.itemQuantity

            const itemColorText = document.createElement('p')
            itemColorText.classList.add('card-text');
            itemColorText.textContent = 'Cor: '

            const itemColor = document.createElement('span')
            itemColor.textContent = item.itemColor

            row.appendChild(itemName)
            row.appendChild(itemPriceText)
            itemPriceText.appendChild(itemPrice)
            row.appendChild(itemQtyText)
            itemQtyText.appendChild(itemQty)
            row.appendChild(itemColorText)
            itemColorText.appendChild(itemColor)

            card.appendChild(row)
            cartContent.appendChild(card);        
        })
}

let showCart = document.querySelector("#show-cart")
showCart.addEventListener("click", showCartContent)