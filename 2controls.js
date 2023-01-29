//empty
//not anymore
//copied from Chase a little dot 2-1
//at 10/25/2022 Thursday

//keys script, much more simplified now
var thekeys={};
window.addEventListener("keydown",()=>{
  //uncomment the below to get key names 
  //outputted to the console as they are pressed
  //console.log(event.key);
  thekeys[event.key]=true;
  //added later for bad glitch fixing
  thekeys[event.key.toUpperCase()]=true;
  thekeys[event.key.toLowerCase()]=true;
});
window.addEventListener("keyup",()=>{
  thekeys[event.key]=false;
  //added later for bad glitch fixing
  thekeys[event.key.toUpperCase()]=false;
  thekeys[event.key.toLowerCase()]=false;
});
function keyPressed(key){
  return(thekeys[key]);
}
function keyPressedCaseInsensitive(key){
  var key1=key;
  var key2=key.toUpperCase();
  if(key1==key2){
    key2=key.toLowerCase();
  }
  return(keyPressed(key1)||keyPressed(key2))
}

//cursor taken from matrices 3d-58 and then modified
//11/22/2022 9:49 AM CST Tueday, the day right before thanksgiving break
//its 2022 not 2922 get it right
//people in 900 years:

var mouse={mousedown:false,x:0,y:0}
canvas.addEventListener('mousedown', initMove);
document.addEventListener('mousemove', move);
document.addEventListener('mouseup', stopMove);
function initMove(){mouse.mousedown=true;}
function stopMove(){mouse.mousedown=false;}
function move(evt){
  mouse.x=evt.clientX-canvas.width/2;
  mouse.y=evt.clientY-canvas.height/2;
  //console.log(
  var pos=getMousePos(canvas,evt);//);
  mouse.x=pos.x-canvas.width/2;
  mouse.y=pos.y-canvas.height/2;
}

//credit to stackoverflow for the below method...i had just reformatted it
function getMousePos(canvas,evt) {
  //abs. size of element
  var rect=canvas.getBoundingClientRect(),
    //relationship bitmap vs. element for x
    scaleX=canvas.width/rect.width,
    //relationship bitmap vs. element for y
    scaleY=canvas.height/rect.height;
  return{
    //scale mouse coordinates after they have
    x:(evt.clientX-rect.left)*scaleX,
    //been adjusted to be relative to element
    y:(evt.clientY-rect.top)*scaleY
  }
}

console.log("2 controls loaded!");