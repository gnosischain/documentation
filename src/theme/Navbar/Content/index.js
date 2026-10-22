import React from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import SiteSwitcher from './SiteSwitcher';
import styles from './styles.module.css';

/**
 * One-row navbar: mobile toggle, logo, section links (the "left" navbar items
 * from docusaurus.config.js), then search, any right-hand items and the
 * colour-mode toggle.
 */
function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useThemeConfig().navbar.items;
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  /* Right-hand cluster reads as two groups: text links, then icon buttons. */
  const rightTextItems = rightItems.filter((item) => !item.html);
  const rightIconItems = rightItems.filter((item) => item.html);

  return (
    <div className={clsx('navbar__inner', styles.inner)}>
      <div className={styles.topRow}>
        <div
          className={clsx(
            ThemeClassNames.layout.navbar.containerLeft,
            'navbar__items',
            styles.brand,
          )}>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <div className={styles.wordmark}>
            <SiteSwitcher />
          </div>
        </div>

        <div className={clsx('navbar__items', styles.sections)}>
          <NavbarItems items={leftItems} />
        </div>

        {!searchBarItem && (
          <div className={styles.search}>
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          </div>
        )}

        <div
          className={clsx(
            ThemeClassNames.layout.navbar.containerRight,
            'navbar__items navbar__items--right',
            styles.actions,
          )}>
          <NavbarItems items={rightTextItems} />
          {rightIconItems.length > 0 && (
            <span className={styles.divider} aria-hidden="true" />
          )}
          <NavbarItems items={rightIconItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
    </div>
  );
}
