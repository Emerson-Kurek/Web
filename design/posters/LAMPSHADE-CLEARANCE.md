# LAMPSHADE CLEARANCE — three-tier price sign

Replaces the boxed typewritten sheet on the lampshade shelf. Same family as
SHELF-SIGNS — white ground, near-black type, brand orange as the one saturated
mass — but the job is different: this is a price ladder, three rows that have to
be compared at a glance rather than one offer shouted once.

`design/signs/lampshade-clearance-letter.pdf` is exported and ready to print.

## What the original was doing wrong

The whole sheet ran at one size in one weight inside a thin rectangle, so
`LAMPSHADE CLEARANCE` was no louder than a stock number, and the sign only
worked once you were standing at the shelf. The rectangle was the only piece of
design on it, and a hairline box adds no visibility — it just fences the type in.

It was also set landscape on a portrait sheet, which wastes the long dimension a
ladder of three rows most wants.

## Reading the codes

`121410`, `101211` and `060807` are lampshade sizing, not arbitrary SKUs: top
diameter, bottom diameter, height, two digits each. So `121410` is a shade 12in
across the top, 14in across the bottom, 10in tall.

**This reading should be confirmed against the stock before a reprint.** It is the
standard convention and the three codes are consistent with it, but it was
inferred from the numbers rather than from a spec sheet.

The sign carries both: the dimensions in inches as the line a shopper can act on,
and the code beneath in mono for whoever is pulling stock. The original had only
the code, which is the one form of the number that means nothing to a customer
holding a lamp.

## The ladder

Size name anchors the left, price the right, three prices sharing a right edge so
they read as a column without the eye hunting for them. Rules between rows, not a
box around everything.

No tier is singled out with a filled chip. A chip makes that row the loudest
thing on the sheet, and the only row it could sit on without arguing with the
ladder is `SMALL` at `$8` — the cheapest and smallest item, which is not what to
point a customer at. The comparison is the message, so the three rows are left
to be compared.

## Palette

As SHELF-SIGNS: `#f08018` for the two orange masses, `#a8500a` wherever orange
works as type on white, near-black `#17181a` knocked out of the orange rather
than white (roughly 7:1 against 2.4:1).

Prices are set in `--accent-ink` rather than near-black. At 30mm they are large
enough to carry the colour, it ties them to the two orange masses, and it
separates price from size name without a second weight.

## Sheet sizes

`--k` scales the artwork: 1 at US Letter, 1.376 at A3. The toolbar switches and
rewrites `@page`, which cannot read custom properties.

## Printing

`design/signs/lampshade-clearance-letter.pdf` — one page, `MediaBox
[0 0 612 792]`, US Letter exactly. Print at 100% with *fit to page* off.

To re-export, open the HTML and hit **Print / PDF**. Background graphics must be
on or the orange masses drop out.
