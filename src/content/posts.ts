export interface Post {
  date: string // ISO date, e.g. 2026-11-13
  title: string
  body: string
}

// Add new posts to the TOP of this list.
export const posts: Post[] = [
  {
    date: '2026-11-13',
    title: 'The studio website is open',
    body: 'This is the first home for ELWOS Studios. Development updates, announcements and studio news will be posted here as the work progresses.',
  },
]
