let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')


function roundNumber(number) {
    return Math.round(number * 100) / 100
}

celciusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})
fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5 / 9)
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

    celciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})



function toggleLabels() {
    let labels = document.querySelectorAll('.label');
    labels.forEach(function (label) {
        if (label.style.display === 'none' || label.style.display === '') {
            label.style.display = 'block';
            label.style.maxHeight = label.scrollHeight + "px";
        }
    });
}

function clearInputs() {
    let inputs = document.querySelectorAll('input[type="number"]');
    let labels = document.querySelectorAll('.label');

    inputs.forEach(function (input) {
        input.value = ''; // Clear input values
    });

    labels.forEach(function (label) {
        label.style.maxHeight = 0;
        label.style.display = 'none'; // Hide labels
    });
    
}