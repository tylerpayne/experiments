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

    var container = document.getElementById('container');
    var pages = [];
    var numPages = 6;
    
    for (i=5; i>-1; i--) {
    
        var page = document.createElement('div');
        page.className += 'page';
        
        var x;
        var y;
        var angle;
        var cos = Math.cos(toRadians(60));
        var sin = Math.sin(toRadians(60));
        var r = window.innerHeight;
        switch (i) {
            case 0:
                x = 0;
                y = 0;
                angle = 30;
                break;
            case 1:
                x = (r * cos);
                y = -(r * sin);
                angle = 90;
                break;
            case 2:
                x = (r*cos) + r;
                y = -(r*sin);
                angle = 150;
                break;
            case 3:
                x = 2*(r*cos) + r;
                y = 0;
                angle = 210;
                break;
            case 4:
                x = (r*cos) + r;
                y = (r*sin);
                angle = 270;
                break;
            case 5:
                x = r*cos;
                y = (r*sin);
                angle = 330;
                break;
        }
        
        page.style.backgroundColor = colors[i];
        page.style.width = '100%';
        page.style.height = '100%';
        page.style.position = 'absolute';
        page.style.transform = "translate3d(0,"+ y +"px,"+ -x +"px) rotateX("+angle+"deg)";
        container.appendChild(page);
        

    }
   

});