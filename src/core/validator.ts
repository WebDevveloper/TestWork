/**
 * Проверяет, что value - конечное число > 0
 * Используется для валидации параметров фигур
 */
export function positiveNumber(value: number, name: string): number {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name} должно быть положительное число`);
  }
  return value;
}