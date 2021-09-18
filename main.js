var mouseevent = "";
var last_x , last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e) {
    color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseevent = "mousedown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
   mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
   mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
    current_x = e.clientX-canvas.offsetLeft;
    current_y = e.clientY-canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x , last_y);
       ctx.arc(current_x , current_y,20, 0 , 2 * Math.PI);
        ctx.stroke();

    }
    last_x = current_x;
    last_y = current_y;
}
function cleararea() 
{ ctx.clearRect(0, 0, canvas.width, canvas.height); }