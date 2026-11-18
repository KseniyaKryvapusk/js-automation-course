const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true if all elements in the array are numbers', () => {
      const inputArray = [1, 2, 3, 4, 5];
      expect(validator.isAllNumbers(inputArray)).to.be.true;
      expect(validator.isAllNumbers([])).to.be.true;
    });
  });

  describe('negative tests', () => {
    it('should return false if not all elements in the array are numbers', () => {
      const inputArray = [1, 2, '3', 'string', null];
      expect(validator.isAllNumbers(inputArray)).to.be.false;
    });
    it('should return an error when provided with a non array', () => {
      const input = 'string';
      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(Error, `[${input}] is not an array`);
    });
  });
});
