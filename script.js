var vetor = parseInt(Math.random() * 1001 ) ;

var tentativas = 0;

while (true){

    //RECEBER O VALOR DO PROMPT EM UMA VARIAVEL
    var chute = prompt("Adivinhe o número entre 0 e 1000: ");


    // CONVERTER PARA INT
    var palpiteNumero = parseInt(chute);

   //INCREMENTAR O NUMERO DE TENTATIVAS
   tentativas++;

   //VERIFICAÇÃO    
   if (palpiteNumero === vetor) {
       alert("PARABÉNS \n VOCÊ ACERTOU EM " + tentativas + "!!")
        break;
   }else if(palpiteNumero > vetor){
        alert("TENTE NOVAMENTE. O NÚMERO É MENOR.");
   }else {
        alert("TENTE NOVAMENTE. O NÚMERO É MAIOR.")
   }

}


