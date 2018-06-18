let tamanho = Number(prompt("Qual tamanho de escada você que desenhar?"));
let material = prompt("Qual o material da escada?");
let escada = [];
let contador = 0;

while(contador <= tamanho){    
    escada[contador] = material.repeat(cpntador + 1) + "\n"; // .repeat() repete o que tiver antes do ponto o numero de vees que for passado no ()
    contador ++;
}

console.log(escada);
