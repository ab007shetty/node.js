var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b, (err, rectangle) => {

        if(err) {
            console.log("Error:" , err.message);
        }
        else {
            console.log("The area of the reactangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.area());
            console.log("The Perimeter of the reactangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect")
}


    solveRect(2,4);
    solveRect(0,5);
    solveRect(-3,5);