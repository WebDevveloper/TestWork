import { Shape } from "../core/shape.js";
import type { ShapeData } from "../core/types.js";
export type CircleParams = {
    radius: number;
};
/**
 * Круг
 * radius > 0
 * Методы: area, circumference, diameter
 * При изменении radius эмитит событие "change"
 */
export declare class Circle extends Shape {
    readonly type = "circle";
    private radiusValue;
    constructor(params: CircleParams, id?: string);
    get radius(): number;
    set radius(value: number);
    diameter(): number;
    area(): number;
    circumference(): number;
    toData(): ShapeData;
}
//# sourceMappingURL=circle.d.ts.map