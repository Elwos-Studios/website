import Btn from '../components/Btn'
import { founders } from '../content/site'
import { usePageMeta } from '../components/usePageMeta'

export default function About() {
  usePageMeta('About — ELWOS Studios', 'ELWOS Studios is an independent game studio founded by Christian Sowle and Manouk Theloy.')
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">About</p>
          <h1>A small studio<br />with a big world in mind.</h1>
        </div>
      </div>
      <section>
        <div className="wrap split">
          <div><h2>Who we are</h2></div>
          <div>
            <p className="lede">
              ELWOS Studios is an independent game studio founded by two people who want to make games with a strong sense of place.
            </p>
            <p style={{ color: 'var(--mute)' }}>
              We are early in our journey and honest about it. We would rather build one world properly than announce many.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <p className="eyebrow">Founders</p>
          <div className="founders">
            {founders.map((f) => (
              <div className="founder" key={f.name}>
                <span className="mono" aria-hidden="true">{f.initials}</span>
                <div>
                  <h3>{f.name}</h3>
                  <p>Co-founder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <h2>What we believe</h2>
          <div className="grid3">
            <div><h3>Worlds over features</h3><p>A game should feel like somewhere you want to return to.</p></div>
            <div><h3>Players are part of it</h3><p>Community is a design goal, not an afterthought.</p></div>
            <div><h3>Say what is true</h3><p>We share progress as it happens and make no promises we cannot keep.</p></div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <h2>Where we are going</h2>
          <p className="lede" style={{ margin: '1rem 0 1.8rem' }}>
            To release games that earn their communities. Follow our progress in the news.
          </p>
          <Btn to="/news" arrow>Read updates</Btn>
        </div>
      </section>
    </>
  )
}
