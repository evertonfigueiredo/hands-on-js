class User {

        constructor(){
            this.usuarios = []
        }

        formCadastro() {

            let name = document.querySelector("#cadInputName")
            let email = document.querySelector("#cadInputEmail")
            let password = document.querySelector("#cadInputPassword")

            let user = {
                name: name.value,
                email: email.value,
                password: password.value
            }
            let produtoRepetido = this.usuarios.find(item => item.email === email.value)

            if (produtoRepetido != undefined) {
                alert('Email Já Cadastrado')
            } else if (name.value != '' && email.value != '' && password.value != '') {
                this.usuarios.push(user)
                $('#ModalCadastro').modal('hide');
            } else {
                alert('Preencha todos os campos')
            }

            console.log(this.usuarios);
            name.value = ''
            email.value = ''
            password.value = ''         
        }

        formLogin() { 

            let email = document.querySelector("#loginInputEmail")
            let password = document.querySelector("#loginInputPassword")

            this.usuarios.map(usuario =>{

                if (usuario.email === email.value && usuario.password === password.value) {
                    alert('Login efetuado com sucesso')
                    $('#ModalLogin').modal('hide');
                    console.log(usuario.name);
                } else {
                    alert('Email ou senha incorretos')
                }
                
            })

           
        }
}

let meuUsuario = new User()

class Carrinho {

        constructor(){
            this.produtos = []
}

        adicionarProduto(){

            let qty = document.querySelector("#input-qty")
            let color = document.querySelector('#select-color')
        
            let produto = {
                qty: qty.value,
                color: color.value,
                preco: qty.value * 150
            }

            this.produtos.push(produto)
            console.log(this.produtos);
            $('#ModalCarrinho').modal('show');

            this.produtos.map(produto =>{
                
                let mostraPreco = document.querySelector("#precoModal")
                let mostraQty = document.querySelector("#qtyModal")
                let mostraColor = document.querySelector("#corModal")

                mostraPreco.textContent = 'R$ ' + produto.preco
                mostraQty.textContent = produto.qty
                mostraColor.textContent = produto.color
               
            }
        )     
    }

        
}


let meuCarrinho = new Carrinho()