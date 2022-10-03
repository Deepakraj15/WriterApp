
function inputSelect() {
    document.getElementById("user-text").style.display = "block";
    document.getElementById("password-text").style.display = "block";
    document.getElementById("username").placeholder = "";
    document.getElementById("password").placeholder = "";
}
function formValidation() {
    var uname = document.getElementById("user-text");
    var password = document.getElementById("password-text");
    httpGet('../../server/server.js')
    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
}