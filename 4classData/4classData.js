class Text{
  //constructor(size,font,color){
  constructor(json){
    json=json?json:{};
    this.size=json.size?json.size:48;
    this.font=json.font?json.font:"serif";
    this.color=json.color?json.color:"none";
    this.line=json.line?json.line:1;
  }
  reset(){
    this.line=1;
  }
  println(text,color){
    //"convert to template string" suggestion...?
    ctx.font=`${this.size}px ${this.font}`;
    ctx.beginPath();
    ctx.fillStyle=color?color:this.color;
    ctx.fillText(
      text,
      -canvasWidth/2,-canvasHeight/2+this.size*this.line);
    //this ? : single line conditionals thing is so nice!
    //console.log(ctx.fillStyle);
    ctx.fill();
    ctx.closePath();
    this.line++;
  }
}

class Data{
  //camera=new Camera(0,0,0,0,0);
  camera="to-be-defined object or object path";
  //text=new Text(48,"serif","white");
  text=new Text();//"to-be-defined object or object path";
  objects={};
  loopFunction=()=>{
    console.error("data.loopFunction(); not defined yet!");
  }
  //constructor -1/29/2023
  constructor(json){
    json=json?json:{};
    this.camera=json.camera?json.camera:this.camera;
    this.text=json.text?json.text:this.text;
    this.objects=json.objects?json.objects:this.objects;
    this.loopFunction=json.loopFunction?json.loopFunction:this.loopFunction;
  }
  //render all -1/29/2023
  render(){
    for(obj in objects){
      obj.render();
    }
  }
  //add an object -before 1/29/2023
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
  //reset the acceleration of all object accelerations and direction 
  //accelerations to zero to avoid quadratic movement -1/29/2023
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
  
  //check for undefined values all throughout the inputted object
  //if no object is inputted then it will check all throughout the 
  //data object here
  //recursive function -1/29/2023
  checkUndefined(object,path){
    object=object?object:this;
    path=path?path:"data";
    var containsUndefined=false;
    const keys=Object.keys(object);
    for(var i=0;i<keys.length;i++){
      const newPath=path+"."+keys[i];
      if(typeof object[keys[i]]==="object"){
        //check if it contains undefined
        var checkedUndefined=
          this.checkUndefined(object[keys[i]],newPath);
        containsUndefined=checkedUndefined?true:containsUndefined;
      }else{
        //if(isNaN(object[keys[i]])||object[keys[i]]===undefined){
        if(isNaNorUndefined(object[keys[i]])){
          data.log(newPath+" is \"undefined\"!");//+object[keys[i]]);
        }
      }
    }
    
    return(containsUndefined);
  }
}

//var data=new Data();
//data.log(data.checkUndefined());
//data.log(data.loopfunction);

//could also probably work as a 2d object as well -1/29/2023
//although maybe not if attraction works in all three dimensions
//since small errors turning the z of 0 to not 0 could possibly
//mess up the objects falling towards each other though -1/31/2023
class object3d{
  //the constructor -1/29/2023
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

    //model
    this.model=json.model?json.model:"box1";
  }
  
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
  //reset only direction acceleration -1/30/2023
  resetDirectionAcceleration(){
    for(var i=0;i<this.da.length;i++){
      this.da[i]=0;
    }
  }

  //add acceleration to movement -1/31/2023
  accelerate(list){
    for(var i in list){
      ma[i]+=list[i];
    }
  }
  //add acceleration to viewing direction -1/31/2023
  accelerateView(list){
    for(var i in list){
      da[i]+=list[i];
    }
  }

  //decay movement velocity -1/31/2023
  decayMovement(num){
    num=num?num:settings.defaultMovementDecay;
    for(var i in mv){
      mv[i]*=num;
    }
  }
  //decay direction velocity -1/31/2023
  decayDirection(num){
    num=num?num:settings.defaultDirectionDecay;
    for(var i in mv){
      dv[i]*=num;
    }
  }

  //render function
  render(){
    
  }
  
}


console.log("4 classData loaded!");