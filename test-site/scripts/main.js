

var myHeading = document.querySelector('h1');
myHeading.textContent = 'K XA?';


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpeg') {
      myImage.setAttribute ('src','images/2.jpeg');
    } else {
      myImage.setAttribute ('src','images/1.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
    var myName = prompt('Please enter your name.');// brings dailogue box
    localStorage.setItem('name', myName);// browser API to store data item called name
    myHeading.textContent = 'K xa?, ' + myName;
    
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'K xa?, ' + storedName;
      }
  }
  myButton.onclick = function() {
    setUserName();
  }