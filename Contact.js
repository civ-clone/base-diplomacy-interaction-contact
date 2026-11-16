"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const Interaction_1 = require("@civ-clone/core-diplomacy/Interaction");
/**
 * Two players have met. Made from the units that met (each stands for its player), or from the players themselves
 *  when no units are involved: a meeting, an embassy or a wonder (`makeContact`). A registry or a turn may follow, as
 *  for any `Interaction`.
 */
class Contact extends Interaction_1.default {
    constructor(...args) {
        super(
        // A unit is anything with a `player()`, so a unit from another copy of core-unit still counts.
        ...args.map((arg) => typeof arg.player === 'function'
            ? arg.player()
            : arg));
    }
}
exports.Contact = Contact;
exports.default = Contact;
//# sourceMappingURL=Contact.js.map