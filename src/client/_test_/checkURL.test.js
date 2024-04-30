const { urlCheker } = require("../js/urlChecker")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(urlCheker("read")).toBeFalsy();
    })
    
    test('emails are not considered valid urls', () => {
        expect(urlCheker("mailto:ahmed@gmail.com")).toBeFalsy();
    })
    
    test('expect urls to be true', () => {
        expect(urlCheker("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(urlCheker("")).toBeFalsy();
    })
})