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

**Mass, then contrast — the stopper.**
The sheet is a saturated red field edge to edge. Peripheral vision resolves
large areas of colour and luminance edges long before it resolves a letterform,
so the first thing a poster needs at 8 m is *area*, not detail. A white sheet
with one coloured block has almost no area working for it.

The long-distance work is then done by a contrast **stack**, not by the red
alone: a black slab on the red, and the number in yellow inside the slab. Three
steps, largest to smallest, in the order the eye resolves them. Yellow is the
highest-luminance mark available and is what survives longest as attention falls
off toward the periphery, which is why the bottom third is a solid yellow band
running into the bleed.

The result is a banded silhouette — red, black, red, yellow — that is
identifiable as a *shape* at a distance where no word on the sheet can be read.

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
Set beside the price inside the yellow band rather than at the foot, so it is
read as part of the offer instead of as legal small print. Losing a deal motivates more
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

Kept in mono at 7.5 mm and rule-topped in white: read fourth, not first. On
the red build it is deliberately quieter than it was on the white one — at this
saturation, anything set larger starts competing with the number.

**Directional cue — the arrow.**
The poster hangs above the tables, so it points at them. The eye follows an
arrow before it decodes the words next to it, and the downward travel continues
into the physical merchandise. It leads the yellow band, which is the
lowest and brightest area of the sheet: the poster's last instruction is where
to walk, and it sits in the part of the design that survives longest at a
glance.

**Concreteness — `FROM $25`.**
A percentage is abstract; a real price a shopper can picture paying is not.
`$25` also ties this poster to the TABLE-001 sign on the tables below it, so
the two signs corroborate each other rather than each making a separate claim.

## The logo

The mark is drawn for a black ground — white hand-lettering, orange disc — so
it keeps its own ground rather than being knocked out onto the sheet. It sits in
a black roundel at 76 mm, top-left, in the position the eye reaches first on the
way in.

On the red build this works harder than it did on white: the roundel is a second
black mark on the sheet, so it belongs to the same family as the anchor slab
instead of sitting on the poster as an applied badge. The orange disc inside it
is now the only brand orange left on the sheet.

Signature, not hero. The store's name is what the poster is *signed* with; the
saving is what it is *about*. A brand mark sized to lead would spend the
poster's one second of attention on something the shopper already knows — they
are standing in the shop.

The art is inlined as a data URI rather than linked, so the poster stays a
single portable file, the same rule the LED panel SVG follows in PLINTH-002.

## Palette

| Token | Value | Job |
|---|---|---|
| `--sheet` | `#d81f06` | the field; mass is what registers first |
| `--slab` | `#17181a` | the number's block — a hard edge on the red |
| `--pop` | `#ffd200` | the anchor, the foot band, the price |
| `--on-red` | `#ffffff` | secondary type, ~4.9:1 on the red |
| `--accent` | `#f08018` | brand orange, now only in the logo roundel |

Yellow on the black slab runs about 14:1. White on the red runs about 4.9:1,
which is fine at the sizes used here and nowhere near small type.

### Two things this deliberately overrides

**The white-ground rule.** `PLINTH-001-prompt.md` argues for a white sheet on
the grounds that attention is bought with isolation rather than colour
everywhere, and that heavy coverage costs ink. That reasoning holds for a
product poster whose job is to make one fixture look desirable. It does not
hold for a clearance hero whose only job is to be seen from the far side of the
floor, so the clearance set overrides it. Both positions are now recorded rather
than left contradicting each other.

**Red is the obvious choice, with the obvious cost.** It is the most culturally
loaded sale colour, which means shoppers are also the most practised at
filtering it, and it is the one hue that does not distinguish this store from
any other sale. The build compensates on structure rather than hue: the black
slab and the yellow foot band give the sheet a silhouette that generic red
signage does not have. Chosen with that trade-off understood.

## Ink coverage

Full-bleed red plus a yellow band is heavy coverage. That is unremarkable for a
large-format print at A1, which is how this poster is meant to be produced. On
an office printer the Letter proof mode will use a lot of toner and may band on
a dry cartridge — it is a proof for checking layout, not the deliverable.

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

## How this was tested

Not by looking at it full-size on a screen, which is the one viewing condition
that never happens in the shop.

A throwaway harness put the poster into a simulated showroom — a bright warm
wall, glowing discs standing in for lit fixtures, and neutral signage already on
the floor — with the poster scaled to the size it actually occupies in a
customer's visual field. An A1 sheet is 0.594 m wide; at 8 m that is about 4.3°
of arc, roughly 7% of a 60° field of view. On a 1500 px scene that is a 105 px
poster. That is the real brief.

The whole scene was then blurred, because peripheral vision does not deliver a
sharp image — a shopper glancing around the room is working with colour, mass
and luminance edges, not text. Whatever survives the blur is what actually
grabs someone.

The white build and the red build were run through it side by side. The white
build dissolved into the warm wall; only its orange bar survived, at the size of
the neutral signage around it. The red build read as a single unmistakable
object. The yellow foot band was added after the first pass of this test, when
the lower half of the sheet came back as featureless dead red.

## One thing to check before printing

The three reassurance lines and `FROM $25` ship with sensible defaults, but they
are claims about this store — confirm they are true of the event actually
running before the poster goes up. A reassurance line that turns out to be
wrong does more damage than not making the claim, because the shopper is
standing in front of the evidence.
