const allTemp = [...document.querySelectorAll('.temp')];
const numerals = [...document.querySelectorAll('.card h2')];
const pressure = [...document.querySelectorAll('.pressure')];
const speed = [...document.querySelectorAll('.speed')];

let a;

fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
.then(res => res.json())
.then(data => {
    console.log(data)
    a = data;
});