
var numDrum = document.querySelectorAll(".drum").length;
for(i=0;i<numDrum;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

// Click detecting
function handleClick(){
    var innerHtml = this.innerHTML;
    makeSound(innerHtml);
    buttonAnimation(innerHtml);
}


//Keyboard press detecting
document.addEventListener("keydown",keyPress);

function keyPress(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}

// make sound Function
function makeSound(key){
  switch(key){
    case "w" :
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a" :
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s" :
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d" :
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j" :
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "k" :
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l" :
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  default:
  }
}

// Animation
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
