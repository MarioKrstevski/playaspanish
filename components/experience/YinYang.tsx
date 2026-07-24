// Pure-CSS yin-yang: the language/culture duality mark used in the
// Experience section. Colors are passed in so it can sit on light or
// dark backgrounds without looking like clipart.

interface YinYangProps {
  size?: number
  light?: string
  dark?: string
  className?: string
}

export function YinYang({
  size = 220,
  light = '#eef2ff',
  dark = '#312e81',
  className
}: YinYangProps) {
  const half = size / 2
  const dot = size / 12
  return (
    <div
      aria-hidden
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `linear-gradient(to right, ${light} 50%, ${dark} 50%)`,
        position: 'relative',
        animation: 'yinyang-spin 90s linear infinite'
      }}
    >
      {/* Top lobe (dark) with light dot */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: half,
          height: half,
          borderRadius: '50%',
          background: dark,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: dot, height: dot, borderRadius: '50%', background: light }} />
      </div>
      {/* Bottom lobe (light) with dark dot */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: half,
          height: half,
          borderRadius: '50%',
          background: light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: dot, height: dot, borderRadius: '50%', background: dark }} />
      </div>
    </div>
  )
}
