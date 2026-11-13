import { Link } from 'react-router-dom'
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
        <div className="wrap">
          <p className="eyebrow">Independent game studio</p>
          <h1>
            We create worlds
            <br />
            people want to
            <br />
            belong to.
          </h1>
          <p className="lede">
            ELWOS Studios builds games with identity, atmosphere and communities worth being part of.
          </p>
          <Link className="btn" to="/games">Our game</Link> <Link className="btn alt" to="/about">About the studio</Link>
        </div>
        <Strata />
      </div>
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
          <Link className="btn" to="/about">Meet the studio</Link>
        </div>
      </section>
    </>
  )
}
