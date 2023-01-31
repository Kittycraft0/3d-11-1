//for(var i=0;i<9000;i++){
//    console.log("what");
//  }
//imported from Lines connecting a line of circles-7 at around about
//10/25/2022 Thursday

var originalWidth=1024;
var originalHeight=1024;



//Great canvas script, can be copied and pasted 
//into just about any project as it doesn't 
//refference anything accept the canvas ID 
//which can be changed.

//finally made the canvas initialied HERE on 1/5/2022 9:44 AM CST Thursday!
var canvas=document.createElement("canvas");
canvas.style=`
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  height:100%;
  background-color:#00000022;`;
document.body.appendChild(canvas);

//great -1/24/2022 12:16 PM CST Tuesday
document.body.style=`
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
  height: 100%;
  width: 100%;
  /*background-color:#000000;*/
`;

//const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

//Set the canvas size
/*if(canvas.offsetHeight<canvas.offsetWidth){
  var canvasscale=originalWidth/canvas.offsetHeight;
}else{
  var canvasscale=originalHeight/canvas.offsetWidth;
}
var canvasscalemult=1/canvasscale

var widthoffset=canvas.offsetWidth*canvasscale;
canvas.width=canvas.offsetWidth*canvasscale;

var heightoffset=canvas.offsetHeight*canvasscale;
canvas.height=canvas.offsetHeight*canvasscale;
ctx.translate(canvas.width/2,canvas.height/2)

var canvasWidth=widthoffset;
var canvasHeight=heightoffset;*/
resetCanvasSize();

//allow canvas to be fixed later without the 
//requirement of reloading the page, 
//is now hooked up to an event listener of the 
//document resizing. No need for a settings 
//screen! Unless you really want to. I can't 
//stop you. I think as of now anyways.
//document.addEventListener("resize",resetCanvasSize);
window.addEventListener("resize",()=>{
  resetCanvasSize();
});
window.onload=()=>{resetCanvasSize();};
function resetCanvasSize(){
  //console.log("Canvas size set");
  if(canvas.offsetHeight<canvas.offsetWidth){
    var canvasscale=1024/canvas.offsetHeight;
  }else{
    var canvasscale=1024/canvas.offsetWidth;
  }
  var canvasscalemult=1/canvasscale
  var widthoffset=canvas.offsetWidth*canvasscale;
  canvas.width=canvas.offsetWidth*canvasscale;
  var heightoffset=canvas.offsetHeight*canvasscale;
  canvasWidth=widthoffset;
  canvasHeight=heightoffset;
  canvas.height=canvas.offsetHeight*canvasscale;
  ctx.translate(canvas.width/2,canvas.height/2)
}
ctx.clear=()=>{
  ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
}

//added in -9/6/2022 1:40 PM CST Tuesday
//IT ALREADY EXISTS ELSEWHERE...
/*ctx.line=(x1,y1,x2,y2,color)=>{
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.strokeStyle=color;
  ctx.strokeStyle="white";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(300, 150);
  ctx.stroke();
  console.log("line "+x1,y1,x2,y2,color);
}*/
//ctx.line(2,3,4,5,6);


//Sets default stroke color, if you can see the line then you can know that this is working.
//I thought that color is white, though...?
//its strokeStyle not strokeColor...
ctx.strokeStyle="#FFFFFF00";
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(30,30);
ctx.stroke(); //had a stroke

//quality-of-life functions -1/30/2023
//-1/30/2023
function isNaNorUndefined(value){
  return(
    typeof value==="undefined"||
    (typeof value==="number"&&isNaN(value))
  );
}



console.log("1 setup loaded!");