var x = document.querySelectorAll(".drum").length
for(i=0 ; i<x ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 var buttoninnerhtml = this.innerHTML
mousekey(buttoninnerhtml)
buttonanimation(buttoninnerhtml)
})
}
document.addEventListener("keypress",function(event){
mousekey(event.key)
buttonanimation(event.key)
})
function mousekey(key){
    switch (key) {
        case "w":
        var w = new Audio("sounds/tom-1.mp3")
         w.play()
        break;
        case "a":
        var a = new Audio("sounds/tom-2.mp3")
         a.play()
        break;
        case "s":
        var s = new Audio("sounds/tom-3.mp3")
         s.play()
        break;
        case "d":
        var d = new Audio("sounds/tom-4.mp3")
         d.play()
        break;
        case "j":
        var j = new Audio("sounds/crash.mp3")
         j.play()
        break;
        case "k":
        var k = new Audio("sounds/kick-bass.mp3")
         k.play()
        break;
        case "l":
        var l = new Audio("sounds/snare.mp3")
         l.play()
        break;
                    default:(buttoninnerhtml)
                       
                }

}

function buttonanimation(currentkey){
    var y =document.querySelector("."+currentkey)
    y.classList.add("pressed")
    setTimeout(function(){
        y.classList.remove("pressed")
    }, 100);
}

