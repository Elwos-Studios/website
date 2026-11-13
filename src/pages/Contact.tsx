import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import Btn from '../components/Btn'
import { site } from '../content/site'
import { usePageMeta } from '../components/usePageMeta'

export default function Contact() {
  usePageMeta('Contact — ELWOS Studios', 'Get in touch with ELWOS Studios for general or business enquiries, or join our Discord community.')
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p className="lede" style={{ marginTop: '1.4rem' }}>Choose the route that fits your message.</p>
        </div>
        <div className="contact">
          <div>
            <FontAwesomeIcon className="ico" icon={faEnvelope} />
            <h3>General enquiries</h3>
            <p>Questions about the studio or our game.</p>
            <Btn href={`mailto:${site.email.general}`}>{site.email.general}</Btn>
          </div>
          <div>
            <FontAwesomeIcon className="ico" icon={faBriefcase} />
            <h3>Business enquiries</h3>
            <p>Partnerships, press and professional contact.</p>
            <Btn href={`mailto:${site.email.business}`}>{site.email.business}</Btn>
          </div>
          <div>
            <FontAwesomeIcon className="ico" icon={faDiscord} />
            <h3>Community</h3>
            <p>Follow development and talk with other players.</p>
            <Btn href={site.discord} external icon={faDiscord}>Join our Discord</Btn>
          </div>
        </div>
      </div>
      <div style={{ height: '4rem' }} />
    </>
  )
}
