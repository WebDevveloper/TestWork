# testwork — библиотека геометрических фигур (TypeScript)

Небольшая TypeScript-библиотека для создания и работы с фигурами:

- Rectangle (прямоугольник)
- Circle (круг)
- Triangle (треугольник)

Что есть в библиотеке:
- вычисления: area, perimeter, diameter, circumference
- сериализация в простой объект (toData / toDataAsync)
- событие `change` через `EventTarget`
- создание фигур по строковому типу через `ShapeRegistry`

## Требования

- Node.js 20+
- npm

> Если npm ругается на версию Node, обновите Node до 20.17+ или 22+

## Быстрый старт

```bash
npm install
npm run build
npm run demo
```

## Скрипты

- `npm run build` — сборка в `dist/`
- `npm run typecheck` — проверка типов без генерации файлов
- `npm run demo` — сборка и запуск `scripts/demo.mjs`

## Структура проекта

```
src/
  core/
    shape.ts        # базовый класс Shape (EventTarget, id, toData)
    registry.ts     # ShapeRegistry (type -> creator)
    types.ts        # общие типы ShapeData и ChangeDetail
    validator.ts    # positiveNumber и базовая валидация
  shapes/
    rectangle.ts
    circle.ts
    triangle.ts
  index.ts          # публичный вход + готовый registry
scripts/
  demo.mjs          # ручная проверка
dist/               # результат сборки (js + d.ts + sourcemaps)
```

## Использование

### 1) Создание напрямую

После сборки можно импортировать из `dist/`:

```js
import { Rectangle, Circle, Triangle } from "./dist/index.js";

const r = new Rectangle({ width: 10, height: 5 });
console.log(r.area());       // 50
console.log(r.perimeter());  // 30

const c = new Circle({ radius: 3 });
console.log(c.diameter());        // 6
console.log(c.circumference());   // ~18.85
console.log(c.area());            // ~28.27

const t = new Triangle({ a: 3, b: 4, c: 5 });
console.log(t.perimeter()); // 12
console.log(t.area());      // 6
```

### 2) Событие `change`

Фигуры используют `EventTarget` и отправляют `CustomEvent` с `detail = { field, value }` при изменении параметров через сеттеры:

```js
import { Rectangle } from "./dist/index.js";

const r = new Rectangle({ width: 10, height: 5 });

r.addEventListener("change", (e) => {
  console.log(e.detail);
});

r.width = 20; // { field: "width", value: 20 }
```

### 3) Создание через `registry` (ShapeRegistry)

В `src/index.ts` есть готовый `registry` с типами:
- `rectangle`
- `circle`
- `triangle`

```js
import { registry } from "./dist/index.js";

const shape = registry.create("circle", { radius: 2 });
console.log(await shape.toDataAsync());
```

## Формат данных (toData / toDataAsync)

Пример объекта:

```js
{
  id: "uuid",
  type: "circle",
  params: { radius: 2 }
}
```

## Как добавить новую фигуру

1) Создайте новый класс в `src/shapes/` и унаследуйте его от `Shape`
2) Реализуйте `type` и `toData()`
3) Зарегистрируйте тип в реестре (например, в `src/index.ts`)

Пример:

```js
registry.register("trapezoid", (p) => {
  return new Trapezoid({ a: p.a, b: p.b, h: p.h });
});
```

## Примечание

Ошибки и тексты валидации в коде написаны на русском языке, так как тестовое задание русскоязычной компании
