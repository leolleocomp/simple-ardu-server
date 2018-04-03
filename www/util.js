window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

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

var config =[];

// temperature
config.push({
    type: 'line',
    data: {
        datasets: [
            temperatureDataset
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
            text: 'Temperatura x tempo'
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
                    labelString: 'Temperature (ºC)'
                },
				ticks: {
					suggestedMax: 50,
					suggestedMin: 17
				}
            }]
        }
    }
});

// umidity
config.push({
    type: 'line',
    data: {
        datasets: [
            umidityDataset
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
            text: 'Umidade x tempo'
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
                    labelString: 'Umidade (%)nc)'
                },
				ticks: {
					suggestedMin: 20,
					suggestedMax: 100
				}
            }]
        }
    }
});

// luminancy
config.push({
    type: 'line',
    data: {
        datasets: [
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
            text: ' '
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
                    labelString: 'Luminância (Lux)'
                },
				ticks: {
					suggestedMin: 0,
					suggestedMax: 300
				}
            }]
        }
    }
});
