let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bird.jpg'){
        myImage.setAttribute('src','images/pigeon2.jpg');
    } else{
        myImage.setAttribute('src','images/bird.jpg');
    }

}

let myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){

    let myName = prompt('Please enter your news head. ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is your header - ' + myName;

    if(!localStorage.getItem('name')){
        setUserName();
    } else{
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'This is your header - ' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
  }

