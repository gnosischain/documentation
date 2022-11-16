import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {MultiDimensionalContentWidget} from '@site/src/components/MultiDimensionalContentWidget.js';

<MultiDimensionalContentWidget />

<div className="install-tabs">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Operating system:', value: 'label'},
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
  <TabItem className="unclickable-element" value="label"></TabItem>
  <TabItem value="others"></TabItem>
  <TabItem value="win"></TabItem>
</Tabs>

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
        {label: 'Network:', value: 'label'},
        {label: 'Gnosis', value: 'gnosis'},
        {label: 'Chiado', value: 'chiado'}
    ]}>
    <TabItem className="unclickable-element" value="label"></TabItem>
    <TabItem value="gnosis"></TabItem>
    <TabItem value="chiado"></TabItem>
</Tabs>

<Tabs className="tabgroup-with-label el-tabgroup" groupId="execution-clients" defaultValue="nethermind" values={[
  {label: 'Execution client:', value: 'label'},
  {label: 'Nethermind', value: 'nethermind'},
  {label: 'Besu', value: 'besu'},
  {label: 'Erigon', value: 'erigon'},
  {label: 'Geth', value: 'geth'}
  ]}>
  <TabItem className="unclickable-element" value="label"></TabItem>
  <TabItem value="nethermind"></TabItem>
  <TabItem className="unclickable-element" value="besu"></TabItem>
  <TabItem className="unclickable-element" value="erigon"></TabItem>
  <TabItem className="unclickable-element" value="geth"></TabItem>
</Tabs>

<Tabs className="tabgroup-with-label cl-tabgroup" groupId="consensus-clients" defaultValue="lighthouse" values={[
  {label: 'Consensus client:', value: 'label'},
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Prysm', value: 'prysm'},
  {label: 'Teku', value: 'teku'}
  ]}>
  <TabItem className="unclickable-element" value="label"></TabItem>
  <TabItem value="lighthouse"></TabItem>
  <TabItem value="lodestar"></TabItem>
  <TabItem value="nimbus"></TabItem>
  <TabItem value="prysm"></TabItem>
  <TabItem value="teku"></TabItem>
</Tabs>

<!--Tabs className="tabgroup-with-label enbn-tabgroup" groupId="protocol" defaultValue="jwt" values={[
        {label: 'EN-BN connection:', value: 'label'},
        {label: 'HTTP-JWT', value: 'jwt'},
        {label: 'IPC', value: 'ipc'}
    ]}>
    <TabItem className="unclickable-element" value="label"></TabItem>
    <TabItem value="jwt"></TabItem>
    <TabItem value="ipc"></TabItem>
</Tabs-->

</div>