console.log('Loaded!');
var serverPath='localhost:8080'; 
//var serverPath='variarp.imad.hasura-app.io'; //hasura site
//manipulate html content

//var mainText = document.getElementById('main-text');
//mainText.innerHTML='New from Source';

//Move image
//clicking on image speeds up the movement. why?
//setInterval(moveRight,50) what does this do exactly
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft+=1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
   var interval = setInterval(moveRight,50);
};

//counter code
var button=document.getElementById('Counter');
var counter=0;
button.onclick = function(){

	//create request object
	var request = new XMLHttpRequest();

	//read the response
	request.onreadystatechange = function(){
		if (request.readyState === XMLHttpRequest.DONE){
			if (request.status === 200){
				var counter=request.responseText;
				//update span 'count' with counter value
				var span=document.getElementById('count');
				span.innerHTML=(counter).toString();
			}
		}
		//else do nothing. keep waiting.
	};

	request.open('GET','http://'+serverPath+'/counter',true);
	request.send(null);
};

var submit=document.getElementById("submit_btn");
submit.onclick = function () {
	
	//create a request object
	var request = new XMLHttpRequest;
	//read the response and render the response into HTML
	request.onreadystatechange = function(){
		if (request.readyState === XMLHttpRequest.DONE){
			if (request.status === 200){
			var names=JSON.parse(request.responseText);
			var list= '';
			for (var i=0;i<names.length;i++){
					list+='<li>'+names[i]+'</li>';
				}
			document.getElementById("namelist").innerHTML=list;	
			}
		}
	}
	//make a request
	var name=document.getElementById("name").value;
	request.open('GET','http://'+serverPath+'/submit-name?name='+name,true);
	request.send(null);
};
