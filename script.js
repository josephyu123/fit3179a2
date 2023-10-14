vegaEmbed("#map_1", 'minimum-temperature.json').catch(console.error);
vegaEmbed("#map_2", 'maximum-temperature.json').catch(console.error);
vegaEmbed("#map_3", 'avg-temperature-2020-2039.json').catch(console.error);
vegaEmbed("#map_4", 'avg-temperature-2040-2059.json').catch(console.error);
vegaEmbed("#map_5", 'avg-temperature-2060-2079.json').catch(console.error);
vegaEmbed("#map_6", 'avg-temperature-2080-2099.json').catch(console.error);

vegaEmbed("#bar_1", 'min-temperature.json').catch(console.error);

document.getElementById('map_2').classList.add('hidden');
document.getElementById('map_4').classList.add('hidden');
document.getElementById('map_5').classList.add('hidden');
document.getElementById('map_6').classList.add('hidden');

document.getElementById("mapSelector").addEventListener("change", function() {
    var selectedFile = this.value;

    if (selectedFile === 'minimum-temperature.json') {
        document.getElementById('map_1').classList.remove('hidden');
        document.getElementById('map_2').classList.add('hidden');
    } else {
        document.getElementById('map_1').classList.add('hidden');
        document.getElementById('map_2').classList.remove('hidden');
    }
});

document.getElementById("yearSelector").addEventListener("change", function() {
    var selectedFile = this.value

    if (selectedFile === 'avg-temperature-2020-2039.json') {
        document.getElementById('map_3').classList.remove('hidden');
        document.getElementById('map_4').classList.add('hidden');
        document.getElementById('map_5').classList.add('hidden');
        document.getElementById('map_6').classList.add('hidden');
    } else if (selectedFile === 'avg-temperature-2040-2059.json') {
        document.getElementById('map_3').classList.add('hidden');
        document.getElementById('map_4').classList.remove('hidden');
        document.getElementById('map_5').classList.add('hidden');
        document.getElementById('map_6').classList.add('hidden');
    } else if (selectedFile === 'avg-temperature-2060-2079.json') {
        document.getElementById('map_3').classList.add('hidden');
        document.getElementById('map_4').classList.add('hidden');
        document.getElementById('map_5').classList.remove('hidden');
        document.getElementById('map_6').classList.add('hidden');
    } else {
        document.getElementById('map_3').classList.add('hidden');
        document.getElementById('map_4').classList.add('hidden');
        document.getElementById('map_5').classList.add('hidden');
        document.getElementById('map_6').classList.remove('hidden');
    }
});