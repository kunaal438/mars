fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
.then(res => res.json())
.then(data => {
    enterTheData(data);
});

const enterTheData = (data) => {
    const numerals = [...document.querySelectorAll('.card h2')];
    const pressure = [...document.querySelectorAll('.pressure')];
    const speed = [...document.querySelectorAll('.speed')];
    data.sol_keys.map((item, index) => {
        numerals[index].innerHTML = `${Math.floor((data[item].AT.av - 32) * 5/9)} C`;
        pressure[index].innerHTML = `AP : ${data[item].PRE.av} pa`;
        speed[index].innerHTML = `HWS : ${data[item].HWS.av} m/s`;
    })
}