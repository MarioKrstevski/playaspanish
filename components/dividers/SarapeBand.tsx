// The seam under the hero: a woven sarape edge in the illustration's own
// colours (the rug's red, the sand's orange, cream, the sea's teal), ending
// in the purple of the section below, so the scene hands off instead of
// being cut off.
const STRIPES: [string, number][] = [
  ['#c8323c', 10],
  ['#f6e3c3', 3],
  ['#e8772e', 7],
  ['#f6e3c3', 3],
  ['#1f9a9a', 6],
  ['#f6e3c3', 3],
  ['#d9467a', 5],
  ['#7a2a8c', 4]
]

export function SarapeBand() {
  return (
    <div aria-hidden className="relative z-10">
      {STRIPES.map(([color, h], i) => (
        <div key={i} style={{ background: color, height: h }} />
      ))}
    </div>
  )
}
