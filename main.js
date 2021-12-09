var mouseevent = "empty";
var l_mousex, l_mousey;
    canvas = document.getElementById('Canvas1');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width = 10;
    canvas.addEventListener("mousedown", mymousedown);
    function mymousedown(e)
    {   color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        mouseevent = "mouseDown";
        console.log(mouseevent);
    }

    canvas.addEventListener("mousemove", mymousemove);
    function mymousemove(e)
    {   c_mousex = e.clientX - canvas.offsetLeft;
        c_mousey = e.clientY - canvas.offsetTop;
        if (mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last");
        console.log(l_mousex+","+l_mousey);
        ctx.moveTo(l_mousex, l_mousey);

        console.log("current");
        console.log(c_mousex+","+c_mousey);
        ctx.lineTo(c_mousex, c_mousey);
        ctx.stroke();
        }

        l_mousex = c_mousex; 
        l_mousey = c_mousey;
    }

    canvas.addEventListener("mouseup", mymouseup);
    function mymouseup(e)
    {   mouseevent = "mouseUP";
        console.log(mouseevent);
    }

    canvas.addEventListener("mouseleave", mymouseleave);
    function mymouseleave(e)
    {   mouseevent = "mouseleave";
        console.log(mouseevent);
    }

    var l_touchx, l_touchy;
canvas = document.getElementById('Canvas1');
ctx = canvas.getContext("2d");

color = "black";
width = 10;
var o_width = screen.width;
var n_width = screen.width - 100;
var n_height = screen.height - 100;

if (o_width < 992) {
    document.getElementById("Canvas1").width=n_width;
    document.getElementById("Canvas1").height=n_height;
}

canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e)
{   color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    l_touchx=e.touches[0].clientX - canvas.offsetLeft;
    l_touchy=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e)
{   c_touchx = e.touches[0].clientX - canvas.offsetLeft;
    c_touchy = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("last");
    console.log(l_touchx+","+l_touchy);
    ctx.moveTo(l_touchx, l_touchy);

    console.log("current");
    console.log(c_touchx+","+c_touchy);
    ctx.lineTo(c_touchx, c_touchy);
    ctx.stroke();

    l_touchx = c_touchx; 
    l_touchy = c_touchy;
}