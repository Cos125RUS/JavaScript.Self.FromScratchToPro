function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something " + x);
        }, 4000 / x);
    });
}

async function talk(x) {
    const word = await saySomething(x);
    console.log(word);
}

talk(2);
talk(4);
talk(8);