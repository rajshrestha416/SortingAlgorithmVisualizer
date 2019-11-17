let arrayofDiv = [];
let container = document.querySelector(".container");
let btnStart = document.querySelector("#btnStart");
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

btnStart.addEventListener("click", event =>{
    let array = arrayofDiv;
    let randomArray = getRandomIntArray();
    let counter = 0;
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
    console.log(getRandomIntArray());
});

function setDiv(array) {
    for (let index = 0; index < 10; index++) {
        container.appendChild(array[index]); 
    }
}

function getRandomIntArray() {
    let randomArray = [9,8,7,6,5,4,3,2,1,0];
    // for (let j = 0; j < randomArray.length; j++) {
    //     let int = getRandomInt(10);
    //     for (let index = j; index < 10; index++) {
    //         if (int == randomArray[index]) {
    //             break;
    //         } else {
    //             randomArray[index] = int;
    //             break;
    //         }       
    //     }
    // }
    return randomArray;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//console.log(arrayofDiv);
