let numero_secreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
exibirTextoTela('h1','Jogo do Número Secreto');
exibirTextoTela('p','Escolha um número entre 1 e 10');

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
    return parseInt(Math.random() *10+1);
    
}
function limparCampo() {
    chute=document.querySelector('input');
    chute.value='';
    
}
