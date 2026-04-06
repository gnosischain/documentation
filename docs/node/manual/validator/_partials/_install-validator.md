import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import InstallNimbusValidatorPartial from '@site/docs/node/manual/validator/_partials/clients/_install_validator_nimbus.md';
import InstallTekuValidatorPartial from '@site/docs/node/manual/validator/_partials/clients/_install_validator_teku.md';

```mdx-code-block
<Tabs groupId="consensus-clients" defaultValue="lighthouse" values={[
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Teku', value: 'teku'}
    ]}>
  <TabItem value="lighthouse">

import InstallLighthouseValidatorPartial from '@site/docs/node/manual/validator/_partials/clients/_install_validator_lighthouse.md';


<InstallLighthouseValidatorPartial />

  </TabItem>

  <TabItem value="lodestar">

import InstallLodestarValidatorPartial from '@site/docs/node/manual/validator/_partials/clients/_install_validator_lodestar.md';

<InstallLodestarValidatorPartial />

  </TabItem>

  <TabItem value="nimbus">

<InstallNimbusValidatorPartial />

  </TabItem>

  <TabItem value="teku">

<InstallTekuValidatorPartial/>

  </TabItem>
</Tabs>
```
