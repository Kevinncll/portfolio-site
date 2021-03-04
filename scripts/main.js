function welcome() {
    let username = prompt("What is your name?");
    alert("Nice to meet you, " + username);
    let message = "Nice to meet you, " +username;
    document.getElementById('saywelcome').innerHTML = message;

}