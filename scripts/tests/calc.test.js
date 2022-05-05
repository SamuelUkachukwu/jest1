const addition = require('../calc.js');

describe('calculator', ()=>{
    describe('Addition function', ()=>{
        test('should return 42 for 20 + 22', ()=>{
            expect(addition(20,22)).toBe(42);
        });
        test('should return 2 for -20 + 22', ()=>{
            expect(addition(-20,22)).toBe(2);
        });
        test("should not return 22 for '' + 22", ()=>{
            expect(addition('',22)).not.toBe(22);
        });
        test('should  not return 22 for undefined + 22', ()=>{
            expect(addition(undefined,22)).not.toBe(22);
        });

    });
    describe('Subtraction function', ()=>{

    });
    describe('Multiplication function', ()=>{

    });
    describe('Division function', ()=>{

    });
})