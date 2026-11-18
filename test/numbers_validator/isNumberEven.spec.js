const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true if number is even', () => {
      expect(validator.isNumberEven(10)).to.be.true;
      expect(validator.isNumberEven(0)).to.be.true;
      expect(validator.isNumberEven(-24)).to.be.true;
    });
  });

  describe('negative tests', () => {
    it('should return false if number is not even', () => {
      expect(validator.isNumberEven(9)).to.be.false;
      expect(validator.isNumberEven(-7)).to.be.false;
    });

    it('should return an error when provided non a number value', () => {
      const input = 'non-number';
      expect(() => {
        validator.isNumberEven(input);
      }).to.throw(
        Error,
        `[${input}] is not of type "Number" it is of type "${typeof input}"`,
      );
    });
  });
});
