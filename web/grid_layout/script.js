function updateLayout(evt) {
    
    var row = evt.target.parentElement;
    var block = evt.target;
    
    row.style.height = 500;
    block.style.width = 500;

}



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
    var grid = document.getElementById('grid');
    var max_w = window.innerWidth-5;
    var big_h = window.innerHeight
    
    for (r=0;r<5;r++) {
    
        var row = document.createElement('div');
        row.className = 'row';
        row.style.width = '100%';
        row.style.height = 300;
        
        var rowWidth = 0;
        
        for (c=0;c<3;c++){
        
            var block = document.createElement('div');
            block.className = 'block';
            block.style.backgroundColor = colors[Math.floor(c+Math.random()*10)];
            
            block.style.width = max_w/3.;
            block.style.height = '100%';
            
            block.addEventListener('mouseover', function(evt){
            
                evt.target.parentElement.style.height = 500;
                evt.target.style.width = 500;
                var children = evt.target.parentElement.children;
                for (z=0;z<children.length;z++) {
                    
                    if (children[z] != evt.target) {
                        children[z].style.width = (max_w-500)/2.
                    }
                
                }
            
            });
            
            block.addEventListener('mouseleave', function(evt){
                
                evt.target.parentElement.style.height = 300;
                var children = evt.target.parentElement.children;
                for (z=0;z<children.length;z++) {
                    
                    children[z].style.width = max_w/3.
                
                }
            
            });
            
            row.appendChild(block);
        }

        
        
        
        grid.appendChild(row);
    
    
    
    }
    
    
    
});