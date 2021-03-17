//WelcomeButton//
function welcome() {
    let username = prompt("What is your name?");
    alert("Nice to meet you, " + username);
    let message = "Nice to meet you, " +username;
    document.getElementById('saywelcome').innerHTML = message;

}

//ComingSoon//
function comingsoon() {
    alert("Assignment Two Will Be Coming Soon");
}

//ComingSoon2//
function comingsoon2() {
    alert("Assignment Three Will Be Coming Soon");
}

//ComingSoon3//
function comingsoon3() {
    alert("Assignment Four Will Be Coming Soon");
}

//ComingSoon4//
function comingsoon4() {
    alert("Assignment Five Will Be Coming Soon");
}

//ComingSoon5//
function comingsoon5() {
    alert("Assignment Six Will Be Coming Soon");
}

//ComingSoon6//
function comingsoon6() {
    alert("Assignment Seven Will Be Coming Soon");
}

//ComingSoon7//
function comingsoon7() {
    alert("Assignment Eight Will Be Coming Soon");
}

//ComingSoon8//
function comingsoon8() {
    alert("Assignment Nine Will Be Coming Soon");
}

//ComingSoon9//
function comingsoon9() {
    alert("Assignment Ten Will Be Coming Soon");
}

//JavaScript Exercise 1//
function largernumber(){
    let num1 = parseInt(prompt("Enter the first number: "));
    let num2 =  parseInt(prompt("Enter the second number: "));
    let output = ""
    if (num1 > num2){
    output = num1;
    } else if (num1 == num2){
    output = "The numbers entered are equal";
    } else if (num2 > num1){
    output = num2;
    } else {
    output = "Invalid Output";
    }
    document.getElementById("largerNum").innerHTML = output;
}