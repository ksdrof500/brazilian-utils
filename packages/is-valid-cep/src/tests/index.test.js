import isValidCep from '..';
import { CEP_LENGTH } from '../constants';

describe('isValidCep', () => {
  describe('should return false', () => {
    test('when is a empty string', () => {
      expect(isValidCep('')).toBe(false);
    });
    test('when is null', () => {
      expect(isValidCep(null)).toBe(false);
    });
    test('when is undefined', () => {
      expect(isValidCep(undefined)).toBe(false);
    });
    test(`when length is greater than ${CEP_LENGTH}`, () => {
      expect(isValidCep('123456789')).toBe(false);
    });
    test('when is array', () => {
      expect(isValidCep([])).toBe(false);
    });
    test('when is array', () => {
      expect(isValidCep({})).toBe(false);
    });
    test('when is boolean', () => {
      expect(isValidCep(true)).toBe(false);
      expect(isValidCep(false)).toBe(false);
    });
  });
  describe('should return true', () => {
    test('when is a cep valid without mask', () => {
      expect(isValidCep('92500000')).toBe(true);
    });
    test('when is a cep valid with mask', () => {
      expect(isValidCep('92500-000')).toBe(true);
    });
  });
});
