window.onload = ()=>{

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let a=Math.floor(Math.random()*(who.length-1));
let b=Math.floor(Math.random()*(action.length-1));
let c=Math.floor(Math.random()*(what.length-1));
let d=Math.floor(Math.random()*(when.length-1));

var frase= who[a]+" "+action[b]+" "+what[c]+" "+when[d];

document.querySelector("#randomExcuse").innerHTML= frase;
console.log(frase);
}
