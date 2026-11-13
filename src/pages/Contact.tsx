import { usePageMeta } from '../components/usePageMeta'

export default function Contact() {
  usePageMeta('Contact — ELWOS Studios', 'Get in touch with ELWOS Studios for general or business enquiries.')
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p className="lede" style={{ marginTop: '1.4rem' }}>Choose the route that fits your message.</p>
        </div>
        <div className="contact">
          <div><h3>General enquiries</h3><p>Questions about the studio or our game.</p><span className="ph">[general email — to be added]</span></div>
          <div><h3>Business enquiries</h3><p>Partnerships, press and professional contact.</p><span className="ph">[business email — to be added]</span></div>
          <div><h3>Community &amp; social</h3><p>Where to follow development.</p><span className="ph">[Discord / social links — to be added]</span></div>
        </div>
        <p className="note">Contact details are placeholders until confirmed.</p>
      </div>
      <div style={{ height: '4rem' }} />
    </>
  )
}
