const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;
let size = 25;

square.style.width = size + "px";
square.style.height = size + "px";

window.addEventListener("scroll", function(){
    if(size >=window.innerWidth/2){
        grow = false;
    } else if(size<=0){
        grow = true;
    }
    if(grow == true){
    size+=15;
    square.style.width = size + "px";
    square.style.height = size + "px";
    } else{
    size-=15;
    square.style.width = size + "px";
    square.style.height = size + "px";
}


})