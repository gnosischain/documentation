import React from 'react'
import './FeatureCard.css'

interface CardProps {
  imgUrl: string;
  title?: string;
  children: React.ReactNode
}

export default function FeatureCard({ imgUrl, title, children }: CardProps): JSX.Element {
  return(
    <div className='custom-feature-card'>
      <img src={imgUrl} alt=""></img>
      {title && <h3 className='custom-feature-card__title'>{title}</h3>}
      {children}
    </div>
  )
}
