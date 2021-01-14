var allBtn = document.querySelectorAll(".drum");

function play(event) {
  switch(event) {
    case "w" :
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "a" :
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s" :
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "d" :
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "j" :
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "k" :
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "l" :
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    default :
      console.log(event);
  }
}

function Animation(event) {
  var activeButton = document.querySelector("." + event);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

for(var i = 0; i < allBtn.length ; ++i) {
  allBtn[i].addEventListener("click", function () {
      play(this.innerHTML);
      Animation(this.innerHTML);
   });
}


document.addEventListener("keydown", function(e){
  play(e.key);
  Animation(e.key);
});
