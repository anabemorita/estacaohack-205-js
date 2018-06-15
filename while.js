let andar = 5;
let subindo= false;

while(andar !== 0){
    alert(`espera mais um pouquinho. Andar atual: ${andar}`);
        if (andar === 1 ){
            subindo = true;
        }
        else if(andar === 5){
            subindo = false;
        }
        if(subindo){
            andar ++;
        }
        else{
            andar--;
        }
    //andar = andar -1;
    //andar -= 1;
    //andar--;
}

alert("pode sair que já chegou no térreo");
