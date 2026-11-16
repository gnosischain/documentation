import React from 'react'
import Link from '@docusaurus/Link'
import Icon from '../Icon'

interface CardProps {
  title: string;
  subtitle: string;
  url: string;
  icon?: string;
}

export default function Card({ title, subtitle, url, icon }: CardProps): JSX.Element {
  return(
    <Link to={url} className='custom-card-link'>
      <div className='custom-card'>
        {icon && (
          <span className='custom-card-icon' aria-hidden='true'>
            <Icon name={icon} />
          </span>
        )}
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </Link>
  )
}
