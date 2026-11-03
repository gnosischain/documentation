import React from 'react';
import Content from '@theme-original/DocItem/Content';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

// Wrapped to put a transition notice on every page of the Run a node section,
// which covers Gnosis Chain as it runs until the move to Gnosis EEZ.
function NodeTransitionNotice() {
  return (
    <Admonition type="info" title="Gnosis Chain is moving to Gnosis EEZ">
      <p>
        These guides cover running a node and a validator on Gnosis Chain as it
        runs today, and stay valid until the fork. At activation the validator
        set retires and nodes keep only an execution client. See{' '}
        <Link to="/validators/eez-transition">the move to Gnosis EEZ</Link>.
      </p>
      <p>
        Managing an existing validator? Go to{' '}
        <Link to="/validators/withdrawals">Validator withdrawals</Link> or{' '}
        <Link to="/validators/voluntary-exit">Voluntary exit</Link>.
      </p>
    </Admonition>
  );
}

export default function ContentWrapper(props) {
  const {metadata} = useDoc();
  const isNodePage = /^\/node(\/|$)/.test(metadata.permalink);
  return (
    <>
      {isNodePage && <NodeTransitionNotice />}
      <Content {...props} />
    </>
  );
}
