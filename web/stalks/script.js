function toRadians (angle) {
    return angle * (Math.PI / 180.);
}

document.addEventListener('DOMContentLoaded',function(){
    
    var colors = [
        '#334D5C',
        '#45B29D',
        '#EFC94C',
        '#334D5C',
        '#DF5A49',
        '#E27A3F',
        '#45B29D',
        '#EFC94C',
        '#E27A3F',
        '#DF5A49',
        '#334D5C',
        '#45B29D',
        '#EFC94C',
        '#E27A3F',
        '#DF5A49'
    ];
    
    for (i=0;i<5;i++) {
        
        var wall = document.createElement('div');
        wall.className += 'wall';
        
        switch (i) {
            case 0:
                wall.style.transformOrigin = '50% 50%';
                wall.style.transform = 'translateZ(-'+window.innerWidth+'px)';
                wall.style.backgroundImage = '-webkit-linear-gradient(bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.5))';
                break;
            case 1:
                wall.style.height = ''+window.innerWidth+'px';
                wall.style.transformOrigin = '50% 0%';
                wall.style.transform = 'rotateX(-90deg)';
                wall.style.backgroundImage = '-webkit-linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.5))';
                break;
            case 2:
                wall.style.transformOrigin = '100% 50%';
                wall.style.transform = 'rotateY(-90deg)';
                wall.style.backgroundImage = '-webkit-linear-gradient(right, rgba(0,0,0,0),rgba(0,0,0,0.5))';
                break;
            case 3:
                wall.style.height = ''+(window.innerWidth)+'px';
                wall.style.transformOrigin = '50% 100%';
                wall.style.transform = 'translateY(-'+(window.innerWidth - window.innerHeight)+'px) rotateX(90deg)';
                wall.style.backgroundImage = '-webkit-linear-gradient(bottom, rgba(0,0,0,0),rgba(0,0,0,0.5))';
                break;
            case 4:
                wall.style.transformOrigin = '0% 50%';
                wall.style.transform = 'rotateY(90deg)';
                wall.style.backgroundImage = '-webkit-linear-gradient(left, rgba(0,0,0,0),rgba(0,0,0,0.5))';
                break;
        
        }
        
        document.body.appendChild(wall);
        
    
    }
    
    
     var mouse = {x:window.innerWidth/2,y:window.innerHeight/2};
        var perspective = {x:50,y:50};
        
        document.addEventListener('mousemove',function(evt){
        
            var d = {
                x: evt.clientX - mouse.x,
                y: evt.clientY - mouse.y
            }
            
            mouse.x = evt.clientX;
            mouse.y = evt.clientY;
            
            if (perspective.x > 25 && perspective.x < 75) {
            
                perspective.x = perspective.x - (d.x/35);
                
            }
            
            if (perspective.y > 25 && perspective.y < 75) {
            
                perspective.y = perspective.y - (d.y/35);
                
            }
            
            document.body.style.perspectiveOrigin = ''+perspective.x+'% '+perspective.y+'%';
        
        });
    
    for (i=0;i<5;i++) {
        
        var stalk = document.createElement('div');
        stalk.className = 'stalk';
        
        var pos = {x: window.innerWidth - 200*i,
                  y: 0,
                  z: window.innerWidth - 100*i}
        
        stalk.style.transformOrigin = '0% 100%';
        stalk.style.transform = 'translate3d('+ pos.x +'px,'+(window.innerWidth)+'px,-'+pos.z+'px)';
        stalk.style.backgroundColor = colors[i];
        
        document.body.appendChild(stalk);
    
    
    }
    

});