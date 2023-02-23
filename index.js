document.addEventListener("DOMContentLoaded", () => {
    // Variavel para guardar usuarios
    let arr = [];
  
    // Evita que os formularios reiniciem a pagina
    const formRegister = document.querySelector(".form-register");
    formRegister.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  
    const formLogin = document.querySelector(".form-login");
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  
    const formProduct = document.querySelector(".form-product");
    formProduct.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  
    // Funcao para cadastrar usuarios
    const cadastrarUsuarios = () => {
      let email = document.querySelector("#registerEmail");
      let name = document.querySelector("#registerName");
      let senha = document.querySelector("#registerPassword");
  
      let user = {
        email: email.value,
        name: name.value,
        senha: senha.value,
      };
      // Validar campos
      let regexName = new RegExp(/^[A-Z][a-z]{3}[a-z]+$/);
      let regexEmail = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
      let regexPassword = new RegExp(/^[0-9]{4}$/);
      if (
        regexName.test(user.name) &&
        regexEmail.test(user.email) &&
        regexPassword.test(user.senha))
       {
        let index = arr.find((item) => item.email === user.email);
        if (index) {
          alert("Email já cadastrado!");
        } else {
          arr.push(user);
          alert("Cadastrado com sucesso!");
        }
  
        email.value = "";
        name.value = "";
        senha.value = "";
      } else {
        if (!regexName.test(user.name)) {
          alert("Nome inválido! Inicial maiuscula seguido de somente letras minusculas sem espaço!");
        } else if (!regexEmail.test(user.email)) {
          alert("Email inválido!");
        } else if (!regexPassword.test(user.senha)) {
          alert("Senha deve ter 4 digitos!");
        }
      }
  
      // Mostra no console os usuarios cadastrados
  
      // for (let i = 0; i < arr.length; i++) {
      //   console.log(arr[i]);
      // }
    };
  
    // Funcao para validar login
    const loginUsuarios = () => {
      let email = document.querySelector("#loginEmail1").value;
      let senha = document.querySelector("#loginPassword").value;
      let user = "Not found!";
  
      arr.filter((item) => {
        if (item.email === email && item.senha === senha) {
          user = item.name;
        }
      });
  
      alert(user);
      return user;
    };
    const addToCar = () => {
      // Pegar produto na pagina inicial
      const name = document.querySelector(".page-header").innerHTML;
      const price = document.querySelector("#product-form-price").innerHTML;
      const quantity = document.querySelector("#input-qty").value;
      const select = document.querySelector(".prod-options");
      const image = document.querySelector("#first-image").src;
      // const colorTextOption = select.options[select.selectedIndex].text;
      const colorValueOption = select.options[select.selectedIndex].value;
  
      // pegar elemento no carrinho de compras
      const nameProduct = document.querySelector(".card-title");
      const priceProduct = document.querySelector(".price-product-cart");
      const quantityProduct = document.querySelector(".quantity-product-cart");
      const colorProduct = document.querySelector(".color-product-cart");
      const imageProduct = document.querySelector("#first-image-cart");
  
      nameProduct.innerHTML = name;
      priceProduct.innerHTML = `R$ ${(
        convertPriceStringToNumber(price) * quantity
      ).toFixed(2)}`;
      quantityProduct.innerHTML = quantity;
      colorProduct.innerHTML = colorValueOption;
      imageProduct.src = image;
    };
    // Converte o preço de string para numero
    const convertPriceStringToNumber = (string) => {
      string = parseFloat(
        string
          .replace(",", ".")
          .split("")
          .filter((item) => !isNaN(item) || item === ".")
          .join("")
      );
      return string;
    };
    // Eventos de clique para login, cadastrar e adicionar o produto pra o carrinho de compras
    let cadastrar = document.querySelector("#cadastrar");
    let login = document.querySelector("#login");
    let addToShoppinCart = document.querySelector("#add-to-shopping-cart");
  
    cadastrar.addEventListener("click", cadastrarUsuarios);
    login.addEventListener("click", loginUsuarios);
    addToShoppinCart.addEventListener("click", addToCar);
  });
  