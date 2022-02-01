let dateInput = document.querySelector('.data');
let start = document.querySelector('.start');
let countdown = document.querySelectorAll('.timeRemaining');

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
    dateTo = dateTo.getTime();
    let timeDiff = (dateTo - dateAtual);
    return timeDiff
}

function calcTime(timeDiff) {
    let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    let hours = timeDiff - (days * 24 * 60 * 60 * 1000);
    hours = Math.floor(hours / 1000 / 60 / 60);
    let minutes = timeDiff - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000);
    minutes = Math.floor(minutes / 1000 / 60);
    let seconds = timeDiff - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000);
    seconds = Math.floor(seconds / 1000);
    return [days, hours, minutes, seconds];
}
