const primeNumber = require('../script');
const expect = require('chai').expect;

describe("In the Prime series", () => {
    it("The argument should be a number", () => {
        expect(()=>primeNumber("Test")).to.throw(TypeError)
    });
    it("Argument -10 should cause error", () => {
        expect(()=>primeNumber(-10)).to.throw()
    });
    it("Argument 2.5 should cause error", () => {
        expect(()=>primeNumber(2.5)).to.throw()
    });
    it("Argument 0 should cause error", () => {
        expect(() => primeNumber(0)).to.throw()
    });
    it("Should return 2 for argument 1", () => {
        expect(primeNumber(1)).to.equal(2);
    });
    it("Should return 37 for argument 12", () => {
        expect(primeNumber(12)).to.equal(37);
    });
    it("Should return 53 for argument 16", () => {
        expect(primeNumber(16)).to.equal(53);
    });
    it("Should return 541 for argument 100", () => {
        expect(primeNumber(100)).to.equal(541);
    });
});