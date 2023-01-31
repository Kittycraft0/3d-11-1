//copied Text from particles-3
//at 9/2/2022 2:09 PM CST Friday

//letters all finally made at 8/30/2022 10:13 AM CST Tuesday!!!
//now to test if my hypothesis of reversing all of their trajectories
//makes them go back in time basically is true!!!...
//i hope its true, it was a cool effect i had in mind...
//but if that somehow fails i guess i can just basically record their
//positions and play it back backwards though...

//yes!
var n=0;


//fps and time stuffs
var startTime=new Date().getTime();
var lastTime=new Date().getTime();

//maybe i should have gotten more used to using while(true){}s
//instead of these... these sure are nice but they are not in like
//any other language...
data.loopFunction=(code)=>{
  //pause();
  resetCanvasSize();
  //clear the canvas
  ctx.clear();
  //reset/use the text object
  //console.log(data);
  pause();

  //data.log(data.text);
  data.text.reset();
  //if(n>=1)
  //  pause();

  
  
  //make sure nothing isNaN
  //var objectKeys=Object.keys(data.objects);
  if(settings.detectUndefinedValues){
    data.checkUndefined();
  }
  
  //gets the keys to all objects
  //set it to something else as in some keys but not all to have
  //things only done to those some keys
  var objectKeys=Object.keys(data.objects);

  //set the acceleration of everything to 0
  data.resetAllObjectAccelerations();

  //make the balls move and orbit each other
  for(var i=0;i<objectKeys.length;i++){
    var rect=data.objects["box1"];
    if(settings.gravityBlackList[objectKeys[i]]!=1){
      for(var j=i+1;j<objectKeys.length;j++){
        if(settings.gravityBlackList[objectKeys[j]]!=1){
          data.objects[objectKeys[i]].attractBoth(
            data.objects[objectKeys[j]],settings.attractionMultiplier);
        }
      }
    }
  }
  
  
  //data.camera.updatePosition();
  
  var loopReturnValue=false;
  
  //run the code in paramter if inputted, otherwise don't try
  code?code:false;
  data.code?data.code():false;

  var objectKeys=Object.keys(data.objects);
  for(var i=0;i<objectKeys;i++){
    for(var j=i+1;j<objectKeys;j++){
      data.objects[i].attractBoth(data.objects[j]);
    }
  }

  //console.log(data.objects);
  //player ball stuffs
  //data.objects["ball1"].getControlsFromKeyboard();
  //data.objects["ball1"].move();
  //console.log(data.objects["ball1"].up);
  //data.objects["ball1"].vel[0]+=-.1;
  
  //for(var name in data.objects){
    //data.objects[name].updatePositionByVelocity();
  //}
  //data.objects["testGraph"].data[
  //  data.objects["testGraph"].data.length
  //]=data.objects["ball1"].vel[0];

  /*
  data.objects["ballPositionGraph"].addData(
    data.objects["ball1"].pos[0]);
  data.objects["ballPositionGraph"].cutData(1000);
  
  data.objects["ballVelocityGraph"].addData(
    data.objects["ball1"].vel[0]);
  data.objects["ballVelocityGraph"].cutData(1000);
  
  
  data.objects["ballAccelerationGraph"].addData(
    data.objects["ball1"].acc[0]);
  data.objects["ballAccelerationGraph"].cutData(1000);*/
  
  //center the camera on the blue square?
  //data.camera.pos[0]=Math.cos(n/10)*100;
  //data.camera.pos[1]=Math.sin(n/10)*100;
  //data.camera.scale=Math.sin(n/10);
  
  for(var i=0;i<objectKeys.length;i++){
    
    //update the positions
    //velocity should be in pixels per second not pixels per frame
    //well too bad i think i broke it...
    //data.objects[objectKeys[i]].updatePositionByVelocity();
    //data.objects[objectKeys[i]].updateVelocityByAcceleration();
    data.objects[objectKeys[i]].updateSpeeds()
    //data.objects[objectKeys[i]].updateSpeeds();
    //wall bounce
    data.objects[objectKeys[i]].wallBounce(rect);
  }
  
  //render the balls and objects and stuffs
  for(var name in data.objects){
    var theObject=data.objects[name];
    theObject.render();
  }

  //let the text be toggled on and off
  //for the possibility of great viewing pleasure
  if(!keyPressed(settings.toggleTextKey)){
    //text key is not pressed
    textKeyPressed=false;
  }
  if(keyPressed(settings.toggleTextKey)&&!textKeyPressed){
    //text key is pressed
    textKeyPressed=true;
    
    //toggle text
    settings.hideText=!settings.hideText;
  }
  //note for future: put toggle above implementation, not below
  //explanation of above: removes one frame delay, 
  //useful for intentionally (or unintentianally) simulations things

  //incrememnt n for frame count
  n++

  //get fps counter
  var currentTime=new Date().getTime();
  var frameTime=currentTime-lastTime;
  lastTime=currentTime;
  var theFPS=Math.round((1000/frameTime)*10)/10;
  
  //print the fps
  if(!settings.hideText) 
    data.text.println("FPS: "+theFPS);
  
  //get the amount of time that has elapsed since the start
  var time=(new Date().getTime()-startTime)/1000;

  //print the time
  if(!settings.hideText)
    data.text.println(`Time in seconds: ${time}`);
  //print the number of frames
  if(!settings.hideText)
    data.text.println(`Frames gone by so far: ${n}`);
  //print the number of objects
  if(!settings.hideText)
    data.text.println(`Number of objects: ${objectKeys.length}`);

  return(loopReturnValue);
}

console.log("6 loop loaded!");