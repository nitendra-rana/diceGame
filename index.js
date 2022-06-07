
let  randomNumber1 = Math.floor(Math.random()*6 )+1; 
let randomDiceSource1 = "images/" + "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);

let  randomNumber2 = Math.floor(Math.random()*6 )+1; 
let randomDiceSource2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2 );

if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else if(randomNumber2 < randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}