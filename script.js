var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
var tentativas = 3;
var acertou = false;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  var elementoResultado = document.getElementById("resultado");
  if (chute < 0 || chute > 10 || isNaN(chute)) {
    elementoResultado.innerHTML = "Digite numeros de 0 a 10";
    console.log("Digite numeros de 0 a 10!");
    return;
  }

  if (tentativas >0) {
    

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você Acertou!";
      console.log("Acertou!");
      tentativas = 0;
      acertou = true;
    } else {
      elementoResultado.innerHTML = "Você errou!";

      if (chute < numeroSecreto) {
        elementoResultado.innerHTML =
          " Voce errou, numero é maior! <br> Você possui " +
          (tentativas-1) +
          " tentativas restantes";
      } else {
        elementoResultado.innerHTML =
          "Voce errou, o numero é menor!<br> Você possui " +
          (tentativas-1) +
          " tentativas restantes";
      }
    }
    tentativas--;
    if(tentativas == 0){
      document.querySelector("#valor").setAttribute("disabled", "disabled");
      document.getElementById("bouton").innerText="Ver Resposta";
    }
    
  } else {
    if (!acertou) {
      document.getElementById("bouton").setAttribute("disabled", "disabled");
      elementoResultado.innerHTML =
        "<br> <br>" +
        "<br> O numero era > " +
        numeroSecreto;
    }
  }
}
