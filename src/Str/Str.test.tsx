import {strToArray} from "./Str";
test('check string to array', () => {
  //data
  const str = 'Hello world!';
  //action
  const result = strToArray(str);
//  expect result
  expect(result).toStrictEqual(['Hello', 'world!'])
})
