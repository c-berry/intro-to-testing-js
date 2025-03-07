// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when executed", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when executed", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string, 'Hello, Pat!' when executed", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, World!' when executed", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when executed", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when executed", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when executed", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when executed", function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when executed", function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
});

describe("isFive", function() {
    it("should be a defined function", function() {
    expect(typeof isFive).toBe("function");
    });
    it("should return the boolean true", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return the boolean true", function() {
        expect(isFive("5")).toBe(true);
    });
    it("should return the boolean true", function() {
        expect(isFive("five")).toBe(true);
    });
});

describe("isEven", function() {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it("should return boolean false", function() {
        expect(isEven()).toBe(false);
    });
    it("should return boolean true", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return boolean false", function() {
        expect(isEven(3)).toBe(false);
    });
    it("should return boolean false", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("should return boolean true", function() {
        expect(isEven("8")).toBe(true);
    });
    it("should return boolean false", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return boolean false", function() {
        expect(isEven(true)).toBe(false);
    });
    it("should return boolean false", function() {
        expect(isEven(false)).toBe(false);
    });
});

describe("isVowel", function() {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should return boolean false", function() {
        expect(isVowel()).toBe(false);
    });
    it("should return boolean true", function() {
        expect(isVowel("a")).toBe(true);
    });
    it("should return boolean true", function() {
        expect(isVowel("A")).toBe(true);
    });
    it("should return boolean false", function() {
        expect(isVowel("y")).toBe(false);
    });
    it("should return boolean false", function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should return boolean false", function() {
        expect(isVowel(true)).toBe(false);
    });
    it("should return boolean false", function() {
        expect(isVowel(false)).toBe(false);
    });
    it("should return boolean false", function() {
        expect(isVowel("banana")).toBe(false);
    });
});

describe('addSum', function() {
    it('should be a defined function', function () {
        expect(typeof addSum).toBe('function');
    });
    it("should return 5", function() {
        expect(addSum(2, 3)).toBe(5);
    });
    it("should return -12", function () {
        expect(addSum(-3, -9)).toBe(-12);
    });
    it("should return 11", function() {
        expect(addSum("5", 6)).toBe(11);
    });
    it("should return 6", function () {
        expect(addSum("-4", "10")).toBe(6);
    });
    it("should return NaN", function() {
        expect(addSum("banana", "split")).toBe(NaN);
    });
    it("should return NaN", function () {
        expect(addSum(2, "apples")).toBe(NaN);
    });
    it("should return NaN", function () {
        expect(addSum()).toBe(NaN);
    });
});


