var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b, (err, recatangle) => {

        if(err) {
            console.log("Error:" , err.message);
        }
        else {
            console.log("The area of the reactangle of dimensions l " + l + "and b = " + b + "is " + recatangle.area());
            console.log("The area of the reactangle of dimensions l " + l + "and b = " + b + "is " + recatangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect")
}


    solveRect(2,4);
    solveRect(0,5);
    solveRect(-3,5);