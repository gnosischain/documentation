import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function ArchiveWarning(): JSX.Element {
  //TODO: detect post date || archive url
  const isArchive = true //(window.location.href.indexOf("/updates/archive/") > -1)
  
  if(isArchive)
    return (
        <div className="theme-admonition theme-admonition-info alert alert--info admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
            <span className="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
            </span>Archive Post
          </div>
          <div className="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
            <p>This post is more than one year old. The information may be outdated. Check the <a href="/updates/">latest posts</a>.</p>
          </div>
        </div>
    );
  else
      return null;
}