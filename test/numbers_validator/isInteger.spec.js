const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true if number is an integer', () => {
      expect(validator.isInteger(6)).to.be.true;
      expect(validator.isInteger(-6)).to.be.true;
    });
  });

  describe('negative tests', () => {
    it('should return false if number is not an integer', () => {
      expect(validator.isInteger(15.9)).to.be.false;
    });
    it('should return an error when provided with non a number', () => {
      const input = 'string';
      expect(() => {
        validator.isInteger(input);
      }).to.throw(Error, `[${input}] is not a number`);
    });
  });
});
