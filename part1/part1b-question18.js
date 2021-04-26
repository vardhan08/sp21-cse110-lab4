var intervalID = setInterval(myFunc, 1000);

function myFunc(){

    let date = new Date();
    console.log(date.toLocaleTimeString());
}