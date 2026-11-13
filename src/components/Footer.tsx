export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>
          <span className="logo">ELWOS</span>
          <span style={{ display: 'block', marginTop: '.6rem' }}>© {new Date().getFullYear()} ELWOS Studios</span>
        </span>
        <span>Independent game studio</span>
      </div>
    </footer>
  )
}
