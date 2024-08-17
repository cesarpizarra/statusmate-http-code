import {
  getStatusDescription,
  isServerError,
  isClientError,
  isSuccess,
  isRedirection,
  isInformational,
} from '../src/index';

describe('Status Functions', () => {
  test('getStatusDescription should return correct description', () => {
    expect(getStatusDescription(200)).toBe('OK');
    expect(getStatusDescription(404)).toBe('Not Found');
    expect(getStatusDescription(999)).toBe('Unknown Status Code');
  });

  test('isServerError should correctly identify server errors', () => {
    expect(isServerError(500)).toBe(true);
    expect(isServerError(404)).toBe(false);
  });

  test('isClientError should correctly identify client errors', () => {
    expect(isClientError(404)).toBe(true);
    expect(isClientError(500)).toBe(false);
  });

  test('isSuccess should correctly identify success codes', () => {
    expect(isSuccess(200)).toBe(true);
    expect(isSuccess(404)).toBe(false);
  });

  test('isRedirection should correctly identify redirection codes', () => {
    expect(isRedirection(301)).toBe(true);
    expect(isRedirection(404)).toBe(false);
  });

  test('isInformational should correctly identify informational codes', () => {
    expect(isInformational(100)).toBe(true);
    expect(isInformational(404)).toBe(false);
  });
});
