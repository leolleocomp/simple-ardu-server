var socket = io();

var getConfig = function(label, color) {
    return {
        label: label,
        backgroundColor: window.chartColors[color],
        borderColor: window.chartColors[color],
        data: [],
        fill: false
    };
};

var  temperatureDataset = getConfig('Temperatura', 'red'),
     umidityDataset = getConfig('Umidade', 'blue'),
     luminancyDataset = getConfig('Luminosidade', 'yellow');

var config = {
    type: 'line',
    data: {
        datasets: [
            temperatureDataset,
            umidityDataset,
            luminancyDataset
        ],
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        elements: {
            point: { radius: 0 }
        },
        title: {
            display: true,
            text: 'Temperatura (ºC), umidade (%) e luminância (Lux)'
        },
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Tempo'
                },
                time: {
                    tooltipFormat: 'DD/MM/YYYY H:mm:ss',
                    displayFormats: {
                        millisecond: 'H:mm:ss.SSS',
                        second: 'H:mm:ss',
                        minute: 'H:mm',
                        hour: 'H[h]'
                    }
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Valor'
                },
                ticks: {
                    suggestedMax: 60
                }
            }]
        }
    }
};

socket.on('connect', (data) => {
    socket.emit('join', 'I\'m alive!');
});

window.onload = function() {
    socket.on('temperature', (data) => {
        console.log(data);

        data = JSON.parse(data);
        data.x = moment.unix(data.x).toDate();

        temperatureDataset.data.push(data);

        window.myLine.update();
    });

    socket.on('umidity', (data) => {
        console.log(data);

        data = JSON.parse(data);
        data.x = moment.unix(data.x).toDate();

        umidityDataset.data.push(data);

        window.myLine.update();
    });

    socket.on('luminancy', (data) => {
        console.log(data);

        data = JSON.parse(data);
        data.x = moment.unix(data.x).toDate();

        luminancyDataset.data.push(data);

        window.myLine.update();
    });

    var ctx = document.getElementById('chart').getContext('2d');
    console.log(config);
    window.myLine = new Chart(ctx, config);
};

