import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import CookieBanner from '@site/src/components/CookieBanner';

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <CookieBanner />
    </>
  );
}
