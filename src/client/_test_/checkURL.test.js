const { urlChecker } = require("../js/urlChecker");

describe('urlValidity', () => {
    test('should return false for invalid URLs', () => {
        expect(urlChecker("read")).toBeFalsy();
    });
    
    test('should return false for email URLs', () => {
        expect(urlChecker("mailto:budur@gmail.com")).toBeFalsy();
    });
    
    test('should return true for valid URLs', () => {
        expect(urlChecker("https://www.google.com")).toBeTruthy();
    });

    test('should return false for empty string', () => {
        expect(urlChecker("")).toBeFalsy();
    });
});
