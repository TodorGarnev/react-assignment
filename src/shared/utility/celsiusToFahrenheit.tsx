export default (temperature: number, toCelsius: boolean): number => {
    return !toCelsius ? temperature * 9/5 + 32 : (temperature - 32) * 5/9;
}