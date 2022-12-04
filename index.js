let holderDisplay = document.getElementById("holderDisplay");
let cardNoDisplay = document.getElementById("cardNoDisplay");
let dateMDisplay = document.getElementById("dateMDisplay");
let dateYDisplay = document.getElementById("dateYDisplay");
let cvvDisplay = document.getElementById("cvvDisplay");

let holderNameInput = document.getElementById("holderNameInput");
let cardNoInput = document.getElementById("cardNoInput");
let dateMInput = document.getElementById("dateMInput");
let dateYInput = document.getElementById("dateYInput");
let cvvInput = document.getElementById("cvvInput");


let updateCardDetails = function(display, input){
    display.innerHTML = input.value;
}


holderNameInput.onkeyup = function(){
    updateCardDetails(holderDisplay, holderNameInput);
}
cardNoInput.onkeyup = function(){
    updateCardDetails(cardNoDisplay, cardNoInput);
}
dateMInput.onkeyup = function(){
    updateCardDetails(dateMDisplay, dateMInput);
}
dateYInput.onkeyup = function(){
    updateCardDetails(dateYDisplay, dateYInput);
}
cvvInput.onkeyup = function(){
    updateCardDetails(cvvDisplay, cvvInput);
}

//validation logics
function onlyNums(evt){
    //ASCII code in the range allowed
    var ASCIICODE = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICODE > 31 && (ASCIICODE < 48 || ASCIICODE > 57))
        return false;
    return true;
}

const submit = document.querySelector('.submit');

submit.addEventListener('click', (evn)=>{
    if(!validateForm()){
        evn.preventDefault();
    }
    
})


function validateForm(){
    //check for empty fields
    if(holderNameInput.textContent !== ""){
        let v = holderNameInput.nextElementSibling;
        v.classList.toggle("show-err");
    }
    else if(cardNoInput.innerHTML == ""){
        cardNoInput.nextElementSibling.classList.toggle('show-err');
        return false;
    }
    else if(cvvInput.innerHTML == ""){
        cvvInput.nextElementSibling.style.visibility = "visible";
        return false;
    }
}
