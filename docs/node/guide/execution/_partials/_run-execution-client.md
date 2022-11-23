import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="execution-clients" defaultValue="nethermind" values={[
    {label: 'Nethermind', value: 'nethermind'},
    {label: 'Besu', value: 'besu'},
    {label: 'Erigon', value: 'erigon'},
    {label: 'Geth', value: 'geth'}
    ]}>
  <TabItem value="nethermind">

import InstallNethermindPartial from '@site/docs/node/guide/execution/_partials/_install_el_nethermind.md';

<InstallNethermindPartial />

  </TabItem>

  <TabItem value="besu">
  <p>Besu is not yet supported, use <a href="#select-a-configuration">Nethermind</a> instead.</p>
  </TabItem>

  <TabItem value="erigon">
  <p>Erigon is not yet supported, use <a href="#select-a-configuration">Nethermind</a> instead.</p>
  </TabItem>

  <TabItem value="geth">
  <p>Geth is not yet supported, use <a href="#select-a-configuration">Nethermind</a> instead.</p>
  </TabItem>
  
</Tabs>