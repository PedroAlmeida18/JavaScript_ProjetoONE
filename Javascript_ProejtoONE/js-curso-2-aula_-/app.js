let lista = [];
let numerolimite = 10;
let numero_secreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})

}
function exibirMensagemINICIAL() {
    exibirTextoTela('h1','Jogo do Número Secreto');
    exibirTextoTela('p','Escolha um número entre 1 e 10');

    
}
exibirMensagemINICIAL();


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute==numero_secreto) {
        exibirTextoTela('h1','Você acertou');
        let palavraTentativas= tentativas>1?'tentativas ': 'tentativa' ;
        let mensagemtentativas = `Você descobriu o número secreto 
        com ${tentativas} ${palavraTentativas} !`;
        exibirTextoTela('p',mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute>numero_secreto) {
            exibirTextoTela('p','O número secreto é menor ');
        }
        else{
            exibirTextoTela('p','O número secreto é maior ');
        }
        tentativas++;
        limparCampo();
    }
    
    
}
function gerarNumeroAleatorio() {
    let numero_aletorio = parseInt(Math.random() *numerolimite +1);
    let quantidadeElementoosLista = lista.length;

    if(quantidadeElementoosLista==numerolimite){
        lista=[];
    }
    if(lista.includes(numero_aletorio)){
        return gerarNumeroAleatorio();
    } else {
          lista.push(numero_aletorio);
          console.log(lista);
          return numero_aletorio;
    }
    
}
function limparCampo() {
    chute=document.querySelector('input');
    chute.value='';
    
}
function reiniciarJogo() {
    numero_secreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
   exibirMensagemINICIAL();
   document.getElementById('reiniciar').setAttribute('disabled',true)
    
}
// Exercícios 

