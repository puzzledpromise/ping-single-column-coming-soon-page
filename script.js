const errorMsgEl = document.querySelector('.nl-error')
const emailFieldEl = document.querySelector('.signup-field');

function verifyEmail(e){
    if(!validateEmail(e.target.value)){
        errorMsgEl.style.display = "block";
        emailFieldEl.classList.add('error-field');
    }else{
        errorMsgEl.style.display = "none";
        emailFieldEl.classList.remove('error-field');
    }
}

emailFieldEl.addEventListener('focusout', verifyEmail)



function validateEmail(s){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(s.match(validRegex)){
        return true;
    }else{
        return false;
    }
}
