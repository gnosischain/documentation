import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="network" defaultValue="gnosis" values={[
        {label: 'Gnosis', value: 'gnosis'},
        {label: 'Chiado', value: 'chiado'}
    ]}>
  <TabItem value="gnosis">
Create a folder called <code>gnosis</code> on your disk, and then two subfolders within it: <code>consensus</code> and <code>execution</code>:

```
📂gnosis
┣ 📂consensus
┣ 📂execution
```

```
mkdir gnosis
```

```
cd gnosis
```
  </TabItem>
  <TabItem value="chiado">
Create a folder called <code>chiado</code> on your SSD, and then two subfolders within it: <code>consensus</code> and <code>execution</code>:

```
📂chiado
┣ 📂consensus
┣ 📂execution
```

```
mkdir chiado
```

```
cd gnosis
```
  </TabItem>
</Tabs>


```
mkdir consensus
```

```
mkdir execution
```

<Tabs groupId="protocol" defaultValue="jwt" values={[
        {label: 'JWT', value: 'jwt'},
        {label: 'IPC', value: 'ipc'}
    ]}>
    <TabItem value="jwt">

<h3 id="generate-jwt">Generate JWT Secret</h3>

import JwtGenerationPartial from '@site/docs/install/_partials/_jwt-generation-partial.md';

<JwtGenerationPartial />

:::info
Place the `jwt.hex` file in the root folder, so it can be referenced in the next steps as `../jwt.hex` from the `consensus` and `execution` folders.
:::
  </TabItem>
</Tabs>

