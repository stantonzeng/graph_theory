const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let posX = canvas.width/2;
let posY = canvas.height/2;
console.log("posX: ", posX);
console.log("posY: ", posY);

let a = [];
let b = [];

let radius = 0;
let h = posX;
let k = posY;
let incr = 0;
let counter = 0;

let x_val = 0;
let y_val = 0;

let val = 0;



function findCircle(rad, cord1, cord2, val, count){ 
  return count*(Math.sqrt((rad**2) - Math.pow(val - cord1, 2))) + cord2;
}

function sideParabola(y, h, k, a){ //Facing either left(-a) or right(a). 
  return a*Math.pow((y-k),2) + h;
}

//--------------------------------------------------------------------

let zero_x = [];
let zero_y = [];

radius = 50;


//remember, position (0,0) starts at the top left side of the screen

incr = 10;

counter = -1;

x_val = h - radius;
y_val = 0;

for(let i = 0; i < 20; i++){
  
  if(i != 5 || i != 15){
    if(i == 10){
      counter = 1;
    }
    x_val -= incr*counter;
    zero_x.push(x_val);
    zero_y.push(findCircle(radius, h, k, x_val, counter));
  }
}

console.log("zero size: ", zero_x.length);
//-------------------------------------------------------------------

let one_x = [];
let one_y = [];

x_val = h;
y_val = k-50;

for(let i = 0; i < 20; i++){
  one_x.push(x_val);
  one_y.push(y_val);
  y_val += 105/20;
}

console.log("one size: ", one_x.length);
//-------------------------------------------------------------------

let two_x = [];
let two_y = [];
radius = 40;
h = posX;
k = posY;

x_val = h-40;
y_val = k - 10;

for(let i = 0; i <= 8; i++){
  if(i != 0){
    two_x.push(x_val);
    val = findCircle(radius, h, k, x_val, -1);
    if(i == 8){
      val -= 5;
    }
    two_y.push(val);
  }
  x_val += 10;
}

x_val = x_val-10;
y_val = y_val;

for(let i = 0; i < 6; i++){
  x_val -= 12;
  y_val += 50/6;
  two_x.push(x_val)
  two_y.push(y_val)
}
x_val = x_val + 10;
y_val = y_val;
for(let i = 0; i < 6; i++){
  x_val += 10;
  two_x.push(x_val);
  two_y.push(y_val);
}
console.log("two size: ", two_x.length);
//-------------------------------------------------------------------

let three_x = [];
let three_y = [];

h = posX;
k = posY;

x_val = h;
y_val = k-50;

for(let i = 0; i < 10; i++){
  // console.log(sideParabola(y_val, k-25, h+40, -0.07));
  three_x.push(sideParabola(y_val, h+25, k-25, -0.07));
  three_y.push(y_val);
  // console.log(sideParabola(y_val, k-25, h+40, -0.07), y_val)
  y_val += 5;
}

x_val = x_val;
y_val = y_val + 5;
for(let i = 0; i < 10; i++){
  three_x.push(sideParabola(y_val, h+25, k+25, -0.07));
  three_y.push(y_val);
  // console.log(sideParabola(y_val, k+25, h+40, -0.07), y_val)
  y_val += 5;
}

console.log("three size: ", three_x.length);

//-------------------------------------------------------------------

let four_x = [];
let four_y = [];

h = posX;
k = posY;

x_val = h-25;
y_val = k-40;
for(let i = 0; i < 5; i++){
  four_x.push(x_val);
  four_y.push(y_val);
  y_val += 10;
}

x_val = h-25;
y_val = k+10;

for(let i = 0; i < 7; i++){
  four_x.push(x_val);
  four_y.push(y_val);
  x_val += 10;
}

y_val -= 50;
x_val -= 30;
for(let i = 0; i < 8; i++){
  four_x.push(x_val);
  four_y.push(y_val);
  y_val += 10;
}

console.log("four size: ", four_x.length);

//-------------------------------------------------------------------

let five_x = [];
let five_y = [];

h = posX;
k = posY;

x_val = h+30;
y_val = k-50;

for(let i = 0; i < 3; i++){//Top portion
  five_x.push(x_val);
  five_y.push(y_val);
  x_val -= 80/4;
}

x_val = x_val;
y_val = k-50;

for(let i = 0; i < 3; i++){//Going down
  five_x.push(x_val);
  five_y.push(y_val);
  y_val += 60/3;
}

x_val = x_val;
y_val = y_val;

for(let i = 0; i < 4; i++){//going right again
  five_x.push(x_val);
  five_y.push(y_val);
  x_val += 60/4;
}

x_val = x_val;
y_val = y_val;
// console.log(y_val, h);

// (Math.sqrt((20**2) - Math.pow(y_val - h, 2))) + k
// console.log(Math.pow(y_val - k, 2));
// console.log(Math.sqrt((20**2) - Math.pow(y_val - k, 2)));

for(let i = 0; i < 5; i++){
  x_val = findCircle(30, k+30, h+5, y_val, 1)
  five_x.push(x_val);
  five_y.push(y_val);
  y_val += 10;
}

x_val = x_val;
y_val = y_val - 8;

for(let i = 0; i < 5; i++){
  five_x.push(x_val);
  five_y.push(y_val);
  x_val -= 15;
}

console.log("five size: ", five_x.length);
//-------------------------------------------------------------------

let six_x = [];
let six_y = [];

h = posX;
k = posY;

radius = 40;

x_val = h+30;
y_val = k;

for(let i = 0; i < 5; i++){
  y_val = findCircle(radius, h, k-10, x_val, -1);
  console.log("y_val:" ,y_val);
  six_x.push(x_val);
  six_y.push(y_val);
  x_val -= 80/5;
}

x_val = x_val + 80/5;
y_val = y_val;

for(let i = 0;i < 5; i++){
  six_x.push(x_val);
  six_y.push(y_val);
  y_val += 15;
}



k = y_val-40;
x_val = x_val + 80/5;
y_val = y_val;

// console.log("h: ", h);
// console.log("k: ", k);  
// console.log(Math.pow(715.5 - h, 2));
// console.log(Math.sqrt((40**2) - Math.pow(x_val - h, 2)));
//count*(Math.sqrt((rad**2) - Math.pow(val - cord1, 2))) + cord2;

for(let i = 0; i < 5; i++){
  six_x.push(x_val);
  console.log(findCircle(radius, h, k, x_val, 1));
  six_y.push(findCircle(radius, h, k, x_val, 1));
  x_val += 60/5;
}
x_val -= 60/5;
for(let i = 0; i < 5; i++){
  six_x.push(x_val);
  console.log(findCircle(radius, h, k+40, x_val, -1));
  six_y.push(findCircle(radius, h, k+40, x_val, -1));
  x_val -= 60/5;
}

console.log("six size: ", six_x.length);

//-------------------------------------------------------------------

let seven_x = [];
let seven_y = [];

console.log("seven size: ", seven_x.length);

//-------------------------------------------------------------------

let eight_x = [];
let eight_y = [];

console.log("eight size: ", eight_x.length);

//-------------------------------------------------------------------

let nine_x = [];
let nine_y = [];

console.log("nine size: ", nine_x.length);

//-------------------------------------------------------------------

var pause = false;
var start = new Date();
var elapsed = new Date();

let outerParticlesArray;
h = posX;
k = posY;
function drawBox(){
  // set line stroke and line width
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;

  // draw a red line
  ctx.beginPath();
  ctx.moveTo(h-50, k-50);
  ctx.lineTo(h+50, k-50);
  ctx.lineTo(h+50, k+50);
  ctx.lineTo(h-50, k+50);
  ctx.lineTo(h-50, k-50);
  ctx.stroke();


}

class outerParticle{
  constructor(x,y, directionX, directionY, size, color){
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  //draw method
  draw(){
    drawBox();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = '#8C5523';
    ctx.fill();
  }
  changeDirection(newX, newY){
    this.directionX = newX;
    this.directionY = newY;
  }
  slowDown(){

  }
  update(){
    //If reaches end of screen, then update
    if(this.x > canvas.width || this.x < 0){
      this.directionX = -this.directionX;
    }
    if(this.y > canvas.height || this.y < 0){
      this.directionY = -this.directionY;
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.changeDirection(this.directionX, this.directionY);
    this.draw();
  }
  
}

function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function init(){
  outerParticlesArray = [];
  // let numberOfParticles = (canvas.height * canvas.width)/90000; //Should produce 20 dots, (1860480/90000) = 20.6
  let numberOfParticles = 100;

  for(let i = 0; i < numberOfParticles; i++){
    let size = getRandomNumberBetween(3, 7);
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
    let directionX = (Math.random() * 5) - 2.5;
    let directionY = (Math.random() * 5) - 2.5;
    let color = '#8C5523';

    outerParticlesArray.push(new outerParticle(x, y, directionX, directionY, size, color));
  }
}

function animate(){
  requestAnimationFrame(animate);
  elapsed = new Date();
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for(let i = 0; i < outerParticlesArray.length; i++){
    outerParticlesArray[i].update();
  }
}

function animate_test(){
  requestAnimationFrame(animate_test);
  for(let i = 0; i < 20; i++){
    let part = outerParticlesArray[i];
    part.changeDirection(((a[i] - part.x)/20), ((b[i] - part.y)/20));
  }
}

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "0") {
    a = zero_x;
    b = zero_y;
    animate_test();
  }
  else if (event.key === "1") {
    a = one_x;
    b = one_y;
    animate_test();
  }
  else if (event.key === "2") {
    a = two_x;
    b = two_y;
    animate_test();
  }
  else if (event.key === "3") {
    a = three_x;
    b = three_y;
    animate_test();
  }
  else if (event.key === "4") {
    a = four_x;
    b = four_y;
    animate_test();
  }
  else if (event.key === "5") {
    a = five_x;
    b = five_y;
    animate_test();
  }
  else if (event.key === "6") {
    a = six_x;
    b = six_y;
    animate_test();
  }
  else if (event.key === "7") {
    a = seven_x;
    b = seven_y;
    animate_test();
  }
  else if (event.key === "8") {
    a = eight_x;
    b = eight_y;
    animate_test();
  }
  else if (event.key === "9") {
    a = nine_x;
    b = nine_y;
    animate_test();
  }

});

init();
animate();