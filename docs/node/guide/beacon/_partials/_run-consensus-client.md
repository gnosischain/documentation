import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InstallLighthousePartial from '@site/docs/node/guide/beacon/_partials/_install_cl_lighthouse.md';
import InstallLodestarPartial from '@site/docs/node/guide/beacon/_partials/_install_cl_lodestar.md';

```mdx-code-block

<Tabs groupId="consensus-clients" defaultValue="lighthouse" values={[
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Teku', value: 'teku'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Prysm', value: 'prysm'}
    ]}>
  <TabItem value="lighthouse">

<InstallLighthousePartial />

  </TabItem>


  <TabItem value="lodestar">

<InstallLodestarPartial />
  
  </TabItem>

  <TabItem value="teku">
```

:::info

Please refer to [Run a Beacon Node: Teku](../teku.md)

:::

```mdx-code-block
  </TabItem>

  <TabItem value="nimbus">
```

:::info

Please refer to [Run a Beacon Node: Nimbus](../nimbus.md)

:::

```mdx-code-block
  </TabItem>

  <TabItem value="prysm">
```

:::info

Please refer to [Run a Beacon Node: Prysm](../prysm.md)

:::

```mdx-code-block
  </TabItem>
```

</Tabs>