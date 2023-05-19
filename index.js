let usuarios = [];
let carrinho = [];

function formLogin() {
  let email = document.querySelector("#loginInputEmail").value;
  let password = document.querySelector("#loginInputPassword").value;
  console.log(email);
  console.log(password);
  let nome = "";
  for (let i = 0; i < usuarios.length; i++) {
    usuario = usuarios[i];
    if (usuario.password === password && usuario.email === email) {
      nome = usuario.name;
    }
  }
  console.log(nome);
}

function formCadastro() {
  let name = document.querySelector("#cadInputName").value;
  let email = document.querySelector("#cadInputEmail").value;
  let password = document.querySelector("#cadInputPassword").value;

  let user = {
    name,
    email,
    password,
  };

  usuarios.push(user);
  console.log(usuarios);
}

function addProduto() {
  let quantidade = document.querySelector("#input-qty").value;
  let cor = document.querySelector("#select-color").value;
  let preco = document.querySelector("#product-form-price").textContent;

  let produto = {
    quantidade,
    cor,
    preco,
  };

  carrinho.push(produto);
  for (let i = 0; i < carrinho.length; i++) {
    console.log(quantidade);
    console.log(cor);
    console.log(preco);
  }
}
