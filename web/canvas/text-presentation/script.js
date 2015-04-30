document.addEventListener('DOMContentLoaded',function(){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var raf;
var particles = [];
var color = 0;
var colors = ['cyan','yellow','yellow','green','orange','red','purple'];
var mouseX;
var mouseY;
var mouseVX = 0;
var mouseVY = 0;
var gravity = false;
    
var Particle = function() {
  this.pos = {x:(Math.random()*1600)-(Math.random()*1600),
              y:(Math.random()*900)-(Math.random()*900)} ;
  this.velocity = {x: (0.6-Math.random())*2,
                   y: (0.6-Math.random())*2};
  this.radius = Math.min(3,Math.random()*10);
    this.min_radius = Math.min(Math.random()*10,3);
  this.color = colors[Math.floor(Math.abs(Math.random()*3))];
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};
    
function reset() {
particles=[]
for (i = 0; i < 1000; i++) { 
    var p = new Particle();
    particles.push(p);
}
}
    
reset();

    
canvas.addEventListener('mousemove',function(evt) {
    var scene = canvas.getBoundingClientRect();
    x = evt.clientX - scene.left;
    y = evt.clientY - scene.top;
    mouseVX = mouseX - x; 
    mouseVY = mouseY - y;
    mouseX = x;
    mouseY = y;
},false);
    
canvas.addEventListener('mousedown',function(evt) {
    gravity = true;
},false);
canvas.addEventListener('mouseup',function(evt) {
    gravity = false;
},false);
canvas.addEventListener('dblclick',function(evt) {
    reset();
},false);

function detectCollisions(p) {

}

var intro = 200;
    
function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
    if (intro > 0) {
        intro -= 1;
        ctx.fillStyle = "rgba(255,255,255,"+intro/100.+")";
        ctx.font = '24pt Helvetica';
        ctx.fillText("Move Mouse to Swat, Click to Attract",canvas.width/2. - 240,canvas.height/2.);
    }
  for (i = 0; i< particles.length; i ++) {
      var p = particles[i];
      if (gravity == true) {
        p.velocity.x += (mouseX - p.pos.x)*0.0001;
        p.velocity.y += (mouseY - p.pos.y)*0.0001;
      } else if (p.pos.x < mouseX + 50 && p.pos.x > mouseX - 50 && p.pos.y < mouseY + 50 && p.pos.y > mouseY - 50) {
          if (p.radius < 5) {
              p.radius += p.radius*0.3
          }
          if (p.velocity.x < 5) {
            p.velocity.x += p.velocity.x*0.05 - mouseVX*0.1;
          }
          if (p.velocity.y < 5) {
            p.velocity.y += p.velocity.y*0.05 - mouseVY*0.1;
          }
      } else {
          if (p.radius > p.min_radius) {
              p.radius -= p.radius*0.1
          }
          if (p.velocity.x > 0.5) {
            p.velocity.x -= p.velocity.x*0.05
          }
          if (p.velocity.y > 0.5) {
            p.velocity.y -= p.velocity.y*0.05
          }
      }
      for (z = 0; z < particles.length; z ++) {
        var j = particles[z]
        if (z != i) {
            if (j.pos.x < p.pos.x + p.radius*1.5 && j.pos.x > p.pos.x-p.radius*0.5 && j.pos.y < p.pos.y + p.radius*1.5 && j.pos.y > p.pos.y-p.radius*0.5) {
                j.color = p.color;
                oldvx = p.velocity.x;
                oldvy = p.velocity.y;
                p.velocity.x = -p.velocity.x + j.velocity.x*0.5;
                p.velocity.y = -p.velocity.y + j.velocity.y*0.5;
                j.velocity.x = -j.velocity.x + oldvx*0.5;
                j.velocity.y = -j.velocity.y + oldvy*0.5;
            }
        }
    }
      //p.color = colors[color];
      p.draw();
      /*for (z=0; z< particles.length; z++){
        if (p.x < particles[z].x + particles[z].radius && p.x > particles[z].x && p.y < particles[z].y + particles[z].radius && p.y > particles[z].y) {
          p.vy = -p.vy + particles[z].vy;
            p.vx = -p.vx + particles[z].vx;
          p.color = 'green';
      }
      }*/
      
      p.pos.x += p.velocity.x;
      p.pos.y += p.velocity.y;
      
      if (p.pos.y + p.velocity.y > canvas.height || p.pos.y + p.velocity.y < 0) {
        p.velocity.y = -p.velocity.y;
      }
      if (p.pos.x + p.velocity.x > canvas.width || p.pos.x + p.velocity.x < 0) {
        p.velocity.x = -p.velocity.x;
      }    
  }
  raf = window.requestAnimationFrame(draw);
}
    
raf = window.requestAnimationFrame(draw);


});