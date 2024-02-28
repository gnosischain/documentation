import React from 'react'

interface CardContainerProps {
  children: React.ReactNode
}

export default function CardContainer({ children }: CardContainerProps): JSX.Element {
  return <div className="custom-card-container">{children}</div>
}
