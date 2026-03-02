import { Shape } from "../core/shape.js";
import type { ShapeData } from "../core/types.js";
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
export declare class Triangle extends Shape {
    readonly type = "triangle";
    private a;
    private b;
    private c;
    constructor(params: TriangleParams, id?: string);
    perimeter(): number;
    area(): number;
    toData(): ShapeData;
}
//# sourceMappingURL=triangle.d.ts.map