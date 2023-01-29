class Data{
  camera=new Camera(0,0,0,0,0);
  text=new Text(48,"serif","white");
  objects={};
  loopFunction=()=>{
    console.error("data.loopFunction(); not defined yet!");
  }
  render(){
    for(obj in objects){
      obj.render();
    }
  }
  addObject(name,object){
    this.objects[name]=object;
  }

  //update all object states -1/29/2023
  updateAllObjectStates(){
    var objectKeys=Object.keys(this.objects);
    for(var i=0;i<objectKeys.length;i++){
      this.objects[objectKeys[i]].updateObjectState();
    }
  }

  //reset the acceleration of all object accelerations and direction accelerations to zero
  //to avoid quadratic movement lol
  //-1/29/2023
  resetAllObjectAccelerations(){
    var objectKeys=Object.keys(this.objects);
    for(var i=0;i<objectKeys.length;i++){
      this.objects[objectKeys[i]].updateObjectState();
    }
  }
  
  //log a value only if the settings debug value is true -1/29/2023
  log(value){
    if(settings.debug){
      console.log(value);
    }
  }

  //errors a value only if the settings debug value is true -1/29/2023
  error(value){
    if(settings.debug){
      console.error(value);
    }
  }
  
  //check for undefined values all throughout the inputted object -1/29/2023
  //if no object is inputted then it will check all throughout the data object here
  //recursive function
  checkUndefined(object){
    object=object?object:this;
    //const lol
    const keys=Object.keys(object);
    
  }
}

var data=new Data();

//could also probably work as a 2d object as well
class object3d{
  //-1/29/2023
  constructor(json){
    //object position
    //movement position
    this.mp=json.mp?json.mp:[
      json.x?json.x:0,
      json.y?json.y:0,
      json.z?json.z:0,
    ];
    //object velocity
    //movement velocity
    this.mv=json.mv?json.mv:[
      json.vx?json.vx:json.xv?json.xv:0,
      json.vy?json.vy:json.yv?json.yv:0,
      json.vz?json.vz:json.zv?json.zv:0,
    ];
    //object acceleration
    //movement acceleration
    this.ma=json.ma?json.ma:[
      json.ax?json.ax:json.xa?json.xa:0,
      json.ay?json.ay:json.ya?json.ya:0,
      json.az?json.az:json.za?json.za:0,
    ];
    //object direction position
    //direction position
    this.dp=json.dp?json.dp:[
      json.dx?json.dx:0,
      json.dy?json.dy:0,
      json.dz?json.dz:0,
    ];
    //object direction velocity
    //direction velocity
    this.dv=json.dv?json.dv:[
      json.dvx?json.dvx:jsoc.dxv?json.dxv:0,
      json.dvy?json.dvy:json.dyv?json.dyv:0,
      json.dvz?json.dvz:json.dzv?json.dzv:0,
    ];
    //object direction acceleration
    //direction acceleration
    this.da=json.da?json.da:[
      json.dax?json.dax:json.dxa?json.dxa:0,
      json.day?json.day:json.dya?json.dya:0,
      json.daz?json.daz:json.dza?json.dza:0,
    ];
  }
  //mmm yes it will definitely only ever be dax instead of dxa for instance...
  
  //thanks chatgpt for the nice name! -1/29/2023
  updateObjectState(){
    this.updateObjectMotion();
    this.updateObjectDirection();
  }
  //update object motion -1/29/2023
  updateObjectMotion(){
    for(var i=0;i<dp.length;i++){
      //update the velocity first
      this.mv[i]+=this.ma[i];
      //update the position second
      this.mp[i]+=this.mv[i];
    }
  }
  //update object direction -1/29/2023
  updateObjectDirection(){
    for(var i=0;i<dp.length;i++){
      //update the velocity first
      this.dv[i]+=this.da[i];
      //update the position second
      this.dp[i]+=this.dv[i];
    }
  }

  //reset all object accelerations -1/29/2023
  resetAllAcceleration(){
    this.resetMotionAcceleration();
    this.resetDirectionAcceleration();
  }
  //reset only motion acceleration -1/29/2023
  resetMotionAcceleration(){
    for(var i=0;i<this.ma.length;i++){
      this.ma[i]=0;
    }
  }
  //reset only direction acceleration
  resetDirectionAcceleration(){
    for(var i=0;i<this.da.length;i++){
      this.da[i]=0;
    }
  }
}



console.log("4 classData loaded!");