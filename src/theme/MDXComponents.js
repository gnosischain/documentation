import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Box from '@site/src/components/Box';
import TutorialsFeatured from '@site/src/components/TutorialsFeatured';
import tabs from '@theme/Tabs';
import tabItem from '@theme/TabItem';
import Card from '@site/src/components/Card/Card';
import FeatureCard from '@site/src/components/Card/FeatureCard';
import CardContainer from '@site/src/components/Card/CardContainer';
import FeatureGrid from '@site/src/components/Card/FeatureGrid';
import Button from '@site/src/components/Button';
import MdxLink from '@site/src/components/Link/MdxLink';
// import outlineCard from '@site/src/components/Card/outlineCard';


// Wrap every markdown table so wide tables (many columns, long hex/wei values)
// scroll horizontally instead of crushing their columns.
function MdxTable(props) {
  return (
    <div className="table-wrapper">
      <table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  a: MdxLink,
  table: MdxTable,
  box: Box,
  tutorialsFeatured: TutorialsFeatured,
  Tabs: tabs,
  TabItem: tabItem,
  Card,
  CardContainer,
  FeatureCard,
  FeatureGrid,
  Button,
};