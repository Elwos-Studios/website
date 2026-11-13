import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import lockup from '../assets/logo-lockup.png'
import { site } from '../content/site'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>
          <img className="flogo" src={lockup} alt="ELWOS Studios" width={140} height={46} />
          <span style={{ display: 'block', marginTop: '.6rem' }}>© {new Date().getFullYear()} ELWOS Studios</span>
        </span>
        <span className="social">
          <a href={site.discord} target="_blank" rel="noopener noreferrer" aria-label="ELWOS Studios on Discord">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href={`mailto:${site.email.general}`} aria-label="Email ELWOS Studios">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </span>
      </div>
    </footer>
  )
}
