// email
const inputEmail = document.querySelector("#email")
const emailError = document.querySelector('.email-error')

const inputPassword = document.querySelector("#password")
const passwordError = document.querySelector('.password-error')

const submit = document.querySelector('.submit')

submit.addEventListener('click', (e) => {

    if(inputEmail.value === ""){
        emailError.innerHTML = "email harus diisi!"
    }else{
        emailError.innerHTML = ""
    }

    if(inputPassword.value === ""){
        passwordError.innerHTML = "password harus diisi!"
    }else{
        passwordError.innerHTML = ""
    }

    // console.log(inputPassword.length)
    if(inputEmail.value === "" || inputPassword.length === undefined){
        // console.log("ho")
        e.preventDefault()
    }else{
        // console.log("hi")
        // e.preventDefault();
    }
})

