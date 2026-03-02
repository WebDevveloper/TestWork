import { Shape } from "../core/shape.js";
import { positiveNumber } from "../core/validator.js";
/**
 * Прямоугольник
 * width > 0, height > 0
 * Методы: area, perimeter
 * При изменении width/height эмитит событие "change"
 */
export class Rectangle extends Shape {
    type = "rectangle";
    widthValue;
    heightValue;
    constructor(params, id) {
        super(id);
        this.widthValue = positiveNumber(params.width, "width");
        this.heightValue = positiveNumber(params.height, "height");
    }
    // Текущая ширина
    get width() {
        return this.widthValue;
    }
    // Обновляет ширину и отправляет событие "change"
    set width(value) {
        this.widthValue = positiveNumber(value, "width");
        this.notifyChange({ field: "width", value: this.widthValue });
    }
    // Текущая высота
    get height() {
        return this.heightValue;
    }
    // Обновляет высоту и отправляет событие "change"
    set height(value) {
        this.heightValue = positiveNumber(value, "height");
        this.notifyChange({ field: "height", value: this.heightValue });
    }
    area() {
        return this.widthValue * this.heightValue;
    }
    perimeter() {
        return 2 * (this.widthValue + this.heightValue);
    }
    // Сериализация в ShapeData
    toData() {
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
//# sourceMappingURL=rectangle.js.map