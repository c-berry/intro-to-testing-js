// helloWorld function
const helloWorld = function() {
    return "Hello, World!";
}

// const sayHello = function(name) {
//     return "Hello, " + name + "!";
// }

function sayHello(name) {
    if (typeof name === "boolean") {
        return "Hello, World!"
    } else if (typeof name === "number") {
        return "Hello, World!";
    } else if (name) {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
        }
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
