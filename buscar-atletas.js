var botaoAdicionar = document.querySelector("#buscar-personagem");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-personagem.herokuapp.com/personagem");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var patletas = JSON.parse(resposta);

            atletas.forEach(function(personagem) {
                adicionaPersonagemNaTabel(personagem);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
