// document.querySelector(`#findLettersInTheEnd .text`).style.background = "black";

//create function thah recive regExp and id and rturn true if the id match the regExp
function checkRegExp(regExp, id) {
    var text = document.getElementById(id).innerHTML;
    console.log(text);
    var result = regExp.test(text);
    return result;
}

const AandZinTheEndRegExp = /[ая]\s/g;
const ipInTheText = /\d{1,3}\.\d{1,3}\.255.\d{1,3}/g;
const ukrainePhoneNumberRegExp = /\+380\d{2}\d{3}\d{2}\d{2}/g;





//create function thah recive regExp and id and make highlight the text that match the regExp
function highlightRegExp(regExp, id) {
    var text = document.querySelector(`#${id} .text`).innerHTML;
    console.log(Array.from(text.matchAll(regExp)));
    let newText = text.replace(regExp, '<span style="background: rgb(11, 168, 24, 0.5);">$&</span>');
    document.querySelector(`#${id} .text`).innerHTML = newText;
    console.log(newText);
}

//create function that check if input equal to regExp
function checkInput(regExp, id) {
    var text = document.querySelector(`#${id} input`).value;
    var result = regExp.test(text);
    return result;
}

//change button class if the input is unvalid
function changeButtonClassIfUnvalid(id, regExp) {
    if (checkInput(regExp, id)) {
        document.querySelector(`#${id} input`).classList.remove('invalidLine');
    } else {
        document.querySelector(`#${id} input`).classList.add('invalidLine');
    }
}

//function that add listener to ipAdress input
function addIpAdressListener() {
    document.querySelector('#checkIfContainsIp input').addEventListener('input', function() {
        changeButtonClassIfUnvalid('checkIfContainsIp', ipInTheText);
    });

}

//function that add listener to .texthoneNumber input
function addPhoneNumberListener() {
    document.querySelector('#checkIfContainsPhoneNumber input').addEventListener('input', function() {
        if (document.querySelector('#checkIfContainsPhoneNumber input').value.length < 4) {
            document.querySelector('#checkIfContainsPhoneNumber input').value = '+380';
        }
        changeButtonClassIfUnvalid('checkIfContainsPhoneNumber', ukrainePhoneNumberRegExp);
    });

}
//check input value and change button class if it is unvalid when page load
function checkInputValue() {
    if (document.querySelector('#checkIfContainsPhoneNumber input').value.length < 4) {
        document.querySelector('#checkIfContainsPhoneNumber input').value = '+380';
    }
    changeButtonClassIfUnvalid('checkIfContainsIp', ipInTheText);
    changeButtonClassIfUnvalid('checkIfContainsPhoneNumber', ukrainePhoneNumberRegExp);
}


//start all listeners
function createListeners() {
    checkInputValue();
    highlightRegExp(AandZinTheEndRegExp, 'findLettersInTheEnd');
    highlightRegExp(ipInTheText, 'findIpAdresses');
    addPhoneNumberListener();
    addIpAdressListener();
}

export { createListeners };