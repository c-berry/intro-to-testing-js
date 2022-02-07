// helloWorld function
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name === "boolean") {
        return "Hello, World!";
    } else if (typeof name === "number") {
        return "Hello, World!";
    } else if (name) {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
        }
}

function isFive(number) {
    if (number === "5") {
        return true;
    } else if (typeof number === "string") {
        return number.toLowerCase().trim() && number === "five";
    } else {
        return (number === 5);
    }
}

function isEven(number) {
    if(typeof number === "string") {
        return parseInt(number) % 2 === 0;
    } else return parseInt(number) % 2 === 0;
}

function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        return true;
    } else return letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U";
}

// function sayHello(name) {
//     if (name === "Jane") {
//         return "Hello, Jane!";
//     } else if (name === "Alex") {
//         return "Hello, Alex!";
//     } else if (name === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "";
//     }
// }

// function sayHello(name) {
//     switch(name) {
//         case "Jane":
//             return "Hello, Jane!"
//         case "Alex":
//             return "Hello, Alex!";
//         case "Pat":
//             return "Hello, Pat!";
//         default:
//             return "";
//     }
// }
