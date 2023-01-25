let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');


function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    secondArrow.style = `transform: rotate(${seconds}deg);`
    minuteArrow.style = `transform: rotate(${minutes}deg);`
    hourArrow.style = `transform: rotate(${hours}deg);`

    hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000)

}
clock()
    // Рекурсия - это когда функция вызывает саму себя

// let i = 0; 
// function rek() {
//     console.log(i);
//         i++
//         rek()
// }

// rek()
let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        remove()
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}

function remove() {
    for (let x = 0; x < links.length; x++) {
        links[x].classList.remove('active')
        tabs[x].classList.remove('active')
    }
}


// new part stars from here



let secElement = document.querySelector('.stopwatch__seconds'),
    minElement = document.querySelector('.stopwatch__minutes'),
    hourElement = document.querySelector('.stopwatch__hours'),
    btn = document.querySelector('.stopwatch__btn'),
    reset = document.querySelector('#reset'),
    stopwatch__clock = document.querySelector('.stopwatch__clock');
let count = 0;
let timeoutId;
let isLive = false;

function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { h: hours, m: minutes, s: seconds };
}


function tick() {
    count++;

    const { h, m, s } = toHoursAndMinutes(count);

    secElement.textContent = s;
    minElement.textContent = m;
    hourElement.textContent = h;
}

const startTimer = function() {
    timeoutId = setTimeout(() => {
        tick();
        startTimer();
    }, 1000);
}

reset.addEventListener('click', () => {
    count = 0;

    const { h, m, s } = toHoursAndMinutes(count);

    secElement.textContent = s;
    minElement.textContent = m;
    hourElement.textContent = h;

    clearTimeout(timeoutId);
    if (isLive) {
        startTimer();
    }
});

btn.addEventListener('click',
    function() {
        if (isLive) {
            clearTimeout(timeoutId);
            isLive = false;
            btn.textContent = "Start";
        } else {
            startTimer();
            isLive = true;
            btn.textContent = "Pause";
            reset.style = 'display: inline-block';
        }
    }
)