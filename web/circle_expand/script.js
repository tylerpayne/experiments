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
    for (i=0;i<5;i++) {
    
        var circ = document.createElement('div');
        circ.className += 'circle';
        circ.style.backgroundColor = colors[i];
        (function(circ){
        
        
           circ.addEventListener('click',function(){
               var bg = document.getElementById('bg');
                if (bg) {
                    document.body.style.backgroundColor = circ.style.backgroundColor;
                    bg.style.width = '0%';
                    window.setTimeout(function(){document.body.removeChild(bg)}, 1200)
                
                } else {
                    var bg = document.createElement('div');
                    bg.id = 'bg';
                    bg.style.backgroundColor = circ.style.backgroundColor;
                    document.body.appendChild(bg);
                    window.setTimeout(function(){bg.style.width = '100%';},10);
                }
           });
        
        
        })(circ)
     
        
        container.appendChild(circ);
    }

});