import React from 'react'

interface CardProps {
  title: string;
  subtitle: string;
  url: string;
}

export default function Card({ title, subtitle, url }: CardProps): JSX.Element {
  return(
    <a href={url} className='custom-card-link'>
      <div className='custom-card'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </a>
  )
}
