let usuario = {};
let dataDeNascimento = {};
let idade = 0;

//recebe valores das chaves de usuario
usuario.nome = prompt("Qual o seu nome?");
usuario.login = prompt("Qual o seu login?");
usuario.senha = prompt("Qual a sua senha?");
usuario.dataDeNascimento = prompt("Qual a sua data de nascimento? Formato DD/MM/AAAA");
usuario.premium = confirm("É usuário premium?");

// .split divide o texto em partes separadas pelo valor indicado entre parenteses e coloca num vetor
//  cada indice do vetor indica uma parte da data
dataDeNascimento.dia = Number(usuario.dataDeNascimento.split("/")[0]);
dataDeNascimento.mes = Number(usuario.dataDeNascimento.split("/")[1]);
dataDeNascimento.ano = Number(usuario.dataDeNascimento.split("/")[2]);

idade = 2018 - dataDeNascimento.ano;

// cálculo para verificar quantos anos o usuario terá no dia do hexa
// data da final da copa(hexa) 15/07/2018
if(dataDeNascimento.mes > 7){
    idade--;
}
if(dataDeNascimento.mes === 7 && dataDeNascimento.dia > 15){
    idade--;
}

console.log(usuario);
console.log(`Você terá ${idade} anos no dia do Hexa`);