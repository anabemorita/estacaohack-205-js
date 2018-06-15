let nome = prompt("Quem é você? Digite seu nome");

//alert("Seja bem vindo, " + nome);
alert(`Seja bem vindo, ${nome}`); //template string

console.log(`O usuário ${nome} acessou a página`);

let nota = prompt("qual foi a nota do aluno?");

nota = Number(nota);

if(isNaN(nota)){
    alert("ERRO: VALOR INVÁLIDO");
}

else if (nota < 5){
    alert("Reprovado");
}
    else if (nota >= 7){
        alert("Aprovado");
    }
        else{
            alert("Exame");
        }