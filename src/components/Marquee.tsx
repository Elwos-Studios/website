const words = ['Kingdoms', 'Forests', 'Magic', 'Exploration', 'Forgotten remnants', 'Community']

const row = (key: string) => (
  <ul key={key}>
    {words.map((w) => (
      <li key={w}>{w}</li>
    ))}
  </ul>
)

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {row('a')}
        {row('b')}
      </div>
    </div>
  )
}
