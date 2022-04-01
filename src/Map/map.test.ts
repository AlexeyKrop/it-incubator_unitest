import {maps} from './map'
let arr: Array<number>
beforeEach(() => {
  arr = [1, 2, 3]
})
test('check map function', () => {
  const result = maps(arr)
  expect(result).toStrictEqual([2, 4, 6])
})