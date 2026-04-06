import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InstallNethermindPartial from '@site/docs/node/manual/execution/_partials/_install_el_nethermind.md';
import InstallErigonPartial from '@site/docs/node/manual/execution/_partials/_install_el_erigon.md';
import InstallGethPartial from '@site/docs/node/manual/execution/_partials/_install_el_geth.md';
import InstallRethPartial from '@site/docs/node/manual/execution/_partials/_install_el_reth.md';

<Tabs groupId="execution-clients" defaultValue="nethermind" values={[
    {label: 'Nethermind', value: 'nethermind'},
    {label: 'Erigon', value: 'erigon'},
    {label: 'Reth', value: 'reth'},
    {label: 'Geth', value: 'geth'}
    ]}>
  <TabItem value="nethermind">
<InstallNethermindPartial />

  </TabItem>

  <TabItem value="erigon">
<InstallErigonPartial/>
  </TabItem>

  <TabItem value="reth">
<InstallRethPartial/>
  </TabItem>

  <TabItem value="geth">
<InstallGethPartial/>
  </TabItem>

</Tabs>
