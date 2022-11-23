import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="consensus-clients" defaultValue="lighthouse" values={[
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Teku', value: 'teku'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Prysm', value: 'prysm'}
    ]}>
  <TabItem value="lighthouse">

import InstallLighthousePartial from '@site/docs/node/guide/beacon/_partials/_install_cl_lighthouse.md';

<InstallLighthousePartial />

  </TabItem>

  <TabItem value="lodestar">
  <p>WIP</p>
  </TabItem>

  <TabItem value="teku">
  <p>WIP</p>
  </TabItem>

  <TabItem value="nimbus">
  <p>WIP</p>
  </TabItem>

  <TabItem value="prysm">
  <p>WIP</p>
  </TabItem>

</Tabs>