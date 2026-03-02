/**
 * Реестр типов фигур
 * Позволяет создавать фигуры по строковому type и проще добавлять новые без switch/case
 */


import type { Shape } from "./shape.js";

// Функция, которая создаёт фигуру из набора числовых параметров
export type Creator = (params: Record<string, number>) => Shape;

// Map: type -> creator
export class ShapeRegistry {
    private creators = new Map<string, Creator>();

    // Регистрирует тип фигуры и функцию создания
    public register(type: string, creator: Creator): void {
        this.creators.set(type, creator);
    }

    // Создаёт фигуру по типу, если тип неизвестен, кидает ошибку
    public create(type: string, params: Record<string, number>): Shape {
        const creator = this.creators.get(type);
        if(!creator){
            throw new Error(`Неизвестный тип фигуры: ${type}`)
        }
        return creator(params)
    }

    // Возвращает список всех зарегистрированных типов фигур
    public listTypes(): string[] {
        return [...this.creators.keys()];
    }
}