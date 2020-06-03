export default (temperature: number, isCelsius: boolean): number => {
    return isCelsius ? (temperature * 9/5 + 32) : ((temperature - 32) * 5/9);
}