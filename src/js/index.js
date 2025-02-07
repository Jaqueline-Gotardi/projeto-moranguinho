/*
    OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartao da lista:


    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar. */
    const btnAvancar = document.getElementById("btn-avancar");
    const btnVoltar = document.getElementById("btn-voltar");
    const cartoes = document.querySelectorAll(".cartao");
    let cartaoAtual = 0;

    //comandos da carta virada
    //forEach --> "para cada" (para cada cartao)
    cartoes.forEach(cartao => {
        cartao.addEventListener("click", function() {
            const cartaVirada = cartao.querySelector(".carta-virada");

            //virar o cartao
            cartao.classList.toggle("virar");

            //mostrar o fundo da carta
            cartaVirada.classList.toggle("mostrar-fundo-carta");

            const descricao = cartao.querySelector("descricao");
            descricao.classList.toggle("esconder");
        });
    });

    /*- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.*/
    btnAvancar.addEventListener("click", function () {
    if(cartaoAtual === cartoes.length - 1) return;

    /*- passo 3 - buscar o cartão que está selecionado e esconder.*/

    esconderCartaoSelecionado();

    /*- passo 4 - fazer aparecer o próximo cartão da lista.*/
    cartaoAtual++; //incrementa
    mostrarCartao(cartaoAtual);
    });

    /*OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista:
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar. */
    //const btnVoltar = document.getElementById("btn-voltar");

    /*- passo 2 - dar um jeito de identificar o clique do usuário na seta voltar.*/

    btnVoltar.addEventListener("click", function () {
        if(cartaoAtual === 0) return;
    
    /*- passo 3 - buscar o cartão que está selecionado e esconder*/

    esconderCartaoSelecionado();

    /*- passo 4 - fazer aparecer o cartão anterior da lista.*/
    cartaoAtual--; //-- para voltar as cartas
    mostrarCartao(cartaoAtual);
    });

    function mostrarCartao(cartaoAtual) {
        cartoes[cartaoAtual].classList.add("selecionado");
    }

    function esconderCartaoSelecionado() {
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");
    }