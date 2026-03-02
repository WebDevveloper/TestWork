import { randomUUID } from "node:crypto";
import type { ChangeDetail, ShapeData } from "./types.js";

/**
 * Базовый класс для всех фигур
 * Даёт общий id, сериализацию (toData) и событие "change" через EventTarget
 */
export abstract class Shape extends EventTarget {
    public readonly id: string;
    public abstract readonly type: string;
    
    protected constructor(id?: string) {
        super();
        this.id = id ?? randomUUID();
    }

    // Данные фигуры в простом виде, удобно сохранять или логировать
    public abstract toData(): ShapeData;


    // Асинхронная версия toData, возвращает Promise
    public async toDataAsync(): Promise<ShapeData> {
        return this.toData();
    }

   
    // Отправляет событие "change" с detail = { field, value }
    protected notifyChange(detail: ChangeDetail): void {
        this.dispatchEvent(new CustomEvent<ChangeDetail>("change", { detail }))
    }
}