import { posts } from '../content/posts'
import { usePageMeta } from '../components/usePageMeta'

export default function News() {
  usePageMeta('News — ELWOS Studios', 'Development notes and studio announcements from ELWOS Studios.')
  return (
    <div className="wrap">
      <div className="page-head">
        <p className="eyebrow">News</p>
        <h1>Updates</h1>
        <p className="lede" style={{ marginTop: '1.4rem' }}>Development notes and studio announcements.</p>
      </div>
      {posts.map((p) => (
        <article className="post" key={p.date + p.title}>
          <time dateTime={p.date}>
            {new Date(p.date + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
