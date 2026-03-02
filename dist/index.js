/**
 * Публичный вход библиотеки
 * Экспортирует фигуры, базовые классы и готовый registry
 */
export { Shape } from "./core/shape.js";
export { ShapeRegistry } from "./core/registry.js";
export { Rectangle } from "./shapes/rectangle.js";
export { Circle } from "./shapes/circle.js";
export { Triangle } from "./shapes/triangle.js";
import { ShapeRegistry } from "./core/registry.js";
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Triangle } from "./shapes/triangle.js";
// Готовый реестр с базовыми фигурами (rectangle/circle/triangle)
export const registry = new ShapeRegistry();
registry.register("rectangle", (p) => {
    return new Rectangle({
        width: getNumberParam(p, "width"),
        height: getNumberParam(p, "height")
    });
});
registry.register("circle", (p) => {
    return new Circle({
        radius: getNumberParam(p, "radius")
    });
});
registry.register("triangle", (p) => {
    return new Triangle({
        a: getNumberParam(p, "a"),
        b: getNumberParam(p, "b"),
        c: getNumberParam(p, "c")
    });
});
// Достаёт число из params по ключу и валидирует его
function getNumberParam(params, key) {
    const value = params[key];
    if (value === undefined) {
        throw new Error(`Не передан параметр: ${key}`);
    }
    if (!Number.isFinite(value)) {
        throw new Error(`Некорректное значение параметра: ${key}`);
    }
    return value;
}
//# sourceMappingURL=index.js.map