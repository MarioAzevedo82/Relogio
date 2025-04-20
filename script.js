
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


//const bolinha = document.querySelector('.bolinha');

// function atualizarBolinha() {
//     const agora = new Date()
//     const segundos = agora.getSeconds() +
//     const angulo = segundos * 6

//     bolinha.style.transform = `translateX(-50%) rotate(${angulo}deg) translateY(-280px)`;
// }

// setInterval(atualizarBolinha, 1000)
// atualizarBolinha()

// function animarBolinha() {
//     const agora = new Date()
//     const segundos = agora.getSeconds() + agora.getMilliseconds()/1000
//     const angulo = segundos * 6

//     bolinha.style.transform = `translateX(-50%) rotate(${angulo}deg) translateY(-280px)`;

//     requestAnimationFrame(animarBolinha)
// }

// animarBolinha()


const bolinha = document.querySelector('.bolinha');
const relogio = document.querySelector('.relogioPonteiros');

function animarBolinha() {
    const agora = new Date();
    const segundos = agora.getSeconds() + agora.getMilliseconds() / 1000;
    const angulo = segundos * 6; // 6 graus por segundo

    const raio = relogio.offsetWidth / 2;
    const distancia = raio * 0.95; // você curtiu assim :)

    bolinha.style.transform = `rotate(${angulo}deg) translateY(-${distancia}px)`;

    requestAnimationFrame(animarBolinha);
}

requestAnimationFrame(animarBolinha);

function buscarCidade(){
    fetch('https://ipapi.co/json/')

    .then(response => response.json())
    .then(data => {
        const cidade = data.city;
        const latitude = data.latitude;
        const longitude = data.longitude;

        const cidadeDisplay = document.querySelector('.cidadeDisplay');
        if (cidadeDisplay && cidade) {
            cidadeDisplay.textContent = cidade;
        }
        buscarTemperatura(latitude, longitude);
    })
    .catch(error => {
        console.error('Erro ao buscar a cidade:', error);
        const cidadeDisplay = document.querySelector('.cidadeDisplay');
        if(cidadeDisplay){
            cidadeDisplay.textContent = "Cidade não encontrada";
        }
    })
}

function buscarTemperatura(lat, lon) {
    const apiKey = '820e9fba3a8baa72a45680a26d4a7590'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
            const temperatura = Math.round(data.main.temp);
            const temperaturaDisplay = document.querySelector('.temperaturaDisplay');
            if (temperaturaDisplay) {
                temperaturaDisplay.textContent = `Tempertaura: ${temperatura}°C`;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar a temperatura:', error);
            const temperaturaDisplay = document.querySelector('.temperaturaDisplay');
            if (temperaturaDisplay) {
                temperaturaDisplay.textContent = "Temperatura indisponível";
            }
        });
}

buscarCidade()



