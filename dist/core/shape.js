import { randomUUID } from "node:crypto";
/**
 * Базовый класс для всех фигур
 * Даёт общий id, сериализацию (toData) и событие "change" через EventTarget
 */
export class Shape extends EventTarget {
    id;
    constructor(id) {
        super();
        this.id = id ?? randomUUID();
    }
    // Асинхронная версия toData, возвращает Promise
    async toDataAsync() {
        return this.toData();
    }
    // Отправляет событие "change" с detail = { field, value }
    notifyChange(detail) {
        this.dispatchEvent(new CustomEvent("change", { detail }));
    }
}
//# sourceMappingURL=shape.js.map