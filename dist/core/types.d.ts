/**
 * Общие типы для библиотеки
 * ShapeData используется для сериализации, ChangeDetail для события "change"
 */
export type ShapeType = "rectangle" | "triangle" | "circle";
export type ShapeParams = Record<string, number>;
export interface ShapeData {
    id: string;
    type: string;
    params: ShapeParams;
}
export type ChangeDetail = {
    field: string;
    value: number;
};
//# sourceMappingURL=types.d.ts.map