const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it("should return an array of even numbers when valid array of numbers is passed'", () => {
      expect(
        validator.getEvenNumbersFromArray([0, 1, 2, 3, 4, 5, 6]),
      ).to.deep.equal([0, 2, 4, 6]);
      expect(
        validator.getEvenNumbersFromArray([0, -1, -2, -3, -4, -5, -6]),
      ).to.deep.equal([0, -2, -4, -6]);
      expect(validator.getEvenNumbersFromArray([])).to.deep.equal([]);
    });
  });

  describe('negative tests', () => {
    it('should return an error when provided with a non-array value', () => {
      const input = '1, 2, 3, 4, 5, 6, 7';
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(Error, `[${input}] is not an array of "Numbers"`);
    });
    it('should return an error when provided with an array containing non-number values', () => {
      const input = [1, 2, 3, '4', 5, 6, 7];
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(Error, `[${input}] is not an array of "Numbers"`);
    });
  });
});
