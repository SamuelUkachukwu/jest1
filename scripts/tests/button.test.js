/**
 * @jest-environment jsdom
 */
const buttonClick = require('../button.js');
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe('DOM test', ()=>{
        test('expect p content to change', ()=>{
            buttonClick();
            expect(document.getElementById("par").innerText).toEqual("You Clicked Me");
        });
        test("h1 should exist", () => {
            expect(document.getElementsByTagName("h1").length).toBe(1);
        });
});