//buttons section

var numOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numOfButtons;i++){     
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonPressed=this.innerHTML;
     makeSound(buttonPressed);
     buttonAnimation(buttonPressed);
   });
}

//keyboard section
  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  })





function makeSound(key){
    switch(key){
        
        case"w":
           var tom1=new Audio("sounds/tom-1.mp3");
           tom1.play();
        break;
        case"a":
           var tom2=new Audio("sounds/tom-2.mp3");
           tom2.play();
        break;
        case"s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case"d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case"j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case"k":
             var snare=new Audio("sounds/snare.mp3");
             snare.play();
        break;
        case"l":
        var kickbass=new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
        default:
            consoleLog(key);
      }
}


function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    //adding class prssed to the active button
    activeButton.classList.add("pressed")
//myTimeout = setTimeout(function, milliseconds);
    setTimeout(function(){
          activeButton.classList.remove("pressed");
    },100)
}