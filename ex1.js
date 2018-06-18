let cliente = {};

cliente.idade = Number(prompt("Qual a sua idade?"));
cliente.valor = Number(prompt ("Qual o valor do empréstimo?"));
cliente.salario = Number(prompt("Qual o seu salario?"));

let emprestar = false;

/*
//Modo um: três blocos de if separados para verificar cada condição separadamente 
//e um if final para ver se as 3 são satisfeitas 
if(cliente.idade > 21 && cliente.idade < 56){
    emprestar = true;
}

if(cliente.valor >= 1000){
    emprestar = true;
} else{
    emprestar = false;
  }

if(cliente.valor < (cliente.salario * 15)){
    emprestar = true;
} else{
    emprestar = false;
  }

if(emprestar){
    alert("ACEITO");
} else{
    alert("NÃO ACEITO");
  }
*/

/*
//Modo dois: if encadeado
//se alguma condição não for satisfeita emprestar é falso
if(cliente.idade > 21 && cliente.idade < 56){
    emprestar = true;
    if(cliente.valor >= 1000){
        emprestar = true;
        if(cliente.valor < (cliente.salario * 15)){
            emprestar = true;
            alert("ACEITO");//só emite o alert se as três condições forem verdadeiras
        }
        else{
            emprestar = false;
        }
    } else{
        emprestar = false;s
      }    
}s
if(!emprestar){
    alert("NÃO ACEITO");    
}
*/

//modo simplificado
//esse bloco de if verifica se todas as três condições de empréstimo são satisfeitas ao mesmo tempo
if((cliente.idade > 21 && cliente.idade < 55) && cliente.valor >= 1000 && (cliente.valor < (cliente.salario * 15))){
    emprestar = true;
}

//EXTRA
if(emprestar){
    //cria a variavel prestacao e recebe valor já convertido para numero  
    let parcelas = Number(prompt("Em quantas prestações pretende pagar?"));
    let montante;

    if(prestacao > 2 && prestacao < 21){
        montante = cliente.valor * Math.pow(1 + 0.08, prestacao);
    }

    let prestacao = montante / parcelas;
    alert("ACEITO");
    alert(`O valor total do empréstimo é de R$${montante} reais, a serem pagos em ${parcelas} parcelas de R$${prestacao}`);
}
else{
    alert("NÃO ACEITO");
}