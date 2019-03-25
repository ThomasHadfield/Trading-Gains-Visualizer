let input = document.querySelectorAll('.input-trade');

input.forEach((service) => {
    service.addEventListener('mouseenter', (event) => {
        anime.remove('.input-trade');
        anime({
            targets: '.input-trade',
            duration: 1700,
            backgroundColor: '#fff',
            borderRadius: 30,
            borderColor: '#fff',
            rotate: '120deg',
        })
    })

    service.addEventListener('mouseleave', (event) => {
        anime.remove('.input-trade');
        anime({
            targets: '.input-trade',
            duration: 1700,
            borderRadius: 0,
            backgroundColor: '#e9eef6',
            borderColor: '#5467ff',
            rotate: '90deg',
        })
    })
});

input.forEach((service) => {
    service.addEventListener('click', (event) => {
        anime.remove('.input-trade');
        anime({
            targets: '.input-trade',
            duration: 2500,
            borderRadius: 30,
            scale: 200,
            backgroundColor: '#5467ff'
        })
    })
});

let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = "'Work Sans', sans-serif"
Chart.defaults.global.defaultFontColor = '#aaa'

let lineChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ['$SPY', '/CL', '/ES', '$APPL', '$QQQ'],
        datasets: [{
            label: 'Trading P/L',
            data: ['8', '50', -150, 95, 45],
            backgroundColor: 'rgba(84, 103, 255, 0.2)',
            borderColor: 'rgba(84, 103, 255, 1)',
            borderWidth: '1'
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});

$(document).ready(function() {
    $('.tradingChart').tilt({
        maxTilt: 10,
        scale: 1,
        perspective: 1800,
    })
});