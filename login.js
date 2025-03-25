function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userDB = "admin";
    var passDB = "1234";
    if(username == userDB && password == passDB){
        alert("Login bem sucedido.")
        window.location.href = "dashboard.html";
    }
    else {
        document.getElementById("error-message").style.display = "block";
    }
}
