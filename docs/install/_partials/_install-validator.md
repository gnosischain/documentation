import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="os" defaultValue="others" values={[
    {label: 'Windows', value: 'win'},
    {label: 'Linux, MacOS, Arm64', value: 'others'}
]}>
  <TabItem value="win">
    <p>windows</p>
    <Tabs groupId="network" defaultValue="gnosis" values={[
        {label: 'Gnosis', value: 'gnosis'},
        {label: 'Chiado', value: 'chiado'}
    ]}>
      <TabItem value="gnosis">
        <pre><code>gnosis</code></pre>
      </TabItem>
      <TabItem value="chiado">
        <pre><code>chiado</code></pre>
      </TabItem>
    </Tabs>
    <p>aaa</p>
    <Tabs groupId="network" defaultValue="gnosis" values={[
        {label: 'Gnosis', value: 'gnosis'},
        {label: 'Chiado', value: 'chiado'}
    ]}>
      <TabItem value="gnosis">
        <pre><code>gnosis</code></pre>
        <p>aaa</p>
      </TabItem>
      <TabItem value="chiado">
        <pre><code>chiado</code></pre>
        <p>aaa</p>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="others">
    <p>linux</p>
    <Tabs groupId="network" defaultValue="gnosis" values={[
        {label: 'Gnosis', value: 'gnosis'},
        {label: 'Chiado', value: 'chiado'}
    ]}>
      <TabItem value="gnosis">
        <pre><code>gnosis</code></pre>
      </TabItem>
      <TabItem value="chiado">
        <pre><code>chiado</code></pre>
      </TabItem>
    </Tabs>
    <p>aaa</p>
  </TabItem>
</Tabs>