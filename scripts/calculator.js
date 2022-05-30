//calculate perimeter of a triangle
function calculatePerimeter(a, b, c) {
    return a + b + c;
}

//get parameters from the calculator form
function getParameters() {
    var a = Number(document.getElementById("A").value);
    var b = Number(document.getElementById("B").value);
    var c = Number(document.getElementById("C").value);
    return [a, b, c];
}

//check if the parameters are valid
function areParametersValid(a, b, c) {
    if (isParameterValid(a) && isParameterValid(b) && isParameterValid(c)) {
        return true;
    } else {
        return false;
    }
}

//check if the parameters are valid and if so, calculate the perimeter
function calculatePerimeterIfValid() {
    var parameters = getParameters();
    if (areParametersValid("A", "B", "C")) {
        var perimeter = calculatePerimeter(parameters[0], parameters[1], parameters[2]);
        document.getElementById("perimeter").innerHTML = perimeter;
        document.getElementById("perimeter").style.color = "rgb(11, 168, 24)";
    } else {
        document.getElementById("perimeter").innerHTML = "Invalid parameters";
        document.getElementById("perimeter").style.color = "red";
    }
}

//add event listener to the calculate button
function addCalculateListener() {
    var calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculatePerimeterIfValid);
}

//check if parameter valid
function isParameterValid(a) {
    if (document.getElementById(a).value > 0 || document.getElementById(a).value == "") {
        return true;
    } else {
        return false;
    }
}

//chenge tht color of the parameter to red if it is not valid and to rgb(11, 168, 24) if it is valid
function changeParameterColor(a) {
    if (!isParameterValid(a)) {
        document.querySelector(`#side${a}`).classList.add("invalidLine");
        if (checkShowAddInfoCheckbox()) {
            changeSideXContent(a, createMistakeDescription(a));
        } else {
            changeSideXContent(a, "");
        }

    } else {
        document.querySelector(`#side${a}`).classList.remove("invalidLine");
        changeSideXContent(a, "");
    }
}

// //create timer to check if the parameters are valid
// function createTimer() {
//     setInterval(function() {
//         var parameters = getParameters();
//         changeParameterColor("A");
//         changeParameterColor("B");
//         changeParameterColor("C");
//     }, 100);
// }

//add listeners into the form elements to check if the parameters are valid
function addListeners() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");
    a.addEventListener("keyup", function() {
        changeParameterColor("A");
    });
    b.addEventListener("keyup", function() {
        changeParameterColor("B");
    });
    c.addEventListener("keyup", function() {
        changeParameterColor("C");
    });
}

//check if parameters are valid when the page loads
function checkParameters() {
    changeParameterColor("A");
    changeParameterColor("B");
    changeParameterColor("C");
}

//create mistake description using input parameters
function createMistakeDescription(a) {
    var mistakeDescription = "";
    let parameter = document.getElementById(a).value;
    console.log(parameter);
    console.log(Number(parameter))
    if (isNaN(Number(parameter))) {
        mistakeDescription = "dot't use letters";
    } else if (parameter < 0) {
        mistakeDescription += `${a} is negative`;
    } else if (parameter == 0) {
        mistakeDescription += `${a} is zero`;
    }
    return mistakeDescription;
}


//change content in SideX:affter
function changeSideXContent(a, string) {
    let content = document.querySelector(`#side${a}`);
    content.setAttribute('data-value', string);
}

//check if ShowAddInfoCheckbox is checked
function checkShowAddInfoCheckbox() {
    let checkbox = document.getElementById("ShowAddInfoCheckbox");
    if (checkbox.checked) {
        return true;
    } else {
        return false;
    }
}

//add event listener to the ShowAddInfoCheckbox
function addShowAddInfoCheckboxListener() {
    let checkbox = document.getElementById("ShowAddInfoCheckbox");
    checkbox.addEventListener("change", function() {
        checkParameters();
    });
}


checkParameters();
addListeners();
addCalculateListener();
addShowAddInfoCheckboxListener();