vegaEmbed("#map_1", 'minimum-temperature.json').catch(console.error);
vegaEmbed("#map_2", 'maximum-temperature.json').catch(console.error);
document.getElementById('map_2').classList.add('hidden');

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