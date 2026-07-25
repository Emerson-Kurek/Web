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
