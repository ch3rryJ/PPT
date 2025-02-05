//Jogo pedra, papel e tesoura
const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
//Solicita que o usuário informe quel ele quer

const escolhaPC = ["pedra", "papel", "tesoura"] [Math.floor(Math.random() * 3)]
//Gera uma escolha aleaória para o computador
//Criamos um array com  as opções e usamos o random para escolher uma de forma aleatória

alert(`Você escolheu ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)
//Monstrando qual foi a nossa escolha e qual foi a escolha do computador

//Compara se a nossa escolha foi igual a do computador
if (escolhaJogador == escolhaPC) {
    alert("Empate")
} else if (escolhaJogador == "pedra" && escolhaPC == "tesoura"){ // criamos a primeira vitória
    alert("Você venceu")
} else if (escolhaJogador == "tesoura" && escolhaPC == "papel"){ // criamos a segunda vitória
    alert("Você venceu")
} else if (escolhaJogador == "papel" && escolhaPC == "pedra"){ // criamos a terceira vitória
    alert("Você venceu")
} else { // criamos a derrota
    alert("Você perdeu")
}
