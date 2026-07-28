# FLOOR-001 — Store-wide clearance hero

Built as [`posters/floor-01-clearance.html`](./posters/floor-01-clearance.html).
A1 portrait (594 × 841 mm + 3 mm bleed), with a US Letter proof mode on the
same file.

## The brief in one sentence

It hangs above the clearance tables and is read from across the shop floor —
roughly 6–10 m, at an angle, by someone who was not looking for it and is
walking past.

Every decision below serves that sentence. A poster read at 400 mm on a desk
is a different object, and most of what follows would be wrong for it.

## What the poster has to do, in order

A shopper gives a sign like this about a second and a half before deciding
whether to give it any more. So the sheet is built as four beats, and each one
has to earn the next:

1. **Be seen** — before anything is read.
2. **Say how big the saving is** — the reason to care.
3. **Say why buy it here** — the reason not to walk out and price it online.
4. **Say what to do now** — the thing that turns interest into a stop.

## The levers, and where each one is on the sheet

**Isolation (the Von Restorff effect) — the stopper.**
The sheet is white, the type is near-black, and exactly two elements are
saturated: the orange banner and the price flash. A single saturated mark in an
otherwise neutral field is what the eye lands on first, and it works at
distance where detail has already collapsed. Adding a second colour would cost
more than it bought. This follows the rule already set in `PLINTH-001-prompt.md`.

**Anchoring — the number is the largest object on the sheet.**
`70%` is set at `40cqw`, sized off the banner it sits in, so it fills the block
at any sheet size. The high end of the discount range is stated first and
biggest; the entry price (`FROM $25`) sits far down the sheet in the fourth
beat. Order matters — the large number is what every later number gets judged
against.

The percentage carries the headline rather than a dollar saving, because on a
store-wide sale there is no single dollar figure to quote, and the larger
number reads as the larger deal.

**Honest framing — `UP TO` is set large, not buried.**
It sits directly above the number in the same block at 13 mm, legible at the
same distance as the number itself. A range headline with the qualifier hidden
in 6pt is the move that makes shoppers distrust the next sign they see. The
qualifier costs nothing here and buys the rest of the poster its credibility.

**Loss aversion and scarcity — `WHEN IT'S GONE, IT'S GONE`.**
Placed directly under the price flash rather than at the foot, so it is read as
part of the offer instead of as legal small print. Losing a deal motivates more
reliably than gaining one, and on genuine clearance the claim is simply true —
which is the only condition under which it is worth making.

**Authority and reassurance — the three-up band.**
A discount alone reads as liquidation, and liquidation reads as "this shop is
in trouble" rather than "this is a good buy". The band under the hook —
*lit and on display · ask us about any of it · take it home today* — is what
separates a showroom's sale from a going-out-of-business sale. It also answers
the objection that actually loses the sale in a lighting store, which is not
price but "will it look right in my room" — the reply to which is that the
fixture is lit and standing in front of you.

Kept in mono at 9 mm and rule-topped in orange: read fourth, not first.

**Directional cue — the arrow.**
The poster hangs above the tables, so it points at them. The eye follows an
arrow before it decodes the words next to it, and the downward travel continues
into the physical merchandise. This is the fourth beat, and it is deliberately
the lowest element on the sheet other than the fineprint: the poster's last
instruction is where to walk.

**Concreteness — `FROM $25`.**
A percentage is abstract; a real price a shopper can picture paying is not.
`$25` also ties this poster to the TABLE-001 sign on the tables below it, so
the two signs corroborate each other rather than each making a separate claim.

## The logo

The mark is drawn for a black ground — white hand-lettering, orange disc — so
it keeps its own ground here rather than being knocked out onto white paper.
It sits in a black roundel at 76 mm, top-left, in the position the eye reaches
first on the way in.

Signature, not hero. The store's name is what the poster is *signed* with; the
saving is what it is *about*. A brand mark sized to lead would spend the
poster's one second of attention on something the shopper already knows — they
are standing in the shop.

The art is inlined as a data URI rather than linked, so the poster stays a
single portable file, the same rule the LED panel SVG follows in PLINTH-002.

## Type on the orange

Near-black, not white. Near-black on `#f08018` runs about 7:1; white runs about
2.4:1. It also matches the price flash, so both orange blocks read as one
family rather than two unrelated stickers.

## Sheet and scale

`--k` is 1 at A1 and 0.363 at US Letter, and the toolbar switches between them.
The Letter mode is a proof — it lets the store check the layout on the office
printer before committing to large-format. Safety splits 20 mm at A1;
Letter runs 14 mm at the sides and 21 mm head and foot, since home printers
clip top and bottom harder than the flanks.

The banner sizes its number with a container query rather than a fixed size, so
the anchor fills its block on both sheets without a second set of numbers to
maintain.

## Editable fields

Everything the store changes per event is `contenteditable`, so a sale can be
retargeted without opening the file in an editor:

- Event name and department line
- The discount number and the `UP TO` qualifier
- The three reassurance lines
- The directional instruction
- Entry price and scarcity line
- Both fineprint slots

## One thing to check before printing

The three reassurance lines and `FROM $25` ship with sensible defaults, but they
are claims about this store — confirm they are true of the event actually
running before the poster goes up. A reassurance line that turns out to be
wrong does more damage than not making the claim, because the shopper is
standing in front of the evidence.
