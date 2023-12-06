import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
{label: 'Gnosis', value: 'gnosis'},
{label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

Please refer to [Run a Beacon Node: Nimbus](../nimbus.md)

</TabItem>
<TabItem value="win">

Please refer to [Run a Beacon Node: Nimbus](../nimbus.md)

</TabItem>
</Tabs>

</TabItem>
<TabItem value="chiado">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

Please refer to [Run a Beacon Node: Nimbus](../nimbus.md)

</TabItem>
<TabItem value="win">

Please refer to [Run a Beacon Node: Nimbus](../nimbus.md)

</TabItem>
</Tabs>

</TabItem>
</Tabs>
