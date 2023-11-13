function showHidePassword(){
    let passwordInput = document.getElementById("passwordInput")
    let checkbox = document.getElementById("showHidePassword")

   if (checkbox.checked) {
    passwordInput.type="text"
    } else{
       passwordInput.type="password" 
    }

}