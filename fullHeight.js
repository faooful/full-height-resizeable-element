var NAME_VARIABLE = document.getElementById('NAME_OF_DIV');
NAME_VARIABLE.style.height =  (window.innerHeight || document.documentElement.clientHeight) - 40 + 'px';
 
window.onresize = function() {
    NAME_VARIABLE.style.height =  (window.innerHeight || document.documentElement.clientHeight) - 40 + 'px';
}; 