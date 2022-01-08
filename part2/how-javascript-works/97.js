// lexical environment, scope chain

const lastName = "akhtar";

const printName = function(){
    const firstName = "khanshoab";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
    
}
printName();