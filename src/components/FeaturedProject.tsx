import { Link } from 'react-router-dom'

export default function FeaturedProject({ showLink = true }: { showLink?: boolean }) {
  return (
    <div className="card">
      <div className="art">
        Artwork &amp; screenshots
        <br />
        coming soon
      </div>
      <div className="body">
        <span className="tag">In development</span>
        <h3>Untitled Minecraft MMORPG</h3>
        <p>
          A medieval-inspired fantasy world of kingdoms, villages and forests, built upon the forgotten remains of our
          own civilisation. The title is not yet announced.
        </p>
        {showLink && (
          <p>
            <Link className="btn alt" to="/games" style={{ marginTop: '1rem' }}>
              View project
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}
