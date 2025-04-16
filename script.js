
function horaAtual(){

    var display = document.querySelector('.display')
    
    var agora = new Date()
    
    var horario = horaCerta(agora.getHours()) + ":" + horaCerta(agora.getMinutes()) 
    
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

function atualizarData(){
    const agora = new Date();
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = agora.toLocaleString('default', {month: 'long'});

    const dataFormatada = `${diaSemana}, ${dia} de ${mes}`;

    const dataDisplay = document.querySelector('.dataDisplay');
    if (dataDisplay){
        dataDisplay.textContent = dataFormatada
    }
}

atualizarData()
setInterval(atualizarData, 60000)


const bolinha = document.querySelector('.bolinha');

// function atualizarBolinha() {
//     const agora = new Date()
//     const segundos = agora.getSeconds() +
//     const angulo = segundos * 6

//     bolinha.style.transform = `translateX(-50%) rotate(${angulo}deg) translateY(-280px)`;
// }

// setInterval(atualizarBolinha, 1000)
// atualizarBolinha()

function animarBolinha() {
    const agora = new Date()
    const segundos = agora.getSeconds() + agora.getMilliseconds()/1000
    const angulo = segundos * 6

    bolinha.style.transform = `translateX(-50%) rotate(${angulo}deg) translateY(-280px)`;

    requestAnimationFrame(animarBolinha)
}

animarBolinha()


