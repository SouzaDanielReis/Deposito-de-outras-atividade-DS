var dia_da_semana = 8;
var mensagem;
    switch(dia_da_semana){
        case 1:
    mensagem = "Domingo"
break; 
        case 2:
    mensagem = "Segunda-Feira"
break;
        case 3:
    mensagem = "Terça-Feira"
break; 
        case 4:
    mensagem = "Quarta-Feira"
break; 
        case 5:
    mensagem = "Quinta-Feira"
break; 
        case 6:
    mensagem = "Sexta-Feira"
break; 
        case 7:
    mensagem = "Sábado"
break;
default:
        mensagem = "Entre dias de 1 a 7, não há concordancia entre o dia da semana que você colocou";
 }
            console.log(mensagem);