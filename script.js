
function horaAtual(){

    var display = document.querySelector('.display')
    
    var agora = new Date()
    
    var horario = horaCerta(agora.getHours()) + ":" + horaCerta(agora.getMinutes()) + ":" 
    + horaCerta(agora.getSeconds())
    
    display.textContent = horario

    function horaCerta(num){
        if(num < 10){
            num = "0" + num
        }
        return num
    }
}

horaAtual()
setInterval(horaAtual, 1000)

const marcadoresContainer = document.querySelector('.marcadores');

for(let i = 0; i < 60; i++){
    const marcador = document.createElement('div');
    marcador.classList.add('marcador')

    const angulo = i * 6;
    marcador.style.transform = `rotate(${angulo}deg) translateY(-295px)`;

    if (i % 5 === 0) {
        marcador.style.height = "20px";
        marcador.style.backgroundColor = "#fff";
        marcador.style.width = '3px'
    }
    marcadoresContainer.appendChild(marcador);
}


