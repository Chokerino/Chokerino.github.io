var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'a.jpg') {
      myImage.setAttribute ('src','b.png');
    } else {
      myImage.setAttribute ('src','a.jpg');
    }
}
var mybutton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
	var myName = prompt('Enter:');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Alliance , '+myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Alliance , ' + storedName;
}
mybutton.onclick = function(){
	setUserName();
}