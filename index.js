function method1()
{                                               
    var element=document.getElementById("navbarId")
    element.style.backgroundColor="red";
}
function submit()
{
    var emailValue=document.getElementById("emailField").value;
    console.log("Email",emailValue);
    var passwordValue=document.getElementById("passwordField").value;
    console.log("password",passwordValue);

if(emailValue=="admin@admin.com" && passwordValue=="123")
{
    alert("logged in as admin!");
}
}
function calculate(){
    var num1=parseInt(document.getElementById("number1").value);
    var num2=parseInt(document.getElementById("number2").value);
    var operation=document.getElementById("operation").value; 
    console.log("Num1",num1)
    console.log("Num2",num2)
    console.log("Operation is",operation)
    var result;
    switch(operation)
    {
        
        case 'add':
            result= num1 + num2;
            console.log("Result of addition = ", result)
            break;
        case 'sub':
            result=num1-num2;
            console.log("Result of subtraction = ", result)
            break;
        case 'mul':
            result=num1*num2;
            console.log("Result of multiplication = ", result)
            break;
        case 'div':
            result=num1 / num2;
            console.log("Result of division = ", result)
            break;
        default :console.log("Invalid operation")
    }
    document.getElementById("mainResult").innerText=result;
}