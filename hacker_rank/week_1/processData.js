



function processData(input) {
    //Enter your code here
    let splitMethod = '';
    let splitVariable = '';
    let splitClass = '';
    let classMethod = '';
    let classVariable = '';
    let classClass = '';

    if (input[0] === "S") {
        if (input[2] === "M") {
            for (let i = 4; i < input.length; i++) {
                // finds upper case and expludes parentheses
                if (input[i] === input[i].toUpperCase() && input[i] != input[i].toLowerCase()) {
                    splitMethod += " " + input[i].toLowerCase();

                } else if (input[i] === input[i].toUpperCase()) {
                    continue;

                } else {
                    splitMethod += input[i];
                }
            }
            if (splitMethod.length > 0) {
                console.log(splitMethod);
            }

        } else if (input[2] === "V") {
            for (let i = 4; i < input.length; i++) {
                if (input[i] === input[i].toUpperCase()) {
                    splitVariable += " " + input[i].toLowerCase();
                } else {
                    splitVariable += input[i];
                }
            }
            if (splitVariable.length > 0) {
                console.log(splitVariable);
            }

        } else if (input[2] === "C") {
            for (let i = 4; i < input.length; i++) {
                if (input[i] === input[i].toUpperCase()) {
                    if (splitClass.length === 0) {
                        splitClass += input[i].toLowerCase();
                    } else {
                        splitClass += " " + input[i].toLowerCase();
                    }
                } else {
                    splitClass += input[i];
                }
            }
            if (splitClass.length > 0) {
                console.log(splitClass);
            }
        }
    }
    if (input[0] === "C") {
        if (input[2] === "M") {
            for (let i = 4; i < input.length; i++) {
                if (input[i] === " ") {
                    classMethod += input[i + 1].toUpperCase();
                    i++;
                } else {
                    classMethod += input[i];
                }
            }
            classMethod += "()"
            if (classMethod.length > 0) {
                console.log(classMethod);
            }
        } else if (input[2] === "V") {
            for (let i = 4; i < input.length; i++) {
                if (input[i] === " ") {
                    classVariable += input[i + 1].toUpperCase();
                    i++;
                } else {
                    classVariable += input[i];
                }
            }
            if (classVariable.length > 0) {
                console.log(classVariable);
            }
        } else if (input[2] === "C") {
            for (let i = 4; i < input.length; i++) {
                if (i === 4) {
                    classClass += input[i].toUpperCase();
                } else if (input[i] === " ") {
                    classClass += input[i + 1].toUpperCase();
                    i++;
                } else {
                    classClass += input[i];
                }
            }
            if (classClass.length > 0) {
                console.log(classClass);
            }
        }
    }
}




processData("S;M;plasticCup()")     // plastic cup
processData("C;V;mobile phone")     // mobilePhone
processData("C;C;coffee machine")   // CoffeeMachine
processData("S;C;LargeSoftwareBook") // large software book
processData("C;M;white sheet of paper") // whiteSheetOfPaper()
processData("S;V;pictureFrame")     // picture frame