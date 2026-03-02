import { Rectangle, Triangle, registry } from "../dist/index.js";

const r = new Rectangle({ width: 10, height: 5 });
console.log("area", r.area());

r.addEventListener("change", (e) => {
  console.log("изменение", e.detail);
});
r.width = 20;

const t = new Triangle({ a: 3, b: 4, c: 5 });
console.log("треугольник", t.area());

const c = registry.create("circle", { radius: 2 });
console.log("круг", await c.toDataAsync());