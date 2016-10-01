console.log('Loaded!');
//manipulate html content

var mainText = document.getElementById('main-text');
mainText.innerHTML='New from Source';

//Move image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft+=10;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
   var interval = setInterval(moveRight,100);
};
