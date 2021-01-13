import Interaction from '@civ-clone/core-diplomacy/Interaction';
import Player from '@civ-clone/core-player/Player';
import Unit from '@civ-clone/core-unit/Unit';

export class Contact extends Interaction {
  constructor(...units: Unit[]) {
    const players = units.map((unit: Unit): Player => unit.player());

    super(...players);
  }
}

export default Contact;
