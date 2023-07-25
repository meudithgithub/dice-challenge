var number1=Math.floor(Math.random()*6+1);
var number2=Math.floor(Math.random()*6+1);

// <img class="dice1" src="images/dice1.png" alt="">
// <img class="dice2" src="images/dice2.png" alt="">
// <img class="dice3" src="images/dice3.png" alt="">
// <img class="dice4" src="images/dice4.png" alt="">
// <img class="dice5" src="images/dice5.png" alt="">
// <img class="dice6" src="images/dice6.png" alt="">

//alert("WElCOME ;");

if(number1==1)
{
document.querySelector("img").setAttribute("src","images/dice1.png");
// document.setElementByClassName('player1').classList.add("dice1");

}
else if (number1==2) {
  // document.querySelector("image").classList.add("image2");
// document.setElementByClassName('player1').classList.add("dice2");
document.querySelector("img").setAttribute("src","images/dice2.png");
}
else if (number1==3) {
  // document.querySelector("image").classList.add("image3");
  // document.setElementByClassName('player1').classList.add("dice3");
  document.querySelector("img").setAttribute("src","images/dice3.png");
}
else if (number1==4) {
  // document.querySelector("image").classList.add("image4");
  // document.setElementByClassName('player1').classList.add("dice4");
  document.querySelector("img").setAttribute("src","images/dice4.png");
}
else if (number1==5) {
  // document.querySelector("image").classList.add("image5");
  // document.setElementByClassName('player1').classList.add("dice5");
document.querySelector("img").setAttribute("src","images/dice5.png");
}
else if (number1==6) {
  // document.querySelector("image").classList.add("image6");
  // document.setElementByClassName('player1').classList.add("dice6");
  document.querySelector("img").setAttribute("src","images/dice6.png");
}
// document.querySelector(".player2").setAttribute("src","images/dice1.png");
if(number2==1)
{
document.querySelector(".player2").setAttribute("src","images/dice1.png");
// document.setElementByClassName('player1').classList.add("dice1");

}
else if (number2==2) {
  // document.querySelector("image").classList.add("image2");
// document.setElementByClassName('player1').classList.add("dice2");
// document.querySelector("img").setAttributeNode[2]("src","images/dice2.png");
document.querySelector(".player2").setAttribute("src","images/dice2.png");
}
else if (number2==3) {
  // document.querySelector("image").classList.add("image3");
  // document.setElementByClassName('player1').classList.add("dice3");
document.querySelector(".player2").setAttribute("src","images/dice3.png");
}
else if (number2==4) {
  // document.querySelector("image").classList.add("image4");
  // document.setElementByClassName('player1').classList.add("dice4");
document.querySelector(".player2").setAttribute("src","images/dice4.png");
}
else if (number2==5) {
  // document.querySelector("image").classList.add("image5");
  // document.setElementByClassName('player1').classList.add("dice5");
document.querySelector(".player2").setAttribute("src","images/dice5.png");
}
else if (number2==6) {
  // document.querySelector("image").classList.add("image6");
  // document.setElementByClassName('player1').classList.add("dice6");
document.querySelector(".player2").setAttribute("src","images/dice6.png");
}


if (number1>number2)
{
  // document.querySelector(".result").innerHTML("PLAyER 1 wins");
  document.getElementById("result").innerHTML = "PLAyER 1 wins";
}
if (number1<number2)
{
  document.getElementById("result").innerHTML = "PLAyER 2 wins";
}
if (number1==number2)
{
  document.getElementById("result").innerHTML = "draw";
}
