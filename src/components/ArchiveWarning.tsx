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
              <svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
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