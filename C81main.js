canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width=2
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()

canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width=2
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,30,0,2*Math.PI)
ctx.stroke()

canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width=2
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,20,0,2*Math.PI)
ctx.stroke()

canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width=2
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,50,0,2*Math.PI)
ctx.stroke()

canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width=2
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,10,0,2*Math.PI)
ctx.stroke()

canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width=2
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,60,0,2*Math.PI)
ctx.stroke()

var mouse_event=""
var lastPositionOfX,lastPositionOfY
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
mouse_event="mousedown"
color=document.getElementById("color").value
width=document.getElementById("width").value
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;
    if (mouse_event=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.moveTo(lastPositionOfX,lastPositionOfY)
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
        ctx.stroke()
    }
    lastPositionOfX=current_position_of_mouse_x
    lastPositionOfY=current_position_of_mouse_y
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
mouse_event="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
mouse_event="mouseleave"
}