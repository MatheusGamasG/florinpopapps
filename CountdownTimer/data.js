let dateInput = document.querySelector('.input-container__data');
let start = document.querySelector('.input-container__start');
let countdown = document.querySelectorAll('.main-container__time-remaining');
let inputHours = document.querySelector('.input-container__horario');
let titulo = document.querySelector('.titulo-principal');

start.addEventListener('click', function() {
    startCronometer();    
})

function startCronometer() {
    setInterval(()=> {
        let timeDiff = pegaDatas();
        let remainingTime = calcTime(timeDiff);
        for(let i = 0; i <= 3; i++) {
            countdown[i].textContent = remainingTime[i];
        }
    }, 1000)
}

function pegaDatas() {
    let dateAtual = new Date();
    dateAtual = dateAtual.getTime();
    let dateTo = new Date(dateInput.value);
    dateTo.setDate(dateTo.getDate() + 1);
    if (inputHours.value != "") {
        verificaHoursInput(dateTo);
    }
    dateTo = dateTo.getTime();
    let timeDiff = (dateTo - dateAtual);
    if (timeDiff < 0) {
        return 0;
    }
    return timeDiff
}

function verificaHoursInput(dateTo) {
    let hour = inputHours.value[0] + inputHours.value[1];
    let minutes = inputHours.value[3] + inputHours.value[4];
    dateTo.setHours(hour, minutes);
}

function calcTime(timeDiff) {
    let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    let hours = timeDiff - (days * 24 * 60 * 60 * 1000);
    hours = Math.floor(hours / 1000 / 60 / 60);
    let minutes = timeDiff - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000);
    minutes = Math.floor(minutes / 1000 / 60);
    let seconds = timeDiff - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000);
    seconds = Math.floor(seconds / 1000);

    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        return ['D', 'O', 'N', 'E'];
    } else if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return [0, 0, 0, 0]
    }

    return [days, hours, minutes, seconds];
}
