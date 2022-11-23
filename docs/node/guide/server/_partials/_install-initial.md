import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Create the following folder structure on your disk, the entire tutorial will assume it:

```
📂gnosis
├── 📂 jwtsecret/
├── 📂 el-client/
└── 📂 cl-client/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

```shell
$ mkdir gnosis && cd gnosis 
$ mkdir jwtsecret && mkdir el-client && mkdir cl-client 
$ cd cl-client 
$ mkdir data && mkdir keystores && mkdir validators
$ cd ..
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
Place the `jwtsecret` file in the jwtsecret folder, so it can be referenced in the next steps as `../jwtsecret/jwtsecret` from the `cl-client` and `el-client` folders.
:::
  </TabItem>
</Tabs>


