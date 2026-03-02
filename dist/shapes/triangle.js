import { Shape } from "../core/shape.js";
import { positiveNumber } from "../core/validator.js";
/**
 * Треугольник по трём сторонам (a, b, c)
 * Стороны должны быть > 0 и удовлетворять неравенству треугольника
 * Площадь считается по формуле Герона
 */
export class Triangle extends Shape {
    type = "triangle";
    a;
    b;
    c;
    constructor(params, id) {
        super(id);
        this.a = positiveNumber(params.a, "a");
        this.b = positiveNumber(params.b, "b");
        this.c = positiveNumber(params.c, "c");
        ensureTriangle(this.a, this.b, this.c);
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
    // Формула герона
    area() {
        const p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
    // Сериализация в ShapeData
    toData() {
        return {
            id: this.id,
            type: this.type,
            params: { a: this.a, b: this.b, c: this.c }
        };
    }
}
// Проверяет неравенство треугольника
function ensureTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Некорректные стороны треугольника: a+b>c, a+c>b, b+c>a");
    }
}
//# sourceMappingURL=triangle.js.map