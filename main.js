/*jshint esversion: 6 */

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
//畫布尺寸

var ww = window.innerWidth;
var wh = window.innerHeight;

let degToPi = Math.PI*2/360;

canvas.width = ww;
canvas.height = wh;

var ship = {
  x: 0,
  y: 0,
  deg: 0,
  r: 70
};


// class Ship {
//   constructor(args) {
//     let def = {
//       x: 0,
//       y: 0,
//       r: 50,
//       deg: 50*degToPi
//     };
//     object.assign(def,args);
//     object.assign(this,def);
//   }
// }
// var ship = 0;

function init() {
  ship.deg = 0;
  // ship.x = Math.random() * ww;
  // ship.y = Math.random() * wh;
}

function update() {
  // ship.x += 1;
  // ship.y += 0.5;
  ship.deg = mousePos.x/50;
  // console.log(mousePos);
  // ship.deg += 0.05;
}

function draw() {
  ctx.fillStyle = "#001D2E";
  ctx.fillRect(0, 0, ww, wh);

  //格線
  let span = ship.r;
  ctx.beginPath();
  for (var i = 0; i < ww; i += span) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, wh);
  }
  for (var i = 0; i < wh; i += span) {
    ctx.moveTo(0, i);
    ctx.lineTo(ww, i);
  }
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.stroke();

  //船
  ctx.save();

  ctx.translate(ww / 2, wh / 2);
  ctx.rotate(ship.deg);


  ctx.fillStyle = "white";
  ctx.fillRect(100,-25/2,25,25);

  ctx.beginPath();
  ctx.arc(0, 0, ship.r, 0, Math.PI * 2);
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 15;


  ctx.shadowBlur = 20;
  ctx.shadowColor = "white";
  ctx.stroke();

  for (var i = 0; i < 3; i++) {
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -ship.r);
    ctx.stroke();
    ctx.rotate(Math.PI * 2 / 3);
  }

  ctx.restore();

  ctx.fillStyle = "white";
  ctx.fillRect(ship.x, ship.y, 50, 50);

  requestAnimationFrame(draw);
}

init();
let fps = 60;
setInterval(update, 1000 / fps);
requestAnimationFrame(draw);


var mousePos = {
  x: 0,
  y: 0,
};
canvas.addEventListener("mousemove", function(event) {
  // console.log(event.x,event.y);
  mousePos.x = event.x;
  mousePos.y = event.y;
});