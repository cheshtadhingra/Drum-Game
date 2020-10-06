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

// function TempMan(name ,  age , hobbies){

//       this.name = name;
//       this.age = age;
//       this.hobbies = hobbies;     
//       this.me = function(){
//         alert("you will mofo have patience");
//       };
// }   

// var luffy1 = new TempMan("luffy" , 12 , ["tt" , "problem solving"]);

// console.log(luffy1);

function sound(temp) {

    
    // console.log("hello"); 
    // console.log(this);
    
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



for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    // console.log("rocket science");   
    var buttenHtml = this.innerHTML;
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        sound(this.innerHTML);
    });
}   

document.addEventListener("keypress" , function(event){

    sound(event.key);

});



