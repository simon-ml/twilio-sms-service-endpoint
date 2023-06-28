"use strict";
const world = "world";
function hello(who = world) {
    return `Hello ${who}! `;
}
console.log(hello());
