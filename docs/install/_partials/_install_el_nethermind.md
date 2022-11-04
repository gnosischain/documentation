import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">
    <p>gnosis</p>
    <Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
        {label: 'Linux, MacOS, Arm64', value: 'others'},
        {label: 'Windows', value: 'win'}
    ]}>
    <TabItem value="others"></TabItem>
    <TabItem value="win"></TabItem>
    </Tabs>
    </TabItem>
    <TabItem value="chiado">
        <p>chiado</p>
        <Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
            {label: 'Linux, MacOS, Arm64', value: 'others'},
            {label: 'Windows', value: 'win'}
        ]}>
        <TabItem value="others"></TabItem>
        <TabItem value="win"></TabItem>
        </Tabs>
    </TabItem>
</Tabs>