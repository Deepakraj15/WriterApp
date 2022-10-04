
function inputSelect() {
    document.getElementById("user-text").style.display = "block";
    document.getElementById("password-text").style.display = "block";
    document.getElementById("username").placeholder = "";
    document.getElementById("password").placeholder = "";
}
function formValidation() {
    const uname = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // if (!(uname == "deepak")) {
    //     document.getElementById("display-error").style.display = "block";
    // }
    $("#login-form").submit(() => {
        $.post("localhost:3000",
            {
                name: uname,
                password: password,
                auth: false,
            }
        )
    }
    )
}
