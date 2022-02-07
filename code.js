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
    } else if (number === 5) {
        return true;
    } else if (typeof number === "string") {
        return number.toLowerCase().trim() && number === "five";
    } else return false;
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
