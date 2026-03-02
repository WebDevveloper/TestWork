/**
 * Реестр типов фигур
 * Позволяет создавать фигуры по строковому type и проще добавлять новые без switch/case
 */
import type { Shape } from "./shape.js";
export type Creator = (params: Record<string, number>) => Shape;
export declare class ShapeRegistry {
    private creators;
    register(type: string, creator: Creator): void;
    create(type: string, params: Record<string, number>): Shape;
    listTypes(): string[];
}
//# sourceMappingURL=registry.d.ts.map