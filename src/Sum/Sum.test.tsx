import {multi, sum} from "./Sum";
//data
let a: number, b: number;
beforeEach(() => {
  a = 1;
  b = 20;
})
test('check sum', () => {
  const result = sum(a, b);
  expect(result).toBe(21)
})
test('check multi', () => {
  const result2 = multi(a, b);
  expect(result2).toBe(20)
})