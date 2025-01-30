document.addEventListener("DOMContentLoaded", function () {
    let key = "35cdda0ec148f9a4aef206895005e6ca";
    let btn = document.getElementById("btn");
    let shaharKiritish = document.getElementById("shahar-kiritish");

    btn.addEventListener("click", () => {
        let city = shaharKiritish.value;
        if (city) {
            obhavo(city);
        }
    });

    async function obhavo(city) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
        if (response) {
            let data = await response.json();
            document.getElementById("shahar-nomi").textContent = data.name;
            document.getElementById("temperatura").textContent = Math.round(data.main.temp) + "°C";
        } else {
           alert("Ma'lumotlarni olishda xatolik yuz berdi:", response);
        }
    }
});

