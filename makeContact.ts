import Contact from './Contact';
import InteractionRegistry from '@civ-clone/core-diplomacy/InteractionRegistry';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Turn from '@civ-clone/core-turn-based-game/Turn';

/**
 * `player` and `other` make contact with no units involved, and the `Contact` between them is answered. There is
 *  only ever one per pair (civ-clone/web-renderer#377), so one they already have is answered instead of making
 *  another.
 */
export const makeContact = (
  interactionRegistry: InteractionRegistry,
  player: Player,
  other: Player,
  ...args: (RuleRegistry | Turn)[]
): Contact => {
  const existing = interactionRegistry
    .getByPlayers(player, other)
    .find(
      (interaction): interaction is Contact => interaction instanceof Contact
    );

  if (existing !== undefined) {
    return existing;
  }

  const contact = new Contact(player, other, ...args);

  interactionRegistry.register(contact);

  return contact;
};

export default makeContact;
