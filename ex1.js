let cliente = {};

cliente.idade = Number(prompt("Qual a sua idade?"));
cliente.valor = Number(prompt ("Qual o valor do empréstimo?"));
cliente.salario = Number(prompt("Qual o seu salario?"));

let emprestar = false;

if(cliente.idade > 21 && cliente.idade < 56){
    emprestar = true;
}

if(cliente.valor >= 1000){
    emprestar = true;
}
