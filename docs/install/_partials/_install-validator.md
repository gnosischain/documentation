import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="consensus-clients" defaultValue="lighthouse" values={[
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Prysm', value: 'prysm'},
  {label: 'Teku', value: 'teku'}
    ]}>
  <TabItem value="lighthouse">

import InstallLighthouseValidatorPartial from '@site/docs/install/_partials/_install_validator_lighthouse.md';

<InstallLighthouseValidatorPartial />

  </TabItem>

  <TabItem value="lodestar">
  <p>WIP</p>
  </TabItem>

  <TabItem value="nimbus">
  <p>WIP</p>
  </TabItem>

  <TabItem value="prysm">
  <p>WIP</p>
  </TabItem>

  <TabItem value="teku">
  <p>WIP</p>
  </TabItem>
</Tabs>