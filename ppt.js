//Jogo pedra, papel e tesoura
//variáveis para armazenar os pontos do jogador e pc
let placarJogador = 0
let placarPC = 0

//variável para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

//laço de repetoção que fara as rodadas
for (let i = 0; i < rodadas; i++) {

    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
    //Solicita que o usuário informe quel ele quer

    const escolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]
    //Gera uma escolha aleaória para o computador
    //Criamos um array com  as opções e usamos o random para escolher uma de forma aleatória

    alert(`Você escolheu ${escolhaJogador}`)
    alert(`O computador escolheu ${escolhaPC}`)
    //Monstrando qual foi a nossa escolha e qual foi a escolha do computador

    //Compara se a nossa escolha foi igual a do computador
    if (escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") { // criamos a primeira vitória
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") { // criamos a segunda vitória
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") { // criamos a terceira vitória
        alert("Você venceu")
        placarJogador++
    } else { // criamos a derrota
        alert("Você perdeu")
        placarPC++
    }
    //exibe placar no console
    console.log("Placar Jogador: ", placarJogador)
    console.log("Placar Computador: ", placarPC)
}
//placar final
alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x ${placarPC} Computador`)
