import Contact from '../Contact';
import InteractionRegistry from '@civ-clone/core-diplomacy/InteractionRegistry';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Turn from '@civ-clone/core-turn-based-game/Turn';
import Unit from '@civ-clone/core-unit/Unit';
import { expect } from 'chai';
import makeContact from '../makeContact';

// A unit that only knows its player, which is all `Contact` asks of one.
const unitOf = (player: Player): Unit =>
  Object.assign(Object.create(Unit.prototype), { player: () => player });

describe('Contact', (): void => {
  it('is between the players of the units that met', (): void => {
    const a = new Player(),
      b = new Player(),
      contact = new Contact(unitOf(a), unitOf(b));

    expect(contact.players()).to.deep.equal([a, b]);
  });

  it('can be made from the players, with a turn', (): void => {
    const ruleRegistry = new RuleRegistry(),
      turn = new Turn(),
      a = new Player(ruleRegistry),
      b = new Player(ruleRegistry);

    turn.increment();
    turn.increment();

    const contact = new Contact(a, b, ruleRegistry, turn);

    expect(contact.players()).to.deep.equal([a, b]);
    expect(contact.when()).equal(turn.value()).not.equal(0);
  });
});

describe('makeContact', (): void => {
  it('registers one contact per pair, whichever player makes it', (): void => {
    const interactionRegistry = new InteractionRegistry(),
      ruleRegistry = new RuleRegistry(),
      a = new Player(ruleRegistry),
      b = new Player(ruleRegistry),
      c = new Player(ruleRegistry),
      first = makeContact(interactionRegistry, a, b, ruleRegistry);

    expect(first).instanceof(Contact);
    expect(makeContact(interactionRegistry, b, a, ruleRegistry)).equal(first);
    expect(makeContact(interactionRegistry, a, b)).equal(first);
    expect(interactionRegistry.entries()).to.deep.equal([first]);

    const other = makeContact(interactionRegistry, a, c, ruleRegistry);

    expect(other).not.equal(first);
    expect(other.isBetween(a, c)).true;
    expect(interactionRegistry.entries()).length(2);
  });

  it('answers a contact the units already made', (): void => {
    const interactionRegistry = new InteractionRegistry(),
      a = new Player(),
      b = new Player(),
      contact = new Contact(unitOf(a), unitOf(b));

    interactionRegistry.register(contact);

    expect(makeContact(interactionRegistry, b, a)).equal(contact);
    expect(interactionRegistry.entries()).length(1);
  });
});
