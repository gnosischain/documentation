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
    <TabItem value="win">
<div><ul><li>Download the Windows package from the <a href="https://downloads.nethermind.io/" target="_blank">Nethermind download page</a>.</li><li>Unzip the file in the <code>execution</code> folder created in the previous step.</li>
<li>Navigate to the <code>execution</code> folder</li>
<li>Run the following command:</li>
</ul>
<pre><code>.\Nethermind.Runner.exe --config xdai --JsonRpc.Enabled true  --HealthChecks.Enabled true --HealthChecks.UIEnabled true --JsonRpc.JwtSecretFile=../jwt.hex</code></pre>
</div>
    </TabItem>
    </Tabs>
    </TabItem>
    <TabItem value="chiado">
        <p>chiado</p>
        <Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
            {label: 'Linux, MacOS, Arm64', value: 'others'},
            {label: 'Windows', value: 'win'}
        ]}>
        <TabItem value="others"></TabItem>
        <TabItem value="win">
<div><ul><li>Download the Windows package from the <a href="https://downloads.nethermind.io/" target="_blank">Nethermind download page</a>.</li><li>Unzip the file in the <code>execution</code> folder created in the previous step.</li>
<li>Navigate to the <code>execution</code> folder</li>
<li>Run the following command:</li>
</ul>
<pre><code>.\Nethermind.Runner.exe --config chiado --JsonRpc.Enabled true  --HealthChecks.Enabled true --HealthChecks.UIEnabled true --JsonRpc.JwtSecretFile=../jwt.hex</code></pre>
</div>
    </TabItem>
        </Tabs>
    </TabItem>
</Tabs>