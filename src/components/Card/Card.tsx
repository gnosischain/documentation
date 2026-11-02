import React from 'react'
import Icon from '../Icon'

interface CardProps {
  title: string;
  subtitle: string;
  url: string;
  icon?: string;
}

export default function Card({ title, subtitle, url, icon }: CardProps): JSX.Element {
  return(
    <a href={url} className='custom-card-link'>
      <div className='custom-card'>
        {icon && (
          <span className='custom-card-icon' aria-hidden='true'>
            <Icon name={icon} />
          </span>
        )}
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </a>
  )
}
