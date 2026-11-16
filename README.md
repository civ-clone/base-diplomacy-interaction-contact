# base-diplomacy-interaction-contact

The `Contact` interaction: two players have met.

- `new Contact(unit, otherUnit)`: made from the units that met, each standing for its player.
- `new Contact(player, other, ruleRegistry?, turn?)`: made from the players, when no units are involved.
- `makeContact(interactionRegistry, player, other, ...registryOrTurn)`: registers the pair's `Contact` unless they
  have one already, and answers it. There is only ever one per pair (civ-clone/web-renderer#377). Meetings, embassies
  and wonders that make contact call it.
