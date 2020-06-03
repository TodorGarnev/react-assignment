import { TempType } from '../enums/temperature';

export default (temperature: number, type: TempType): number => {
    return type === TempType.Celsius ? temperature * 9/5 + 32 : (temperature - 32) * 5/9;
}