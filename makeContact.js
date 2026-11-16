"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeContact = void 0;
const Contact_1 = require("./Contact");
/**
 * `player` and `other` make contact with no units involved, and the `Contact` between them is answered. There is
 *  only ever one per pair (civ-clone/web-renderer#377), so one they already have is answered instead of making
 *  another.
 */
const makeContact = (interactionRegistry, player, other, ...args) => {
    const existing = interactionRegistry
        .getByPlayers(player, other)
        .find((interaction) => interaction instanceof Contact_1.default);
    if (existing !== undefined) {
        return existing;
    }
    const contact = new Contact_1.default(player, other, ...args);
    interactionRegistry.register(contact);
    return contact;
};
exports.makeContact = makeContact;
exports.default = exports.makeContact;
//# sourceMappingURL=makeContact.js.map