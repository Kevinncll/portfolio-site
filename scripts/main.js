//WelcomeButton//
function welcome() {
    let username = prompt("What is your name?");
    alert("Nice to meet you, " + username);
    let message = "Nice to meet you, " +username;
    document.getElementById('saywelcome').innerHTML = message;

}

//ComingSoon//
function comingsoon() {
    alert("This Assignment Will Be Coming Soon");

}