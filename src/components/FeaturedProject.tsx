import Btn from './Btn'

export default function FeaturedProject({ showLink = true }: { showLink?: boolean }) {
  return (
    <div className="card">
      <div className="art">
        <span>
          Artwork &amp; screenshots
          <br />
          coming soon
        </span>
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
            <Btn to="/games" alt arrow style={{ marginTop: '1rem' }}>
              View project
            </Btn>
          </p>
        )}
      </div>
    </div>
  )
}
