const { checkForURL } = require("../js/urlChecker")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(checkForURL("read")).toBeFalsy();
    })
    
    test('emails are not considered valid urls', () => {
        expect(checkForURL("mailto:ahmed@gmail.com")).toBeFalsy();
    })
    
    test('expect urls to be true', () => {
        expect(checkForURL("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(checkForURL("")).toBeFalsy();
    })
})