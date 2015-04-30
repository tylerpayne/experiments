document.addEventListener('DOMContentLoaded',function() {

var cube = document.getElementById("cube");
 
cube.addEventListener("click",function(evt) {
    var anim = cube.className.indexOf('animate');
    if (anim == -1) {
        cube.className = cube.className + "animate";
    } else {
        cube.className = cube.className.replace("animate",'');
    }
    
    
});
    
    

});