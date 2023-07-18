// input
let username = document.getElementById("username");
let password = document.getElementById("password");
// label 
let usernameLabel = document.getElementById("usernameLabel");
let passwordLabel = document.getElementById("passwordLabel");
let roleLabel = document.getElementById("roleLabel");
// button 
let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let homeBtn = document.getElementById("homeBtn");
// text
let welcomeText = document.getElementById("welcomeText");
let roleText = document.getElementById("roleText");

let container = document.getElementById("id1")
console.log(container)

let roles = document.getElementById("roles")

let user = localStorage.getItem(username.value);
let pass = localStorage.getItem(password.value);

let roleList =["member","supporter","admin"]

homeBtn.style.display="none";
username.style.display="none";
password.style.display="none";
usernameLabel.style.display="none";
passwordLabel.style.display="none";
welcomeText.style.display="none";
roleText.style.display="none";
roles.style.display="none";
roleLabel.style.display="none";


function searchRole(role){
    for (let index = 0; index < roleList.length; index++) {
        role = localStorage.getItem(roleList[index]+username.value);
        if(role != null){
            return role;        }
    }
}

function onLogin(){

    if(username.style.display == "block"){
        user = localStorage.getItem(username.value);
        pass = localStorage.getItem(password.value+username.value);
        let role ;
        role = searchRole(role);

        if(user == username.value && pass == password.value){
            welcomeText.style.display="block";
            welcomeText.textContent=`Welcome ${user} \n  you're ${role} ✔`;

            username.style.display="none";
            password.style.display="none";
            usernameLabel.style.display="none";
            passwordLabel.style.display="none";
            loginBtn.style.display="none";
            signupBtn.style.display="none";
    

            localStorage.setItem("loginNow",username.value);
            localStorage.setItem("roleNow",role);

            switch(role){
                case "member" : 
                    container.style.backgroundColor="rgb(104, 107, 109)";
                    break;
                case "supporter" :
                    container.style.backgroundColor="rgb(223, 220, 40)";
                    break;
                case "admin" :
                    container.style.backgroundColor="rgb(43, 204, 43)";
                    break;
            }


        }else{
            welcomeText.style.display="block";
            welcomeText.textContent=`${username.value} Not Found Or Wrong Password`;
        }
    }else{
        homeBtn.style.display="block";
        signupBtn.style.display="none";
        username.style.display="block";
        password.style.display="block";
        usernameLabel.style.display="block";
        passwordLabel.style.display="block";
 
    }

    username.value ="";
    password.value="";
}

function onSignup(){

    if(username.style.display == "block"){

        if(username.value != "" && password.value != ""){
            localStorage.setItem(username.value,username.value);
            localStorage.setItem(password.value+username.value,password.value);
            localStorage.setItem(roles.value+username.value,roles.value);
        }
        
    }
    else{
        homeBtn.style.display="block";
        loginBtn.style.display="none";
        username.style.display="block";
        password.style.display="block";
        usernameLabel.style.display="block";
        passwordLabel.style.display="block";
        roles.style.display="block";
        roleLabel.style.display="block";


    }
    username.value ="";
    password.value="";
}

function onHome(){

    loginBtn.style.display="block";
    signupBtn.style.display="block";
    username.style.display="none";
    password.style.display="none";
    usernameLabel.style.display="none";
    passwordLabel.style.display="none";
    homeBtn.style.display="none";
    welcomeText.style.display="none";
    roles.style.display="none";
    roleLabel.style.display="none";


    localStorage.setItem("loginNow",null);
    localStorage.setItem("roleNow",null);

    container.style.backgroundColor=" rgb(198, 208, 255)";

    username.value ="";
    password.value="";
}

if(localStorage.getItem("loginNow") != "null"){
    welcomeText.style.display="block";
    welcomeText.textContent=`Welcome ${localStorage.getItem("loginNow")}  you're ${localStorage.getItem("roleNow")} ✔`;


    switch(localStorage.getItem("roleNow")){
        case "member" : 
            container.style.backgroundColor="rgb(104, 107, 109)";
            break;
        case "supporter" :
            container.style.backgroundColor="rgb(223, 220, 40)";
            break;
        case "admin" :
            container.style.backgroundColor="rgb(43, 204, 43)";
            break;
    }

    username.style.display="none";
    password.style.display="none";
    usernameLabel.style.display="none";
    passwordLabel.style.display="none";
    loginBtn.style.display="none";
    signupBtn.style.display="none";
    homeBtn.style.display="block";
}





