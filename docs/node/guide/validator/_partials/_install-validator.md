import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import InstallTekuValidatorPartial from '@site/docs/node/guide/validator/_partials/clients/_install_validator_teku.md';

```mdx-code-block
<Tabs groupId="consensus-clients" defaultValue="lighthouse" values={[
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Prysm', value: 'prysm'},
  {label: 'Teku', value: 'teku'}
    ]}>
  <TabItem value="lighthouse">

import InstallLighthouseValidatorPartial from '@site/docs/node/guide/validator/_partials/clients/_install_validator_lighthouse.md';


<InstallLighthouseValidatorPartial />

  </TabItem>

  <TabItem value="lodestar">
```

import InstallLodestarValidatorPartial from '@site/docs/node/guide/validator/_partials/clients/_install_validator_lodestar.md';


:::info


Please refer to [Run a Beacon Node: Lodestar](../../beacon/lodestar.md)


:::

<InstallLodestarValidatorPartial />

```mdx-code-block
  </TabItem>

  <TabItem value="nimbus">
```

:::info

Please refer to [Run a Beacon Node: Nimbus](../../beacon/nimbus.md)

:::

```mdx-code-block
  </TabItem>

  <TabItem value="prysm">
```

:::info

Please refer to [Run a Beacon Node: Prysm](../../beacon/prysm.md)

:::

```mdx-code-block
  </TabItem>

  <TabItem value="teku">
```

:::info

Please refer to [Run a Beacon Node: Teku](../../beacon/teku.md)

:::

<InstallTekuValidatorPartial/>

```mdx-code-block
  </TabItem>
</Tabs>
```