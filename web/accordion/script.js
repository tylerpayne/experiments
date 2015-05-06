document.addEventListener('DOMContentLoaded',function(){
    
    var colors = [
        '#334D5C',
        '#45B29D',
        '#EFC94C',
        '#E27A3F',
        '#DF5A49',
        '#334D5C',
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

    var container = document.getElementById('container');
    var folds = [];
    
    for (i=0;i<4;i++) {
    
        var fold = document.createElement('div');
        fold.className += 'fold';
        if (i%2==0) {
            fold.className += ' odd';
            console.log(fold.style.transform);
            fold.style.transform = 'translateX(-'+i*100+'%) rotateY(90deg)';
            
        } else {
            fold.className += ' even';
            fold.style.transform = 'translateX(-'+i*100+'%) rotateY(-270deg)'
            
        }
        fold.style.backgroundColor = colors[i];
        folds.push(fold);
        container.appendChild(fold);
    
    }
    
    var isClicked = false;
    var mousepos = {x:0,y:0}
    document.addEventListener('mousedown',function(evt){
        
        isClicked = true;
        mousepos.x = evt.clientX;
        mousepos.y = evt.clientY;
    
    });
    
    document.addEventListener('mouseup',function() {
    
        isClicked = false;
    
    });
    
    document.addEventListener('mousemove',function(evt) {
    
        if (isClicked) {
            
            var dx = evt.clientX - mousepos.x; 
            console.log(dx);
            for (i=0;i<folds.length;i++) {
             
                var fold = folds[i];
                
                fold.style.transform = 'translateX('+dx+'px) rotateY('+Math.cos(dx)+'rad)';
                console.log(fold.style.transform);
            }
        
        }
    
    
    });


});