import { Shape } from "../core/shape.js"; 
import type  { ShapeData } from "../core/types.js";
import { positiveNumber } from "../core/validator.js";

export type CircleParams = {
    radius: number;
};

/**
 * Круг
 * radius > 0
 * Методы: area, circumference, diameter
 * При изменении radius эмитит событие "change"
 */

export class Circle extends Shape {
    public readonly type = "circle";

    private radiusValue: number;

    constructor(params: CircleParams, id?: string) {
        super(id);
        this.radiusValue = positiveNumber(params.radius, "radius");
    }

    // Текущий радиус
    public get radius(): number {
        return this.radiusValue
    }

    // Обновляет радиус и отправляет событие "change"
    public set radius(value: number) {
        this.radiusValue = positiveNumber(value, "radius");
        this.notifyChange({ field: "radius", value: this.radiusValue });
    }

    public diameter(): number {
        return this.radiusValue * 2;
    }

    public area(): number {
        return Math.PI * this.radiusValue * this.radiusValue;
    }

    public circumference(): number {
        return 2 * Math.PI * this.radiusValue
    }

    // Сериализация в ShapeData
    public toData(): ShapeData {
        return {
            id: this.id,
            type: this.type,
            params: { radius: this.radiusValue }
        };
    }
}