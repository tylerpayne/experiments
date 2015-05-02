document.addEventListener('DOMContentLoaded',function(){
    
    var button = document.getElementsByClassName("swing")[0];
    button.addEventListener("mouseover",function() {
        console.log(button.style);
    
    });
    
});