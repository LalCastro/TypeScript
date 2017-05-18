// @declaration: true

// @Filename: /a.d.ts
declare class C<T> {
    m(): void;
}
export = C;

// @Filename: /b.ts
import C = require("./a");
declare var x: C<number>;
export const y = x.m;
