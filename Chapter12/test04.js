let myList = [{
    "name": "Learn JS",
    "status": true
},
{
    "name": "Try JSON",
    "status": false
}];

const reloader = () => {
    myList.forEach(el => {
        console.log(`${el.name} = ${el.status}`);
    });
};

reloader();