import * as emoji from "npm:node-emoji";
import react from "npm:react";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

console.log("Emoji Support:", emoji.emojify(`:sauropod: :heart:  npm`));

// deno run -E main.ts
console.log("React Support :", react.version);
