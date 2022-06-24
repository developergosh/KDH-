// Variables
let
    regButton = document.getElementById('reg-button'),
    userForms = document.getElementById('form-login'),
    regForms = document.getElementById('form-auth'),
    backButton = document.getElementById('back-btn'),
    forgotButton = document.getElementById('forgot-btn'),
    infoReg = document.getElementById('info-reg'),
    forgotInfo = document.getElementById('forgot-form');



// Add event listener to the "Sign Up" button
regButton.addEventListener('click', () => {
   userForms.style.display = 'none'
   regForms.style.display = 'flex'
},)

backButton.addEventListener('click', ()=> {
   userForms.style.display = 'flex'
   regForms.style.display = 'none'
},)

forgotButton.addEventListener('click', ()=> {
   userForms.style.display = 'none'
   infoReg.style.display = 'none'
   forgotInfo.style.display = 'flex'
},)


