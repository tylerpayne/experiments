document.addEventListener('DOMContentLoaded',function() {

var cube = document.getElementById("cube");
var x=0;
var y=0;

var sides = ['front','back','left','right','top','bottom'];
    

document.addEventListener("click",function(evt) {
    console.log('what');
    cube.style.transform = "scale(20,20,20)";


});

    
document.addEventListener("mousemove",function(evt) {
    x = evt.clientX - window.innerWidth/2.;
    y = evt.clientY - window.innerHeight/2.;
   // console.log(x,y);
    x = x/2.;
    y = y/2.;
    
    updatePerspective();    

});
    
function updatePerspective() {
    if (cube.className != "rotate") {
        cube.className = "rotate";
    }
    
   cube.style.transform = "rotateX("+y+"deg) rotateY("+x+"deg) translateX("+x+"px) translateY("+y+"px)";
    
}

});