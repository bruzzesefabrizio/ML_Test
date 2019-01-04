var {translate2Human} = require ('./api/controllers/todoListController');
var {decodeBits2Morse} = require ('./api/controllers/todoListController');
var {translate2Morse} = require ('./api/controllers/todoListController');

var msjmorse = ".... --- .-.. .-     -- . .-.. ..";
var msjhuman = "hola meli";

translate2Human(msjmorse);
translate2Morse(msjhuman);
