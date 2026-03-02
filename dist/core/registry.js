/**
 * Реестр типов фигур
 * Позволяет создавать фигуры по строковому type и проще добавлять новые без switch/case
 */
// Map: type -> creator
export class ShapeRegistry {
    creators = new Map();
    // Регистрирует тип фигуры и функцию создания
    register(type, creator) {
        this.creators.set(type, creator);
    }
    // Создаёт фигуру по типу, если тип неизвестен, кидает ошибку
    create(type, params) {
        const creator = this.creators.get(type);
        if (!creator) {
            throw new Error(`Неизвестный тип фигуры: ${type}`);
        }
        return creator(params);
    }
    // Возвращает список всех зарегистрированных типов фигур
    listTypes() {
        return [...this.creators.keys()];
    }
}
//# sourceMappingURL=registry.js.map