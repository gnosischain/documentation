import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create a folder called `ethereum` on your SSD, and then two subfolders within it: `consensus` and `execution`:

```
📂ethereum
┣ 📂consensus
┣ 📂execution
```

<Tabs groupId="os" defaultValue="others" values={[
    {label: 'Windows', value: 'win'},
    {label: 'Linux, MacOS, Arm64', value: 'others'}
]}>
  <TabItem value="win">
    <p>aaa.</p>
  </TabItem>
  <TabItem value="others">
    <p>bbb.</p>
  </TabItem>
</Tabs>


<Tabs groupId="protocol" defaultValue="jwt" values={[
        {label: 'JWT', value: 'jwt'},
        {label: 'IPC', value: 'ipc'}
    ]}>
    <TabItem value="jwt">

<h3>Generate JWT Secret</h3>

import JwtGenerationPartial from '@site/docs/_partials/_jwt-generation-partial.md';

<JwtGenerationPartial />
    
  </TabItem>
</Tabs>


