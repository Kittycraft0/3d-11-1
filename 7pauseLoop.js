//copied and edited from Chase a little dot 2-1
//at 8/29/2022 2:47 PM CST Monday

//make the loop a variable
var loop=false;

//start the loop
var loop=setInterval(aLoop,settings.mspf);
//var loop=setInterval(data.loopFunction,settings.mspf);

function startLoop(){
  loop=setInterval(aLoop,settings.mspf);
  //loop=setInterval(data.loopFunction,settings.mspf);
}
function aLoop(){
  //this number is multiplied by like all velocities and stuffs
  data.loopFunction(1/60);
}

var escapePressed=false;
var gameRunning=true;

//pause loop ...
//copied from matrices-3d-58
//at 7/10/2022 1:23 PM CST Sunday
var pauseLoop=setInterval(()=>{
  if(!keyPressed("Escape")){
    escapePressed=false;
  }
  if(keyPressed("Escape")&&escapePressed==false){
    //escape key is pressed
    escapePressed=true;

    //check if the game is running or not
    if(gameRunning){
      //pause the game
      loop?clearInterval(loop):false;
    }else{
      //run the game
      loop?startLoop():animatedLinesLoop.newLoop();
    }
    
    //toggle gameRunning
    gameRunning=!gameRunning;
    
    //loopvariable=setInterval(waitloop,fps)

  }

},1000/60);
//function waitloop(){
//  if(!keys("Escape")){
//    escapepressed=false;
//  }
//  if(keys("Escape")&&escapepressed==false){
//    clearInterval(loopvariable);
//    escapepressed=true;
//    loopvariable=setInterval(loop,fps);
//  }
//}
//},1000/60);


//the pause loop
//function pauseLoop(){
//  loop.clearInterval();
//  loop=setInterval(()=>{
//    if(keyPressed("Escape")){
//      //startLoop();
//      loop.clearInterval();
//    }
//  },1000/60);
//}

//funny stuff happens if it is run multiple times
//startLoop();
//startLoop();
//startLoop();
//startLoop();

//start the loop
//*/
//startLoop();

//-9/6/2022 Tuesday 2:14 PM CST
//pause function
//usefull for the massive console.logs mid loop
function pause(){
  //copy/pasted/reformatted indentation/
  //modified to be one way from above
  
  //check if the game is running or not
  if(gameRunning){
    //pause the game
    loop?clearInterval(loop):false;
    //toggle gameRunning
    gameRunning=!gameRunning;
  }//else{
    //run the game
    //startLoop();
  //}
    
}

console.log("7 pauseLoop loaded");