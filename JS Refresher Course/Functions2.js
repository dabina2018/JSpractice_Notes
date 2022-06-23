// Declare your global variable here
var myGlobal = 10;

function fun1() {
    //Assign 5 to oopsGlobal Here
    localVar = 5;

}

//Example - Global variables
function fun2() {
    var output = "";
    if (typeof "myGlobal" != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof localVar != "undefined") {
        output += " localVar: " + localVar;
    }
    console.log(output);
}
fun1();
fun2();