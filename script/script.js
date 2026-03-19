document.getElementById("input-btn").addEventListener('click',function(){
    const inputUsername = document.getElementById("inputUsername")
    const userName = inputUsername.value;
    // console.log(userName);

    const inputPassword = document.getElementById("inputPassword")
    const password = inputPassword.value;
    // console.log(password)

    if(userName == "admin" && password== "admin123"){
        alert("loging Success ")
    }
    else{
        alert("loging Failed")
    }

})
