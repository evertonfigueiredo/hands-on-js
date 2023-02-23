const usuarios = [];

function cadastrarUsuario() {
  const nome = document.getElementById("exampleInputName").value;
  const email = document.getElementById("exampleInputEmail").value;
  const senha = document.getElementById("exampleInputPassword").value;

  const usuario = { nome, email, senha };
  usuarios.push(usuario);
  alert("Usuário Cadastrado");
  console.log(usuarios);

  // Limpar os campos do formulário
  document.getElementById("exampleInputName").value = "";
  document.getElementById("exampleInputEmail").value = "";
  document.getElementById("exampleInputPassword").value = "";
}

function buscarUsuario(email, senha) {
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);
  return usuario ? usuario.nome : null;
}

function fazerLogin() {
  const email = document.getElementById("exampleInputEmail1").value;
  const senha = document.getElementById("exampleInputPassword1").value;

  const nomeUsuario = buscarUsuario(email, senha);

  if (nomeUsuario) {
    alert(`Bem-vindo(a), ${nomeUsuario}!`);
  } else {
    alert("E-mail ou senha incorretos.");
  }
}

function adcionarProduto() {
  event.preventDefault(); // evita que a página seja atualizada
  const nome = document.getElementById("nomeProduto").textContent;
  const quantidade = document.getElementById("input-qty").value;

  const preco =
    parseFloat(document.getElementById("product-form-price").textContent) *
    quantidade;

  const cor = document.getElementById("cor").value;

  const elemento = document.getElementById("info");
  elemento.style.display = "block"; //   Aqui é feito uma alteração no tipo do display, para mostrar as informações

  document.getElementById("nomeProduto1").textContent = nome;
  document.getElementById("precoProduto").textContent = "R$" + preco.toFixed(2);
  document.getElementById("quantidadeProduto").textContent = quantidade;
  document.getElementById("corProduto").textContent = cor;

  document.getElementById("infoCarrinhoVazio").textContent = ""; // tira o texto exibido de quando o carrinho está vazio

  const imagem = document.getElementById("first-image1");
  imagem.src = "https://m.media-amazon.com/images/I/51CJqwLI3ES._AC_SX522_.jpg"; // adiciona a imagem do tablet

  abrirModal(); //chama a função que exibe o carrinho;
}

function abrirModal() {
  const meuModal = document.getElementById("ModalCarrinho");
  const modal = new bootstrap.Modal(meuModal);
  modal.show(); // exibe o modal do carrinho.
}
