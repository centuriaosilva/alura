var titulo = document.querySelector(".titulo");
titulo.textContent = "Guilda suporte";

var personagens = document.querySelectorAll(".personagem");

for (var i = 0; i < personagem.length; i++) {

    var personagem = personagem[i];

    var tdpoder = personagem.querySelector(".info-poder");
    var poder = tdPeso.textContent;

    var tdelemento = personagem.querySelector(".info-elemento");
    var elemento = tdAltura.textContent;

    var tdstamina = personagem.querySelector(".info-stamina");

    var pesoEhValido = validaPoder(poder);
    var elementoEhValida = validaElemento(elemento);

    if (!pesoEhValido) {
        console.log("Poder inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Poder inválido";
        personagem.classList.add("personagem-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        personagem.classList.add("personagem-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
