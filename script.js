//this place can be used for tests i guess -1/30/2022
//experimental lab!? sure!?

/*
console.log(typeof "h"); //string
console.log(typeof 6);   //number
console.log(typeof {});  //object
console.log(typeof []);  //object
console.log(typeof (()=>{console.log("why");})); //function
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number
console.log(NaN==NaN); //false
console.log(undefined==undefined); //true
console.log(NaN===NaN); //false
console.log(undefined===undefined); //true
console.log(typeof undefined===undefined); //false...
console.log(typeof undefined==="undefined"); //true... rip strings
*/

/*
var value=undefined;
if(typeof value==="undefined"||(typeof value==="number"&&isNaN(value))){
  console.log("value is either NaN or undefined!!!");
}
function isNaNorUndefined(value){
  return(
    typeof value==="undefined"||
    (typeof value==="number"&&isNaN(value))
  );
}
var values=[6,64,"2","a3",{},[],()=>{"no";},undefined,NaN];
for(var i in values){
  //console.log(i);
  console.log(isNaNorUndefined(values[i]));
  //perfect! great!
}
*/
//console.log("Script ran!");
setInterval(()=>{
  //ctx.fillStyle="red";
  //ctx.beginPath();
  //ctx.rect(10,10,30,30);
  //ctx.fill();
},1000/60);

//console.log(isNaN(()=>{console.log("oranges");}));
//console.log(undefined===(()=>{console.log("oranges");}));
//console.log(undefined==NaN);
//console.log(undefined===NaN);
//console.log(isNaN(undefined));


console.log("Script ran!");