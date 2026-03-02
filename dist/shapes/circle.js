import { Shape } from "../core/shape.js";
import { positiveNumber } from "../core/validator.js";
/**
 * Круг
 * radius > 0
 * Методы: area, circumference, diameter
 * При изменении radius эмитит событие "change"
 */
export class Circle extends Shape {
    type = "circle";
    radiusValue;
    constructor(params, id) {
        super(id);
        this.radiusValue = positiveNumber(params.radius, "radius");
    }
    // Текущий радиус
    get radius() {
        return this.radiusValue;
    }
    // Обновляет радиус и отправляет событие "change"
    set radius(value) {
        this.radiusValue = positiveNumber(value, "radius");
        this.notifyChange({ field: "radius", value: this.radiusValue });
    }
    diameter() {
        return this.radiusValue * 2;
    }
    area() {
        return Math.PI * this.radiusValue * this.radiusValue;
    }
    circumference() {
        return 2 * Math.PI * this.radiusValue;
    }
    // Сериализация в ShapeData
    toData() {
        return {
            id: this.id,
            type: this.type,
            params: { radius: this.radiusValue }
        };
    }
}
//# sourceMappingURL=circle.js.map