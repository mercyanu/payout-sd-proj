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

const succesScr = document.querySelector('.success-cont');
const form = document.forms['myForm'];

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

// const submit = document.querySelector('.submit');

// submit.addEventListener('click', (evn)=>{
//     if(!validateForm()){
//         evn.preventDefault();
//     }
    
// })

form.addEventListener('submit', (event) =>{
    clearError();
    if(!validateForm()){
        event.preventDefault();
    }
    else{
        alert("move to success screen");
    }

}) 

function clearError(){
    let errEl = document.querySelectorAll('.error');
    for(let el of errEl){
        el.classList.remove('show-err');
    }
}

function validateForm(){
    //check for empty fields
    if(holderNameInput.value === ""){
        holderNameInput.nextElementSibling.classList.add('show-err');
        return false;
    }
    else if(cardNoInput.value === ""){
        cardNoInput.nextElementSibling.classList.add('show-err');
        return false;
    }
    else if (dateMInput.value === "" || dateYInput.value === ""){
        let grParent = dateMInput.parentNode.parentNode;
        let err = grParent.querySelector('.error');
        err.classList.add('show-err');
        return false;
    }
    else if(cvvInput.value === ""){
        cvvInput.nextElementSibling.classList.add('show-err');
        return false;
    }
    else{
        validateFormat();
    }
}

function validateFormat(){
    //check if formats and length is correct
    if(!(cardNoInput.value.length == 16)){
        let err = document.querySelector('.card-err-2');
        err.classList.add('show-err');
    }
    else if(!(cvvInput.value.length == 3)){
        let err = document.querySelector('.cvv-err-2');
        err.classList.add('show-err');
    }
    else{
        moveScreen();
    }
}

function moveScreen(){
    succesScr.style.display = 'flex';
    form.style.display = 'none';
}

let contButton = document.getElementById('continue');
contButton.addEventListener('click', () =>{
    succesScr.style.display = 'none';
    form.style.display = 'block';
    location.reload();
    // resetFields();
})

function resetFields(){
    holderNameInput.value = "";
    holderDisplay.textContent = "";
    cardNoInput.value = "";
    dateMInput.value = "";
    dateYInput.value = "";
    cvvInput.value = "";
}
