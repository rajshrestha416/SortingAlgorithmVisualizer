let arrayofDiv = [];
let container = document.querySelector(".container");
let btnRandomize = document.querySelector("#btnStart");
let height = 50;
let counter = 0;

for (let index = 0; index < 10; index++) {
    arrayofDiv.push(document.createElement("div"));
    container.appendChild(arrayofDiv[index]);
}

arrayofDiv.forEach(element => {
    element.style.height = `${height}px`;
    element.style.width = "50px";
    element.style.backgroundColor = "black";
    element.style.margin = "10px";
    element.value = counter;
    counter++;
    height += 50;
});

btnRandomize.addEventListener("click", event =>{
    let array = arrayofDiv;
    let randomArray = getRandomIntArray();
    let counter = 0;
    console.log(randomArray);
    
    let forEverySecond = window.setInterval(() => {
        let temp = array[counter];
        array[counter] = array[randomArray[counter]];
        array[randomArray[counter]] = temp;
        setDiv(array);
        counter++;
        if (counter == 5) {
            clearInterval(forEverySecond);
        }
    } ,500);
});

function setDiv(array) {
    for (let index = 0; index < 10; index++) {
        container.appendChild(array[index]); 
    }
}

function getRandomIntArray() {
    let randomArray = [];
    do{
        let i = getRandomInt(10);
        if (!randomArray.includes(i)) {
            randomArray.push(i);
        }
    }while(randomArray.length < 10)
    return randomArray;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function bubbleSort(params) {
    
}
