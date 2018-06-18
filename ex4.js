let meninos = ["João", "Lucas", "Mateus", "Pedro", "Rodrigo"];
let meninas = ["Carol", "Fernanda", "Gabriela", "Isabela", "Maria"];
let duplas = [];
let contador = 0;
let n = 0;
let i;

// alteração lista
while(contador < meninos.length){
    i = 0;
    while(i < meninas.length) {
        duplas[n] = meninos[contador] + " e " + meninas[i];
        i++;
        n++;
    }
    contador++;
}
 console.log(duplas);