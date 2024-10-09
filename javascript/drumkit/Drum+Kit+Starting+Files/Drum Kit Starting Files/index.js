
for(var i=0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", afterClick);
}

function afterClick() {
  playSound(this.innerHTML);
}

document.addEventListener("keypress", afterPress);

function afterPress(event) {
  playSound(event.key);
}


function playSound(key){
  
  switch(key){
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    playAnimation("w");
    break;
    case "a":
    playAnimation("w");
    break;
    case "s":

    break;
    case "d":

    break;
    case "j":
    
    break;
    case "k":

    break;
    case "l":

    break;
    default:
      console.log("key not found");
  }
}

function playAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  },100);
}