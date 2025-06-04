export const sum = (a: number, b: number): number => a + b;

export const average = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};
