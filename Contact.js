"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const Interaction_1 = require("@civ-clone/core-diplomacy/Interaction");
class Contact extends Interaction_1.default {
    constructor(...units) {
        const players = units.map((unit) => unit.player());
        super(...players);
    }
}
exports.Contact = Contact;
exports.default = Contact;
//# sourceMappingURL=Contact.js.map