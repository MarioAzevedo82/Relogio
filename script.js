
function horaAtual(){

    var display = document.querySelector('.display')
    
    var agora = new Date()
    
    var horario = agora.getHours()
    
    display.textContent = horario
}

horaAtual()

