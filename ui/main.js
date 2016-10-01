console.log('Loaded!');
//manipulate html content

var mainText = document.getElementById('main-text');
mainText.innerHTML='New from Source';

//Move image
var img = document.getElementById('madi');
img.onClick=function(){
   img.style.marginLeft="100px";
}
