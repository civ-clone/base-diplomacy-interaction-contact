import Interaction from '@civ-clone/core-diplomacy/Interaction';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Turn from '@civ-clone/core-turn-based-game/Turn';
import Unit from '@civ-clone/core-unit/Unit';
/**
 * Two players have met. Made from the units that met (each stands for its player), or from the players themselves
 *  when no units are involved: a meeting, an embassy or a wonder (`makeContact`). A registry or a turn may follow, as
 *  for any `Interaction`.
 */
export declare class Contact extends Interaction {
  constructor(...args: (Unit | Player | RuleRegistry | Turn)[]);
}
export default Contact;
