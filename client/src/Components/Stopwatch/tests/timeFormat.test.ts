import { timeFormat } from '../../../utils/timeFormat';
import {describe, expect, test} from '@jest/globals';

const format0 = '00:00:00:00';
const format1 = '00:00:59:00';
const format2 = '00:01:00:00';
const format3 = '00:01:01:00';
const format4 = '07:00:06:00';

describe('interval in deciseconds formatted to readable time', () => {
  test('default', () => {
    expect(timeFormat(0)).toBe(format0);
  });
  test('59 seconds', () => {
    expect(timeFormat(590)).toBe(format1);
  });
  test('1 minute', () => {
    expect(timeFormat(600)).toBe(format2);
  });
  test('61 seconds', () => {
    expect(timeFormat(610)).toBe(format3);
  });
  test('7 hours, 6 seconds', () => {
    expect(timeFormat(252060)).toBe(format4);
  });
});