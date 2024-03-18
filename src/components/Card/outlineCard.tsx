import React from 'react'

interface CardProps {
  subtitle: string;
}

export default function outlineCard({ subtitle}: CardProps): JSX.Element {
  return(
      <div className='custom-outline-card'>
        <p>{subtitle}</p>
      </div>
  )
}
