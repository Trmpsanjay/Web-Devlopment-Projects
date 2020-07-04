
var random1 = Math.floor(Math.random()*6)+1;
var imagePath1 = "images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagePath1,);
var random2 = Math.floor(Math.random()*6)+1;
var imagePath2 = "images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagePath2,);
if(random1>random2){
  document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(random1===random2){
  document.querySelector("h1").innerHTML="Match Tie";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Win";
}
