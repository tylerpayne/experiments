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
    var unfold = document.getElementById('unfold');
    var folds = [];
    var open = false;
    
    unfold.addEventListener('click',function(){
        var fold;
        if (open == false) {
        open = true;
        for (i=0;i<5;i++) {
            (function(fold) {
            
                var fold = document.createElement('div');
                fold.style.backgroundColor = colors[i];
                fold.className = 'fold';
                fold.style.zIndex = 5-i;
                if (i == 4) {
                    fold.className += ' last';
                }    
                console.log(fold.style.transform);
                window.setTimeout(function(){
                    container.appendChild(fold);
                    window.setTimeout(function(){
                        
                        fold.className += ' open';                    
                    },1);
                    
                },300*i)
                folds.push(fold);
            })(fold)
            
        
        
        }
        } else {
            open = false;
            var fold;
            for (z=4;z>-1;z--) {
                fold = folds[z];
                (function(fold) {
                
                
                 console.log(fold);
                window.setTimeout(function(){
                    fold.className = "fold close"; 
                    window.setTimeout(function(){container.removeChild(fold);},350);
                },(4-z)*350);
                
                })(fold)
               
                
            
        }
            
            folds = [];
        }
        
    });
    





});