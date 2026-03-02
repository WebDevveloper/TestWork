import type { ChangeDetail, ShapeData } from "./types.js";
/**
 * Базовый класс для всех фигур
 * Даёт общий id, сериализацию (toData) и событие "change" через EventTarget
 */
export declare abstract class Shape extends EventTarget {
    readonly id: string;
    abstract readonly type: string;
    protected constructor(id?: string);
    abstract toData(): ShapeData;
    toDataAsync(): Promise<ShapeData>;
    protected notifyChange(detail: ChangeDetail): void;
}
//# sourceMappingURL=shape.d.ts.map