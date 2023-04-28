// window.onload = dice;
// var diceArray = ["images/dice1.png", "images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

// function dice(){
//     var randomNumber1 = Math.floor(Math.random()*diceArray.length);
//     var randomNumber2 = Math.floor(Math.random()*diceArray.length);
//     var leftside = document.getElementById("left").src = diceArray[randomNumber1];
//     var rightside = document.getElementById("right").src = diceArray[randomNumber2];
//     if (leftside>rightside){
//         document.querySelector("h1").innerHTML = "player 1 wins";
//     } else if (rightside > leftside){
//         document.querySelector("h1").innerHTML = "player 2 wins ";
//     } else if (rightside === leftside){
//         document.querySelector("h1").innerHTML = "Draw";
//     }
//  }


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", diceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins ";
} 
else {
  document.querySelector("h1").innerHTML = "Draw";
}