# PLINTH-001 — Levitating Stone Podium

Source prompt for the in-store poster set. Five staging directions built from
this prompt are previewed in [`podium-directions.html`](./podium-directions.html).

## One-line version

> A rough-hewn circular stone slab floating in midair inside a dark studio void,
> lit by a single narrow overhead spotlight that carves a soft cone through the
> haze and casts a hard elliptical shadow on the floor below.

## Full prompt

Product-photography still life, vertical 2:3 composition. A thick disc of raw grey
stone — chiselled edges, pitted and fractured surface, unpolished — hovers
weightlessly in the lower-middle third of the frame. Nothing supports it. Below, a
crisp dark ellipse of shadow sits on a smooth seamless floor, confirming the gap of
air.

A single hard spotlight enters from top center, its beam visible as a soft
triangular cone of light through faint atmospheric haze. The beam widens as it
descends, grazing the top face of the stone so the texture reads in raking light
while the front edge falls into shadow. Background: near-black charcoal gradient,
seamless cyclorama, no horizon line, no props, no text.

## Direction notes

- **Mood:** reverent, monolithic, museum-like. An empty pedestal awaiting its subject.
- **Palette:** greyscale only — charcoal `#14161a` through warm concrete `#b8b3ab`. No colour casts.
- **Light:** one key, no fill. Let 60% of the frame go to true black.
- **Negative space:** upper two-thirds intentionally empty — reserved for a headline or a floating product.
- **Avoid:** visible rigging, reflections, secondary light sources, glossy floor, ambient bounce.

## Staging directions

| # | Direction | Prompt delta | Built for |
|---|-----------|--------------|-----------|
| 01 | Monolith | Baseline. Single overhead key, 45° cone, no fill. | End-cap / window bay, long viewing distance |
| 02 | Off-axis | Key light offset 30° right, stone at right third, floor pool follows the light. | Aisle / gondola, copy-led |
| 03 | Double plinth | Two stone discs on one vertical axis, upper disc 60% scale, shared beam, two shadows at different densities. | Multi-buy and bundle offers |
| 04 | Shelf edge | 16:5 crop, stone at left quarter, beam clipped by the top edge, floor pool widened. | Shelf talkers, gondola headers, till point |
| 05 | Daylight | Invert ground to bone white, stone in dark basalt, diffuse overhead key, shadow at 20% density. | Window frontage; survives store fluorescents |

Direction 04 is a re-crop of 01's lighting set-up, so those two ship as a family.
If 02 or 03 is chosen, the shelf-edge strip needs re-staging to match.

## Live build: PLINTH-002

`posters/plinth-02-offaxis.html` is direction 02 built for the Litup Lighting
Hillsview-1 12in round surface mount (LIT5212WH-40K-WE), $64.00 marked down to
$14.99.

The staging departs from the reference prompt in one deliberate way: the poster
is lit by the product's own published spec rather than a studio tungsten key.
4000K neutral white instead of tungsten amber, a 120deg spread instead of a
narrow cone, a diffuse falloff with no hard edge (translucent lens), and a soft
contact shadow because a broad source cannot throw a hard one. The fixture
itself sits on the plinth as the hero, throwing its own spill onto the stone.

## Clearance treatment

The upper field carries a solid block of the brand orange with DON'T MISS OUT
and CLEARANCE knocked out of it in near-black. This is the stopper: the poster
sits on a table competing with a whole shop floor, so it has one job before it
has any other, which is to be seen from across the room by someone who was not
looking for it. A solid colour block is the only device on the sheet with
enough mass to do that.

Type on the block is near-black rather than white. Near-black on this orange
runs about 7:1 contrast against roughly 2.4:1 for white, and it matches the
discount flash, so the two orange blocks read as one family.

The offer is a single ladder in the lower left, read in the order a shopper
values it: what it was, what it is now, what percent off, what that saves,
how long it lasts.

## Product asset

`assets/led-panel-12in.svg` is a scalable, background-free build of the round
LED panel: matte white trim with an outer specular edge and a soft inner bevel,
a recess seam that reads shadowed at the top and lit along the bottom, and a
frosted lens on an off-centre radial gradient with fine grain over it. Drawn
unlit, so whatever set it is dropped into supplies the light. It is inlined in
the poster rather than linked, so the poster stays a single portable file.

## Palette

The poster ships on a white ground. Two reasons: heavy black coverage streaks
on a dry printer and costs ink, and a dark sheet recedes on a bright shop floor
instead of competing for attention.

Attention is bought with contrast and isolation rather than colour everywhere.
The sheet is white, the type is near-black, and exactly one element is
saturated: the brand orange `#f08018` behind the discount flash. A single
saturated mark in an otherwise neutral field is the thing the eye goes to
first. Orange also carries value and affordability in retail, and it is the
company's own colour, so the accent does brand work at the same time.

The price ladder is built for anchoring: the old price sits beside the new one
with an orange strike, the flash states the percentage rather than the dollar
saving because the bigger number reads as the bigger deal, and the dollar
saving is repeated quietly in the fineprint. `While stock lasts` sits directly
under the price as a scarcity line rather than buried at the foot of the sheet.

Orange is used at two strengths: `--accent` for fills only, and `--accent-ink`
(a deeper `#a8500a`) for type and rules, since the brand orange on white is too
low-contrast to read at small sizes.

The clearance set (FLOOR-001, TABLE-001) deliberately departs from the white
ground above and runs a full-bleed red field instead. The reasoning for the
split is in `FLOOR-001-prompt.md` under "Palette": this rule is written for a
product poster selling one fixture, and a clearance hero read from across the
floor has a different job. The rule stands for the PLINTH directions.

The original dark set is kept as `body.night` and switches from the toolbar.

## Sheet sizes

The poster carries its layout in percentages and its type in millimetres
multiplied by `--k`, so one file serves both sheets. `--k` is 1 at A1
(594x841 + 3mm bleed) and 0.363 at US Letter (8.5 x 11in, no bleed), and the
toolbar switches between them. Safety is split: `--safety` horizontally,
`--safety-y` vertically. Letter runs 14mm at the sides and 21mm top and bottom,
because home printers clip the head and foot of the sheet more than the flanks,
and the item number lives at the foot. Letter is the home-printable
version and fills the page edge to edge at exactly 8.5:11.

## Sales poster fields

Every direction carries the same set of editable fields:

- Brand or department line
- Product name
- One line of product copy
- Price, with optional was-price
- Promo mechanic
- SKU and offer end date

## What stays fixed across directions

- Single overhead key, no fill light
- Raw unpolished stone, chiselled edge
- Visible gap between stone and shadow
- Greyscale only — no colour cast
- Seamless ground, no horizon line
