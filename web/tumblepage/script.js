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
    
    var stack = [];
    
    for (i=0;i<5;i++) {
    
        var page = document.createElement('div');
        page.className = (i==0) ? 'page current':'page next';
        page.style.backgroundColor = colors[i];
        
        (function(i,page){

            page.addEventListener('click',function(evt) {
                
                if (evt.clientY < window.innerHeight/2. && i > 0) {
                    
                    page.style.transformOrigin = '50% 0';
                    stack[i-1].className = 'page last animateIn'
                    page.className = 'page current animateLast';
                    
                    window.setTimeout(function(){page.className = 'page next';stack[i-1].className = 'page current';},750)
                
                } else if (i < 4 && evt.clientY > window.innerHeight/2.) {
                    
                    page.style.transformOrigin = '50% 100%';
                    stack[i+1].className = 'page next animateIn'
                    page.className = 'page current animateNext';
                    
                    window.setTimeout(function(){page.className = 'page last';stack[i+1].className = 'page current';},750)
                
                }
                
            
            });
            
        })(i,page)
        
         document.body.appendChild(page);
        
        stack.push(page);
    
    }


});