import type { CSSProperties } from 'react'
import Btn from '../components/Btn'
import Embers from '../components/Embers'
import Marquee from '../components/Marquee'
import Strata from '../components/Strata'
import FeaturedProject from '../components/FeaturedProject'
import { usePageMeta } from '../components/usePageMeta'

export default function Home() {
  usePageMeta(
    'ELWOS Studios — Worlds people want to belong to',
    'ELWOS Studios is an independent game studio creating worlds with identity, atmosphere and community. Currently developing an unnamed Minecraft MMORPG.',
  )
  return (
    <>
      <div className="hero">
        <Embers />
        <div className="wrap">
          <p className="eyebrow">Independent game studio</p>
          <h1>
            <span className="line" style={{ '--i': 0 } as CSSProperties}>We create worlds</span>
            <span className="line" style={{ '--i': 1 } as CSSProperties}>people want to</span>
            <span className="line" style={{ '--i': 2 } as CSSProperties}>belong to.</span>
          </h1>
          <p className="lede">
            ELWOS Studios builds games with identity, atmosphere and communities worth being part of.
          </p>
          <div className="cta"><Btn to="/games" arrow>Our game</Btn> <Btn to="/about" alt>About the studio</Btn></div>
        </div>
        <Strata />
      </div>
      <Marquee />
      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2>Identity first.</h2>
          </div>
          <div>
            <blockquote>
              “We don’t just make games. We create worlds <em>people want to belong to.</em>”
            </blockquote>
            <div className="grid3">
              <div><h3>Atmosphere</h3><p>Places with a mood and a point of view, not just scenery.</p></div>
              <div><h3>Meaning</h3><p>Experiences that stay with players after they log off.</p></div>
              <div><h3>Community</h3><p>Worlds shaped to bring people together.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <p className="eyebrow">Featured project</p>
          <FeaturedProject />
        </div>
      </section>
      <section>
        <div className="wrap">
          <h2>Curious who is behind it?</h2>
          <p className="lede" style={{ margin: '1rem 0 1.8rem' }}>
            Two founders, one ambition: build something players genuinely love.
          </p>
          <Btn to="/about" arrow>Meet the studio</Btn>
        </div>
      </section>
    </>
  )
}
