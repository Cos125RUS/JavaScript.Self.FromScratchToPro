let to = setDate();

function timer() {
    let now = new Date();
    let year = to.getFullYear() - now.getFullYear();
    let month = to.getMonth() - now.getMonth();
    let day = to.getDate() - now.getDate();
    let hour = to.getHours() - now.getHours();
    let minute = to.getMinutes() - now.getMinutes();
    let second = to.getSeconds() - now.getSeconds();

    if (second < 0) {
        minute--;
        second += 60;
    }
    if (minute < 0) {
        hour--;
        minute += 60;
    }
    if (hour < 0) {
        day--;
        hour += 24;
    }
    if (day < 0) {
        month--;
        day += 30; // TODO: привязку к конкретному месяцу
    }
    if (month < 0) {
        year--;
        month += 12;
    }

    console.log("year:", year, "  month:", month, "  day:", day, "  hour:", hour, "  minute:", minute, "  second:", second);
}

function setDate() {
    return new Date("2024/5/6");  // Заглушка
    // TODO: добавить ввод
}

setInterval(timer, 1000);