import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="execution-clients" defaultValue="lighthouse" values={[
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Prysm', value: 'prysm'},
  {label: 'Teku', value: 'teku'}
    ]}>
  <TabItem value="lighthouse">
   <p>aaa</p>
    <Tabs groupId="network" defaultValue="gnosis" values={[
        {label: 'Gnosis', value: 'gnosis'},
        {label: 'Chiado', value: 'chiado'}
    ]}>
      <TabItem value="gnosis">
        <Tabs groupId="protocol" defaultValue="jwt" values={[
            {label: 'JWT', value: 'jwt'},
            {label: 'IPC', value: 'ipc'}
            ]}>
                <TabItem value="jwt"><pre><code>aa</code></pre></TabItem>
                <TabItem value="ipc"><pre><code>bb</code></pre></TabItem>
            </Tabs>
      </TabItem>
      <TabItem value="chiado">
        <Tabs groupId="protocol" defaultValue="jwt" values={[
            {label: 'JWT', value: 'jwt'},
            {label: 'IPC', value: 'ipc'}
            ]}>
                <TabItem value="jwt"><pre><code>cc</code></pre></TabItem>
                <TabItem value="ipc"><pre><code>dd</code></pre></TabItem>
            </Tabs>
      </TabItem>
    </Tabs>
    <p>aa.</p>
  </TabItem>
</Tabs>

<p>ccc</p>