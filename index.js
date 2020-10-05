// console.log("someday i will");

function ace() {
     
    var temp = this.innerHTML;

     switch (temp) {
         case "w":
             var audio = new Audio("sounds/crash.mp3");
             audio.play();
             break; 
         case "a":
             var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
         case "s":
             var audio = new Audio("sounds/snare.mp3");
             audio.play();
             break;
         case "d":
             var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
         case "j":
             var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
         case "k":
             var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
         case "l":
             var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
         default:
             break;
     }
     
}

// function TempMan(name , a ge , hobbies){

//       this.name = name;
//       this.age = age;
//       this.hobbies = hobbies;     
// }   

// var luffy1 = new TempMan("luffy" , 12 , ["tt" , "problem solving"]);

// console.log(luffy1);

for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , ace);
}



