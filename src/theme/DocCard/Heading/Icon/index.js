import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Icon from '@site/src/components/Icon';

/**
 * Swizzled from @theme/DocCard/Heading/Icon.
 * Replaces Docusaurus' default leading emoji (📄 / 🗃 / 🔗) on generated-index
 * and DocCardList cards with our shared line-icon set, so these cards match the
 * hand-authored <Card> components. Category → folder, document → file.
 */
export default function DocCardHeadingIcon({item}) {
  const name = item?.type === 'category' ? 'folder' : 'file';
  return (
    <span
      className={clsx(ThemeClassNames.docs.docCard.icon, 'doc-card-icon-chip')}
      aria-hidden="true">
      <Icon name={name} size={20} />
    </span>
  );
}
