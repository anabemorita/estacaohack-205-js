let numero = Math.random(); //função math.random gera um valor aleatório entre 0 e 1

while(numero > 0.5){ //enquanto o número for maior que .5 gera um novo valor
    numero = Math.random();
}

numero *= 100; //multiplica o numero por 100 transformando o valor gerado em número entre 0 e 50
numero = parseInt(numero);

let chute = Number(prompt("Digite seu palpite de número entre 0 e 50"));

while(chute === NaN){ //enquanto o chute for inválido pede um novo valor de entrada ao usuário
    chute = Number(prompt("Valor inválido, digite um número entre 0 e 50"));
}


while(numero !== chute){
    if (numero < chute){
        chute = Number(prompt("O número é menor. Digite um novo palpite"));
    }
    else{
        chute = Number(prompt("O número é maior. Digite um novo palpite"));
    }

}

alert("ACERTOU");