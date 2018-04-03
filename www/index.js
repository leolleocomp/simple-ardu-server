var socket = io();

socket.on('connect', (data) => {
    socket.emit('join', 'I\'m alive!');
});

window.onload = function() {
    socket.on('temperature', (data) => {
        console.log(data);

        data = JSON.parse(data);
        data.x = moment.unix(data.x).toDate();

        temperatureDataset.data.push(data);

        window.lines[0].update();
    });

    socket.on('umidity', (data) => {
        console.log(data);

        data = JSON.parse(data);
        data.x = moment.unix(data.x).toDate();

        umidityDataset.data.push(data);

        window.lines[1].update();
    });

    socket.on('luminancy', (data) => {
        console.log(data);

        data = JSON.parse(data);
        data.x = moment.unix(data.x).toDate();

        luminancyDataset.data.push(data);

        window.lines[2].update();
    });

	var ctx = [
		document.getElementById('temperature').getContext('2d'),
		document.getElementById('umidity').getContext('2d'),
		document.getElementById('luminancy').getContext('2d')
	];

	window.lines = [];

	ctx.forEach((ctx, ndx) => {
		window.lines.push(new Chart(ctx, config[ndx]));
	});
};

