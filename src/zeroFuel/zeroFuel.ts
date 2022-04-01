export function zeroFuel(distanceToPump: number, mpg: number, fuelLeft: number){
  return distanceToPump >= mpg * fuelLeft;
}
