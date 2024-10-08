function play() {
  var choice1 = Math.round(Math.random() * 6);
  var choice2 = Math.round(Math.random() * 6);

  document.querySelector(".dice .img1").setAttribute("src", "./images/dice" + choice1 + ".png");
  document.querySelector(".dice .img2").setAttribute("src", "./images/dice" + choice2 + ".png");

  if(choice1 > choice2){
    document.querySelector(".container h1").innerHTML = "Player 1 wins!"
  }else if(choice1 == choice2){
    document.querySelector(".container h1").innerHTML = "It's a tie!"
  }else {
    document.querySelector(".container h1").innerHTML = "Player 2 wins!"
  }
}


