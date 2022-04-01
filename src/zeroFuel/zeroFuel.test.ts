import {zeroFuel} from "./zeroFuel";

let distanceToPump: number, mpg: number, fuelLeft: number;
  beforeEach(() => {
    distanceToPump = 50;
    mpg = 25;
    fuelLeft = 2
})
test('check distance to pump', () => {
  const result = zeroFuel(distanceToPump,mpg, fuelLeft)
  expect(result).toBe(true)
})
