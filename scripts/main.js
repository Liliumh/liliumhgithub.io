// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/flor-lis-icon.jpg') {
        myImage.setAttribute('src', 'images/owl-icon.jpg');
    } else {
        myImage.setAttribute('src', 'images/flor-lis-icon.jpg');
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lil es , ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Lil es ,' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

//document.querySelector('html').onclick = function () {
//    alert('Ouch! Deja de pincharme');
//}