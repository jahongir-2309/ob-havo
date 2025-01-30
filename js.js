document.addEventListener("DOMContentLoaded", () => {
    let key = "35cdda0ec148f9a4aef206895005e6ca";
    let btn = document.getElementById("btn");
    let shaharInput = document.getElementById("shahar-kiritish");

    btn.addEventListener("click", () => {
        let shahar = shaharInput.value;
        if (shahar) {
            obhavo(shahar);
        }
    });

    function obhavo(shahar) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${shahar}&units=metric&appid=${key}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        document.getElementById("shahar-nomi").textContent = data.name;
                        document.getElementById("temperatura").textContent = `${Math.round(data.main.temp)}°C`;
                    });
                } else {
                    alert("Xato: shahar topilmadi yoki javob noto'g'ri");
                }
            })
    }
});
