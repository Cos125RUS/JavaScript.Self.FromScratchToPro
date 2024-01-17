class Timer {
    date;

    constructor(date) {
        this.date = date;
    }

    step() {
        let now = new Date();
        let year = this.date.getFullYear() - now.getFullYear();
        let month = this.date.getMonth() - now.getMonth();
        let day = this.date.getDate() - now.getDate();
        let hour = this.date.getHours() - now.getHours();
        let minute = this.date.getMinutes() - now.getMinutes();
        let second = this.date.getSeconds() - now.getSeconds();

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

    run() {
        setInterval(() => this.step(), 1000);
    }
}

let myTimer = new Timer(new Date("2024/5/6")).run();