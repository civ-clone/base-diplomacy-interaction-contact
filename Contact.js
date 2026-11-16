"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const Interaction_1 = require("@civ-clone/core-diplomacy/Interaction");
const Player_1 = require("@civ-clone/core-player/Player");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Turn_1 = require("@civ-clone/core-turn-based-game/Turn");
/**
 * Two players have met. Made from the units that met (each stands for its player), or from the players themselves
 *  when no units are involved: a meeting, an embassy or a wonder (`makeContact`). A registry or a turn may follow, as
 *  for any `Interaction`.
 */
class Contact extends Interaction_1.default {
    constructor(...args) {
        super(
        // Anything that isn't a player, a registry or a turn is a unit, as before players could be given: a unit from
        //  another copy of core-unit still counts.
        ...args.map((arg) => arg instanceof Player_1.default ||
            arg instanceof RuleRegistry_1.default ||
            arg instanceof Turn_1.default
            ? arg
            : arg.player()));
    }
}
exports.Contact = Contact;
exports.default = Contact;
//# sourceMappingURL=Contact.js.map