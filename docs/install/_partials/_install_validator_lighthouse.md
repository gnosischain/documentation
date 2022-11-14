import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">
        <div>
            <p>In a new command line window, navigate to the <code>consensus</code> folder and execute Lighthouse validator client</p>
            <pre><code> ./lighthouse --network gnosis vc</code></pre>
        </div>
    </TabItem>
    <TabItem value="chiado">
        <div data-comment="TODO: document chiado validation process"></div>
    </TabItem>
</Tabs>