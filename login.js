const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "XxExD" && password === "04-10-21") {
        alert("You have successfully logged in.");
         location.replace("./index3.html")

    }

    if (username === "smile" && password === "04-10-21") {
        alert("You have successfully logged in.");
         location.replace("./index3.html")

    }





    else {
        loginErrorMsg.style.opacity = 1;
    }
})
