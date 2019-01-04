var morseToHuman = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-·-·--":"!",
    "·-·-·-":".",
    "--··--":","
};

var humanToMorse = {  
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    " ":"/",
    "!":"-·-·--",
    ".":"·-·-·-",
    ",":"--··--"
};
 
var bitToMorse = {  
    "1" : ".",
    "111" : "-",
    "0" : " "
};

function translate2Human (message) {

    var messageConverted = [];

    message.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(morseToHuman[letter]);
        });
        messageConverted.push(" ");
    });
     
    console.log(messageConverted.join(""));
    return messageConverted.join("");
}

function translate2Morse (message) {

    var messageConverted = [];
    message = message.split('').join(' ');
    message.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(humanToMorse[letter]);
        });
        messageConverted.push(" ");
    });
     
    console.log(messageConverted.join(" "));
    return messageConverted.join(""); 
}

function decodeBits2Morse (message) {

    var messageConverted = [];

    message.split("000").map(function (word) {
        word.split("0").map(function (letter) {
            messageConverted.push(bitToMorse[letter]);
        });
        messageConverted.push(" ");
    });
     
    console.log(messageConverted.join(""));
    return messageConverted.join(""); 
}

module.exports = {
    translate2Human : translate2Human,
    decodeBits2Morse : decodeBits2Morse,
    translate2Morse : translate2Morse
}