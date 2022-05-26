function makeElementVisible(element) {
    element.style.display = 'flex';
    changeBackgroundFiltersToEnable();
    document.body.style.overflow = 'hidden';
}

function makeElementHidden(element) {
    element.style.display = 'none';
    changeBackgroundFiltersToDisable();
    document.body.style.overflow = 'auto';
}

//create listener for the button "Register"
function registerListener() {
    var registerButton = document.getElementById('register');
    registerButton.addEventListener('click', function() {
        var registerLightbox = document.getElementById('registerLightbox');
        makeElementVisible(registerLightbox);
    });
}

//create listener for the button "Login"
function loginListener() {
    var loginButton = document.getElementById('login');
    loginButton.addEventListener('click', function() {
        var loginLightbox = document.getElementById('loginLightbox');
        makeElementVisible(loginLightbox);
    });
}

//create listener for the button "Close" in the register lightbox
function closeRegisterListener() {
    var closeRegisterButton = document.getElementById('closeRegister');
    closeRegisterButton.addEventListener('click', function() {
        var registerLightbox = document.getElementById('registerLightbox');
        makeElementHidden(registerLightbox);
    });
}

//create listener for the button "Close" in the login lightbox
function closeLoginListener() {
    var closeLoginButton = document.getElementById('closeLogin');
    closeLoginButton.addEventListener('click', function() {
        var loginLightbox = document.getElementById('loginLightbox');
        makeElementHidden(loginLightbox);
    });
}




//change filter property of the background image to make it darker and blur it
function changeBackgroundFiltersToEnable() {
    let background = document.getElementById('pageContainer');
    background.style.backdropFilter = 'blur(5px) brightness(0.5)';
    let otherElements = document.getElementsByClassName('back');
    for (let i = 0; i < otherElements.length; i++) {
        otherElements[i].style.filter = 'blur(5px) brightness(0.5)';
    }
}

//change filter property of the background image to make it brighter and unblur it
function changeBackgroundFiltersToDisable() {
    let background = document.getElementById('pageContainer');
    background.style.backdropFilter = 'blur(0px) brightness(1)';
    let otherElements = document.getElementsByClassName('back');
    for (let i = 0; i < otherElements.length; i++) {
        otherElements[i].style.filter = 'blur(0px) brightness(1)';
    }
}


registerListener();
loginListener();
closeLoginListener();
closeRegisterListener();