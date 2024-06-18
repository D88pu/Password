let password = document.getElementById("password")
let eyeicon = document.getElementById("eyeicon");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src=""; //This is a image show
    }else{
        password.type ="password";
        eyeicon.src=""; //This is a image show
    }
}