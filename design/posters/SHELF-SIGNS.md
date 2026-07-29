# SHELF-SIGNS — flush mount clearance set

Replaces the three photocopied sheets taped to the box tops on the flush mount
table. Same message, rebuilt to be read across the shop floor rather than at
arm's length. One file, `shelf-signs.html`, three sheets, prints to three pages.

## What the originals were doing wrong

Both original layouts set everything at roughly one size in a single weight, so
nothing on the sheet was louder than anything else, and a shopper had to already
be standing at the table to read any of it. `GREAT DEAL` ran twice per sheet in
outline type at the same size as the body copy, which spends the loudest words
on the quietest treatment. Two of the three sheets were identical, so the run of
boxes read as one repeated sign instead of three.

## The set

| # | Sheet | Job |
|---|-------|-----|
| 01 | Rooms | Where the light goes — the four rooms, one per line |
| 02 | Price | What it costs — `$19.99` knocked out of the lower half |
| 03 | Bookend | Both, compressed, for the box that would otherwise repeat |

Three distinct sheets rather than two designs and a duplicate. They share a
palette and a type scale, so the run reads as a set from a distance and as
three separate messages up close.

## Palette

Carried over from the PLINTH set, for the same reasons documented there: white
ground because heavy coverage streaks on an office printer and a dark sheet
recedes under store fluorescents; attention bought with one saturated mass
rather than colour everywhere.

- Ground `#ffffff`, ink `#17181a`
- Brand orange `#f08018` for fills, shading to `#d9660a` across large blocks
- `#a8500a` wherever orange has to work as type on white — the brand orange
  runs about 2.4:1 on white and is unreadable at small sizes

Type on orange is near-black, not white: roughly 7:1 against about 2.4:1.

## Hierarchy

Each sheet has exactly one mass of orange large enough to be seen by someone who
was not looking for it, and one thing that is unambiguously the biggest element.
Sheet 01 leads with `GREAT DEAL` because the offer is the stopper and the rooms
are the payoff; sheet 02 inverts it and leads with the product because the price
panel below carries the weight on its own. Sheet 03 keeps the original's
top-and-bottom `GREAT DEAL` frame — that instinct was right — and gives the
middle a price plate worth framing.

`While stock lasts` sits with the price on every sheet rather than at the foot,
so the scarcity line is read as part of the offer.

## Sheet sizes

`--k` scales all artwork: 1 at US Letter (8.5 × 11in, the home-printable
version), 1.376 at A3 (297 × 420mm) for window bays and end-caps. The toolbar
switches between them and rewrites `@page`, which cannot read custom properties.

Margins are split — 13mm at the flanks against 15mm head and foot at Letter —
because office printers clip the head and foot of a sheet more than the sides.

## Printing

Open the file, pick the sheet size, hit **Print / PDF**. Background graphics must
be on or the orange masses drop out and the design goes with them; the stylesheet
asks for them with `print-color-adjust: exact`, but a driver set to
*ignore page colours* will still strip them.

The sheets are exactly one page tall, which is close enough to the page box that
sub-pixel rounding will spill a blank page after each one — so in print the sheet
is sized in `vh`, which resolves to the page box itself, and the preview wrapper's
inline height is overridden. Print to PDF and check for three pages after
changing anything structural.
