const nama = document.getElementById("name")
const errNama = document.querySelector(".name-error")

const email = document.getElementById("email")
const errEmail = document.querySelector(".email-error")

const genderM = document.getElementById("male")
const genderF = document.getElementById("female")
const errGender = document.querySelector(".gender-error")

const city = document.getElementById("city")
const errCity = document.querySelector(".city-error")

const password = document.getElementById("password")
const errPassword = document.querySelector(".password-error")

const cpassword = document.getElementById("cpassword")
// const errCpassword = document.querySelector(".cpassword-error")

const register = document.querySelector(".register")

register.addEventListener("click", (e) => {
    let i = 0
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //regex pattern email
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g //regex pattern password

    if(nama.value === ""){
        errNama.innerHTML = "Nama harus diisi!"
        i++
    }else{
        errNama.innerHTML = ""
    }
    
    
    if(!(emailPattern.test(email.value))){
        errEmail.innerHTML = "Email tidak valid!"
        i++
    }else{
        errEmail.innerHTML = ""
    }

    if(!(genderM.checked) && !(genderF.checked)){
        errGender.innerHTML = "Gender harus dipilih!"
        i++
    }else{
        errGender.innerHTML = ""
    }
    
    if(city.value === ""){
        errCity.innerHTML = "City harus dipilih!"
        i++
    }else{
        errCity.innerHTML = ""
    }
    
    if(password.value === "" && cpassword.value === ""){
        errPassword.innerHTML = "Password harus diisi!"
        i++
    }else if((passwordPattern.test(password.value)) && (password.value !== cpassword.value)){
        errPassword.innerHTML = "Password tidak sesuai!"
        i++
    }else if(!(passwordPattern.test(password.value)) && (password.value !== cpassword.value)){
        errPassword.innerHTML = "Password tidak sesuai!"
        i++
    }else if(!(passwordPattern.test(password.value)) && (password.value === cpassword.value)){
        errPassword.innerHTML = "Password harus minimal 8 karakter, mengandung setidaknya satu huruf kapital serta satu angka!"
        i++
    }else{
        errPassword.innerHTML = ""
    }

    if(i > 0){
        console.log("gagal regis")
        e.preventDefault()
    }else{
        console.log("berhasil")
        e.preventDefault()
    }
})