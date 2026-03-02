import { Shape } from "../core/shape.js"; 
import type  { ShapeData } from "../core/types.js";
import { positiveNumber } from "../core/validator.js";

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

export class Rectangle extends Shape {
    public readonly type = "rectangle";

    private widthValue: number;
    private heightValue: number;

    constructor(params: RectangleParams, id?: string) {
        super(id);
        this.widthValue = positiveNumber(params.width, "width");
        this.heightValue = positiveNumber(params.height, "height")
    }

    // Текущая ширина
    public get width(): number {
        return this.widthValue;
    }

    // Обновляет ширину и отправляет событие "change"
    public set width(value: number) {
        this.widthValue = positiveNumber(value, "width")
        this.notifyChange({ field: "width", value: this.widthValue});
    }

    // Текущая высота
    public get height(): number {
        return this.heightValue;
    }

    // Обновляет высоту и отправляет событие "change"
    public set height(value: number) {
        this.heightValue = positiveNumber(value, "height")
        this.notifyChange({ field: "height", value: this.heightValue});
    }

    public area(): number {
        return this.widthValue * this.heightValue
    }

    public perimeter(): number {
        return 2 * (this.widthValue + this.heightValue);
    }

    // Сериализация в ShapeData
    public toData(): ShapeData {
        return {
            id: this.id,
            type: this.type,
            params: {
                width: this.widthValue,
                height: this.heightValue
            }
        };
    }
}

