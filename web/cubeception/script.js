var Cube = function() {

    var cube = document.createElement('section');
    cube.className = 'cube';
    
    var lf = document.createElement('section');
    lf.className = 'left face';
    
    var rf = document.createElement('section');
    rf.className = 'right face';
    
    var tf = document.createElement('section');
    tf.className = 'top face';
    
    var bof = document.createElement('section');
    bof.className = 'bottom face';
    
    var ff = document.createElement('section');
    ff.className = 'front face';
    
    var baf = document.createElement('section');
    baf.className = 'back face';
    
    cube.appendChild(lf);
    cube.appendChild(rf);
    cube.appendChild(tf);
    cube.appendChild(bof);
    cube.appendChild(ff);
    cube.appendChild(baf);
    
    
    return cube;
}

document.addEventListener('DOMContentLoaded',function() {
    
    var cube = Cube();
    
    var container = document.getElementById('container');

    container.appendChild(cube);
    
});

