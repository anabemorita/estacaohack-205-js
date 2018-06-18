let meninos = ["João", "Lucas", "Mateus", "Pedro", "Rodrigo"];
let meninas = ["Carol", "Fernanda", "Gabriela", "Isabela", "Maria"];
let duplas = {};
let contador = 0;
let n = 0;

// alteração lista
while(contador < meninos.length){
    let i = 0;
    while(i < meninas.length) {
        duplas[n] = meninos[i] + " e " + meninas[i];
        i++;
        n++;
    }
    contador++;
}
 console.log(duplas);