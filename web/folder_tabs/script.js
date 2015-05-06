
function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}



document.addEventListener('DOMContentLoaded',function(){
    
    var colors = [
        '#334D5C',
        '#45B29D',
        '#EFC94C',
        '#DF5A49',
    ];
    var tabs = document.getElementsByClassName('tab');
    var tab;
    for (i=tabs.length-1;i > -1; i--) {
    
        tab = tabs[i];
        if (typeof window.addEventListener === 'function'){
        (function (tab) {
            tab.style.backgroundColor = colors[i]
            tab.style.color = ColorLuminance(colors[i], -0.1);
            tab.style.textShadow = '1px 1px 1px '+ColorLuminance(colors[i],0.5)+' ';
             var oldstyle = tab.style.height;
            if (i==tabs.length-1) {
            
                tab.style.height =window.innerHeight - ((tabs.length-1)*50); 
                oldstyle = tab.style.height;
            
            }
            tab.addEventListener('mouseover', function(){
                tab.style.height = window.innerHeight - ((tabs.length-1)*50);
            });
            tab.addEventListener('mouseleave', function(){
                tab.style.height = oldstyle;
            });
        })(tab);
        }
    }
    
});