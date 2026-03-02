/**
 * Публичный вход библиотеки
 * Экспортирует фигуры, базовые классы и готовый registry
 */
export { Shape } from "./core/shape.js";
export { ShapeRegistry } from "./core/registry.js";
export type { Creator } from "./core/registry.js";
export { Rectangle } from "./shapes/rectangle.js";
export type { RectangleParams } from "./shapes/rectangle.js";
export { Circle } from "./shapes/circle.js";
export type { CircleParams } from "./shapes/circle.js";
export { Triangle } from "./shapes/triangle.js";
export type { TriangleParams } from "./shapes/triangle.js";
import { ShapeRegistry } from "./core/registry.js";
export declare const registry: ShapeRegistry;
//# sourceMappingURL=index.d.ts.map