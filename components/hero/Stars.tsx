// A fixed scatter of stars for the night-sky heroes. Positions are literal so
// server and client render the same markup.
const STARS: Array<[x: number, y: number, size: number, opacity: number]> = [
  [4, 12, 2, 0.7], [9, 34, 1, 0.5], [13, 7, 1, 0.8], [17, 48, 2, 0.4], [21, 22, 1, 0.6],
  [26, 9, 2, 0.5], [29, 39, 1, 0.7], [33, 16, 1, 0.4], [37, 5, 2, 0.6], [41, 30, 1, 0.5],
  [45, 11, 1, 0.8], [49, 44, 1, 0.4], [53, 6, 2, 0.5], [57, 26, 1, 0.7], [61, 14, 1, 0.5],
  [65, 37, 2, 0.4], [69, 8, 1, 0.8], [73, 21, 1, 0.5], [77, 46, 1, 0.6], [81, 13, 2, 0.6],
  [85, 31, 1, 0.5], [89, 6, 1, 0.7], [93, 24, 2, 0.4], [96, 41, 1, 0.6], [7, 55, 1, 0.3],
  [31, 57, 1, 0.3], [59, 53, 1, 0.3], [87, 56, 1, 0.3], [47, 20, 1, 0.6], [71, 33, 1, 0.5]
]

export function Stars({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      {STARS.map(([x, y, size, opacity], index) => (
        <span
          key={index}
          className={
            'absolute rounded-full bg-white ' +
            (index % 5 === 0 ? 'animate-pulse motion-reduce:animate-none' : '')
          }
          style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, opacity }}
        />
      ))}
    </div>
  )
}
