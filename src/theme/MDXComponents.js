import MDXComponents from '@theme-original/MDXComponents';
import Box from '@site/src/components/Box';
import TutorialsFeatured from '@site/src/components/TutorialsFeatured';
import tabs from '@theme/Tabs';
import tabItem from '@theme/TabItem';

export default {
  ...MDXComponents,
  box: Box,
  tutorialsFeatured: TutorialsFeatured,
  Tabs: tabs,
  TabItem: tabItem,
};