var { translate2Human } = require ('../controller');

describe('given the morse translator', function(){
    it('then should translate to human', function() {
        var input = ".... --- .-.. .-     -- . .-.. ..";
        var expected = "hola meli ";
        expect(translate2Human(input)).toBe(expected);
    })

    it('then should translate to human', function() {
        var input = ".... --- .-.. .-     -- . .-.. ..";
        var expected = "hola meli ";
        expect(translate2Human(input)).toBe(expected);
    })

    it('then should translate to human', function() {
        var input = ".... --- .-.. .-     -- . .-.. ..";
        var expected = "hola meli ";
        expect(translate2Human(input)).toBe(expected);
    })
});