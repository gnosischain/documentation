import React from 'react'
import './FeatureCard.css'

interface CardProps {
  imgUrl: string;
  children: React.ReactNode
}

export default function FeatureCard({ imgUrl, children }: CardProps): JSX.Element {
  return(
    <div className='custom-feature-card'>
      <img src={imgUrl}></img>
      {children}
    </div>
  )
}
