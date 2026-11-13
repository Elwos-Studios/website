import FeaturedProject from '../components/FeaturedProject'
import { usePageMeta } from '../components/usePageMeta'

export default function Games() {
  usePageMeta('Games — ELWOS Studios', 'The projects ELWOS Studios is working on, including our untitled Minecraft MMORPG in development.')
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Games</p>
          <h1>Projects</h1>
          <p className="lede" style={{ marginTop: '1.4rem' }}>Everything we are working on, in one place.</p>
        </div>
        <FeaturedProject showLink={false} />
      </div>
      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">The world</p>
            <h2>Fantasy above.<br />History below.</h2>
          </div>
          <div>
            <p className="lede">
              Our first major game is a Minecraft MMORPG set unimaginably far in the future. Humanity’s old civilisation
              is long forgotten, and a beautiful medieval-inspired fantasy world has grown over it.
            </p>
            <ul className="layers">
              <li><strong>Kingdoms &amp; villages</strong>Settlements with their own character and people.</li>
              <li><strong>Forests &amp; frontiers</strong>Wild places to explore.</li>
              <li><strong>Magic &amp; many peoples</strong>Different cultures sharing one world.</li>
              <li><strong>Remnants of the distant past</strong>Not a wasteland. Players gradually discover our old world beneath the new one.</li>
            </ul>
            <p className="note">
              Title, screenshots, artwork and a dedicated game page will follow. This is a separate project from any other Minecraft server.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
