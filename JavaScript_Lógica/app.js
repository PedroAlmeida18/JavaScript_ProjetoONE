alert("Boas vindas ao jogo do número secreto");
let numeroSecreto;
let limite = 100
numeroSecreto = parseInt(Math.random()*limite +1)
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


// Para comentar 
while(chute != numeroSecreto){
   chute =  prompt('Escolha um número entre 1 e '+ limite);
  
    if (chute ==  numeroSecreto){
        break;
    }
  
    else {
        if(chute> numeroSecreto){
            alert ( 'O número secreto é menor que o '+ chute);
        }
        else{
            alert('o número secreto é maior que o '+ chute) ;
        }
     
        tentativas++;
        
    }
   
   

}
let palavraTentativa = tentativas>1 ? 'tentativas' : 'tentativa'
alert (`Isso ai Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// Exercicios 
console.log("BOAS VINDAS ");
