import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface Props {
  to?: string
  href?: string
  external?: boolean
  alt?: boolean
  arrow?: boolean
  icon?: IconDefinition
  style?: CSSProperties
  children: ReactNode
}

export default function Btn({ to, href, external, alt, arrow, icon, style, children }: Props) {
  const className = alt ? 'btn alt' : 'btn'
  const inner = (
    <>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{children}</span>
      {arrow && <FontAwesomeIcon icon={faArrowRight} className="arr" />}
    </>
  )
  if (to) {
    return (
      <Link className={className} to={to} style={style}>
        {inner}
      </Link>
    )
  }
  return (
    <a className={className} href={href} style={style} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  )
}
