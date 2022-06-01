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
    var registerButton = document.querySelector('#register');
    registerButton.addEventListener('click', function() {
        var registerLightbox = document.querySelector('#registerLightbox');
        makeElementVisible(registerLightbox);
    });
}

//create listener for the button "Login"
function loginListener() {
    var loginButton = document.querySelector('#login');
    loginButton.addEventListener('click', function() {
        var loginLightbox = document.querySelector('#loginLightbox');
        makeElementVisible(loginLightbox);
    });
}

//create listener for the button "Close" in the register lightbox
function closeRegisterListener() {
    var closeRegisterButton = document.querySelector(`#closeRegister`);
    closeRegisterButton.addEventListener('click', function() {
        var registerLightbox = document.querySelector('#registerLightbox');
        makeElementHidden(registerLightbox);
    });
}

//create listener for the button "Close" in the login lightbox
function closeLoginListener() {
    var closeLoginButton = document.querySelector('#closeLogin');
    closeLoginButton.addEventListener('click', function() {
        var loginLightbox = document.querySelector('#loginLightbox');
        makeElementHidden(loginLightbox);
    });
}




//change filter property of the background image to make it darker and blur it
function changeBackgroundFiltersToEnable() {
    let background = document.querySelector('#pageContainer');
    background.style.backdropFilter = 'blur(5px) brightness(0.5)';
    document.querySelectorAll('.back').forEach(element => {
        element.style.filter = 'blur(5px) brightness(0.5)';
    });
}

//change filter property of the background image to make it brighter and unblur it
function changeBackgroundFiltersToDisable() {
    let background = document.querySelector('#pageContainer');
    background.style.backdropFilter = 'blur(0px) brightness(1)';
    let otherElements = document.querySelectorAll('.back').forEach(element => {
        element.style.filter = 'blur(0px) brightness(1)';
    });
}

//create listeners for auth forms
async function createListeners() {
    registerListener();
    loginListener();
    closeLoginListener();
    closeRegisterListener();
}


export { createListeners };