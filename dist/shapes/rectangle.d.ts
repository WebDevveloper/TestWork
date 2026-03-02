import { Shape } from "../core/shape.js";
import type { ShapeData } from "../core/types.js";
export type RectangleParams = {
    width: number;
    height: number;
};
/**
 * Прямоугольник
 * width > 0, height > 0
 * Методы: area, perimeter
 * При изменении width/height эмитит событие "change"
 */
export declare class Rectangle extends Shape {
    readonly type = "rectangle";
    private widthValue;
    private heightValue;
    constructor(params: RectangleParams, id?: string);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    area(): number;
    perimeter(): number;
    toData(): ShapeData;
}
//# sourceMappingURL=rectangle.d.ts.map