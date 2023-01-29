
console.log("Script ran!");
setInterval(()=>{
  ctx.fillStyle="red";
  ctx.beginPath();
  ctx.rect(10,10,30,30);
  ctx.fill();
},1000/60);