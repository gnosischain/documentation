import React from 'react';

interface SmallCardProps {
  texts: string[];
}

export default function SmallCard({ texts }: SmallCardProps): JSX.Element {
  const concatenatedText = texts.join(' '); // Concatenate the texts without breaks

  return (
    <div className='custom-small-card'>
      <p>{concatenatedText}</p>
    </div>
  );
}
