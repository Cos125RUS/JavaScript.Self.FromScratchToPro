let timer = 0;

const setTimer = value => {
    return new Promise(resolve => {
        setTimeout(() => {
            timer++;
            resolve(`(stop) timer: ${timer}, value: ${value}`);
        }, value);
    });
}

async function showTimer(value) {
    console.log(`(start) timer: ${timer}, value: ${value}`);
    const res = await setTimer(value);
    console.log(res);
}

for (let i = 0; i < 10; i++) {
    showTimer(i + 1);
}