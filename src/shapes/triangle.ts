import { Shape } from "../core/shape.js"; 
import type  { ShapeData } from "../core/types.js";
import { positiveNumber } from "../core/validator.js";


export type TriangleParams = {
    a: number;
    b: number;
    c: number;
};

/**
 * Треугольник по трём сторонам (a, b, c)
 * Стороны должны быть > 0 и удовлетворять неравенству треугольника
 * Площадь считается по формуле Герона
 */

export class Triangle extends Shape {
    public readonly type = "triangle";

    private a: number;
    private b: number;
    private c: number;

    constructor(params: TriangleParams, id?: string) {
        super(id);
        this.a = positiveNumber(params.a, "a")
        this.b = positiveNumber(params.b, "b")
        this.c = positiveNumber(params.c, "c")

        ensureTriangle(this.a, this.b, this.c)
    }

    public perimeter(): number {
        return this.a + this.b + this.c;
    }

    // Формула герона
    public area(): number {
        const p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    // Сериализация в ShapeData
    public toData(): ShapeData {
        return {
            id: this.id,
            type: this.type,
            params: { a: this.a, b: this.b, c: this.c }
        };
    }
}

// Проверяет неравенство треугольника
function ensureTriangle(a: number, b: number, c: number): void {
    if(a + b <= c || a + c <= b || b + c <= a) {
        throw new Error ("Некорректные стороны треугольника: a+b>c, a+c>b, b+c>a")
    }
}