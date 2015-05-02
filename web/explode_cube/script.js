document.addEventListener('DOMContentLoaded',function() {

var cube = document.getElementById("cube");
var container = document.getElementById("container");
var faces = document.getElementsByClassName("face");
 
cube.addEventListener("click",function(evt) {
    var anim = cube.className.indexOf('animate');
    if (anim == -1) {
        cube.className = cube.className + " animate";
    } else  {
        cube.className = cube.className.replace(" animate","");
    }
    //showSite();
    
});

    /*
for (i=0;i<faces.length;i++) {
    var face = faces[i];
    face.addEventListener("mouseover",function(evt) {
    
        var element = evt.target;
        if (element.parentNode.className.indexOf("animate") != -1) {
            console.log()
            element.className = element.className + " scale";
        
        }
    
    });
    
}
*/
document.addEventListener("wheel", function(evt) {
                          
    
});
    
function showSite() {

    var title = document.createElement('p');
    var text = document.createTextNode('experiments');
    title.appendChild(text);
    title.className = "title";
    
    container.appendChild(title);
    
    window.setTimeout(function(){title.className = title.className + " animate"},1000);

}
    
function animate(o) {

    //o.className = o.className + " animate"
    
}


});