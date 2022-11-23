import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

:::info

Please refer to [Run a Beacon Node: Lodestar](../../run/lodestar.md)

:::

```mdx-code-block
  </TabItem>

  <TabItem value="nimbus">
```

:::info

Please refer to [Run a Beacon Node: Nimbus](../../run/nimbus.md)

:::

```mdx-code-block
  </TabItem>

  <TabItem value="prysm">
```

:::info

Please refer to [Run a Beacon Node: Prysm](../../run/prysm.md)

:::

```mdx-code-block
  </TabItem>

  <TabItem value="teku">
```

:::info

Please refer to [Run a Beacon Node: Teku](../../run/teku.md)

:::

```mdx-code-block
  </TabItem>
</Tabs>
```