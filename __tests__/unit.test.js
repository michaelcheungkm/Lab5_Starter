// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber', () => {
  expect(isPhoneNumber('5435234534')).toBe(false);
});
test('isEmail', () => {
  expect(isEmail('michaelcheungkm@gmail.com')).toBe(true);
});
test('isHexColor', () => {
  expect(isHexColor('#B72762')).toBe(true);
});
test('isDate', () => {
  expect(isDate('a')).toBe(false);
});
