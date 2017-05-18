/// <reference path="fourslash.ts" />

// @noLib: true

// @Filename: /a.d.ts
////declare class C<T> {
////    m(): void;
////}
////export = C;

// @Filename: /b.ts
////import C = require("./a");
////declare var x: C<number>;
////x./**/m;

verify.quickInfoAt("", "foo", "bar");
