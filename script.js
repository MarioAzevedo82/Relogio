
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


