import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import CopyPage from '@site/src/components/CopyPage';
import styles from './styles.module.css';

// Wrapped to put the "Copy page" menu on the breadcrumb row, above the page title.
export default function DocBreadcrumbsWrapper(props) {
  return (
    <div className={styles.row}>
      <DocBreadcrumbs {...props} />
      <CopyPage />
    </div>
  );
}
