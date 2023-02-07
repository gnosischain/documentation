import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Create the following folder structure on your disk, the entire tutorial will assume it:

```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

```shell
mkdir gnosis && cd gnosis &&
mkdir jwtsecret && mkdir execution && mkdir consensus &&
cd consensus &&
mkdir data && mkdir keystores && mkdir validators &&
cd ..
```

<Tabs groupId="protocol" defaultValue="jwt" values={[
        {label: 'JWT', value: 'jwt'},
        {label: 'IPC', value: 'ipc'}
    ]}>
    <TabItem value="jwt">

<h3 id="generate-jwt">Generate JWT Secret</h3>

import JwtGenerationPartial from '@site/docs/node/guide/server/_partials/_jwt-generation-partial.md';

<JwtGenerationPartial />

:::tip
Place the `jwt.hex` file in the jwtsecret folder, so it can be referenced in the next steps as `../jwtsecret/jwt.hex` for the `consensus` and `execution` clients.
:::
  </TabItem>
  <TabItem value="ipc"></TabItem>
</Tabs>


