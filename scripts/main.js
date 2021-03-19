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

//JavaScript Exercise 2//
function signOfProduct(){
    var a = parseInt(prompt("Place a number"));
    var b = parseInt(prompt("Place a number"));
    var c = parseInt(prompt("Place a number"));
    var totalProduct = a * b * c;
    if (totalProduct < 0 ){
      alert("The sign of the product is -"); 
    }
    if (totalProduct > 0 ){
      alert("The sign of the product is +");  
    }
}

//JavaScript Exercise 3//
function threeNumberSort() {
    var a = parseInt(prompt("Place a number"));
    var b = parseInt(prompt("Place a number"));
    var c = parseInt(prompt("Place a number"));
    let array = [a, b, c];
    array.sort(function(a, b, c){return a - b});
    alert ("The order from least to greatest is, " + array);
}

//JavaScript Exercise 4//
function SumOfThrees() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        ! (i % 3) && (sum += i)
    }
    console.log(sum);
}

//JavaScript Exercise 5//
function WhileThrees(){
    let sum = 0;
    let i = 0;
     while (i < 1000) {
         sum += i;
         i = i + 3;
     }
     console.log(sum)
}

//JavaScript Exercise 6//
function tenFour() {
    let multipleOf4or10 = 0;
     for(i = 1; i<101; i = i +1){
         if(i % 4 === 0 && i % 10 === 0){
            multipleOf4or10 += (' TenFour! ');
         }
         else if(i % 4 === 0){
             multipleOf4or10 += (' Four! ');
         }
         else if(i % 10 === 0){
             multipleOf4or10 += ('Ten!');
         }
         else(multipleOf4or10 += ' ' + i + ' ');
     }
    alert (multipleOf4or10);
}

//JavaScript Exercise 7//
function centuryFromYear() {
    let userYear = prompt ('Want to know what century any year is in? Enter a year!', '2021');
    let century = 0;
    century = Math.floor(userYear/100+1);
        if (toString(century)[-1] == 1) /*&& toString(century)[-1] !=11)*/{ 
           century = toString(century) + 'st'
    }
    return alert ('The year you entered is in the century of ' + century);  
}

//JavaScript Exercise 8//
function thirdAngle() {
    alert ("Here you can calculate the missing angle of a triangle. You must put insert two angles of a triangle and the function will return the third angle, totaling 180°." );
    var a = parseInt(prompt("Enter an angle of a triangle"));
    var b = parseInt(prompt("Enter another angle of a triangle "));
    var totalSum = 0;
    if ((a + b) < 180){
    totalSum = 180 - (a + b); 
    alert ("The angle that is missing is, " + totalSum );
    }
    else if ((a + b) > 180){
    alert ("Invalid. Enter two angles of a triangle.");    
    }
}

