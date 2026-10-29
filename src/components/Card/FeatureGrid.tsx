import React from 'react'
import './FeatureCard.css'

interface FeatureGridProps {
  children: React.ReactNode
}

export default function FeatureGrid({ children }: FeatureGridProps): JSX.Element {
  return (
    <div className="custom-feature-grid-wrapper">
      <div className="custom-feature-grid">{children}</div>
    </div>
  )
}
