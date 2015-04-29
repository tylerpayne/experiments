document.addEventListener('DOMContentLoaded',function(){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var particles = [];
var colors = ['lightgray','cyan','white'];
var mouseX;
var mouseY;
var mouseVX = 0;
var mouseVY = 0;
    
var Particle = function() {
  this.x = (Math.random()*1600)-(Math.random()*1600);
  this.y = (Math.random()*900)-(Math.random()*900);
  this.vx = (0.6-Math.random())*2;
  this.vy =  (0.6-Math.random())*2;
  this.radius = Math.random()*2;
  this.color = colors[Math.floor(Math.random()*5)];
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};

for (i = 0; i < 5000; i++) { 
    var p = new Particle();
    particles.push(p);
}
    
canvas.addEventListener('mousemove',function(evt) {
    var scene = canvas.getBoundingClientRect();
    x = evt.clientX - scene.left - 50;
    y = evt.clientY - scene.top - 50;
    mouseVX = mouseX - x; 
    mouseVY = mouseY - y;
    mouseX = x;
    mouseY = y;
},false);
    
function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  for (i = 0; i< particles.length; i ++) {
      var p = particles[i];
      if (p.x < mouseX + 50 && p.x > mouseX - 50 && p.y < mouseY + 50 && p.y > mouseY - 50) {
          if (p.radius < 3) {
              p.radius += p.radius*0.3
          }
          if (p.vx < 5) {
            p.vx += p.vx*0.05 - mouseVX*0.1;
          }
          if (p.vy < 5) {
            p.vy += p.vy*0.05 - mouseVY*0.1;
          }
          p.color = 'yellow';
      } else {
          if (p.radius > 1) {
              p.radius -= p.radius*0.1
          }
          if (p.vx > 0.5) {
            p.vx -= p.vx*0.1
          }
          if (p.vy > 0.5) {
            p.vy -= p.vy*0.1
          }
        p.color = 'cyan';
      }
      
      p.draw();
      /*for (z=0; z< particles.length; z++){
        if (p.x < particles[z].x + particles[z].radius && p.x > particles[z].x && p.y < particles[z].y + particles[z].radius && p.y > particles[z].y) {
          p.vy = -p.vy + particles[z].vy;
            p.vx = -p.vx + particles[z].vx;
          p.color = 'green';
      }
      }*/
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.y + p.vy > canvas.height || p.y + p.vy < 0) {
        p.vy = -p.vy;
      }
      if (p.x + p.vx > canvas.width || p.x + p.vx < 0) {
        p.vx = -p.vx;
      }    
  }
  raf = window.requestAnimationFrame(draw);
}
    
raf = window.requestAnimationFrame(draw);


});