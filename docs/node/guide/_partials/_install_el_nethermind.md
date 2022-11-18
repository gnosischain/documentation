import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">
        <Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
            {label: 'Linux, MacOS, Arm64', value: 'others'},
            {label: 'Windows', value: 'win'}
        ]}>
            <TabItem value="others">
                <div>
                    <ul>
                        <li>
                            Install dependencies
                            <pre><code>sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y</code></pre>
                        </li>
                         <li>Copy the download link for Linux, MacOS or Arm64 package from the <a href="https://downloads.nethermind.io/" target="_blank">Nethermind download page</a>.</li>
                        <li>
                            Download Nethermind
                            <pre><code>wget [URL_FROM_PREVIOUS_STEP]</code></pre>
                        </li>
                        <li>
                            Unzip the downloaded file
                            <pre><code>unzip [FILE_NAME] -d el-client</code></pre>
                        </li>
                        <li>
                            Get into the folder
                            <pre><code>cd el-client</code></pre>
                        </li>
                        <li>
                            Execute Nethermind
                            <pre><code>./Nethermind.Runner --config xdai --JsonRpc.Enabled true  --HealthChecks.Enabled true --HealthChecks.UIEnabled true --JsonRpc.EnginePort=8551 --JsonRpc.JwtSecretFile=../jwtsecret/jwtsecret</code></pre>
                        </li>
                    </ul>
                </div>
            </TabItem>
            <TabItem value="win">
                <div>
                    <ul>
                        <li>Download the Windows package from the <a href="https://downloads.nethermind.io/" target="_blank">Nethermind download page</a>.</li>
                        <li>Unzip the file in the <code>el-client</code> folder created in the previous step.</li>
                        <li>Navigate to the <code>el-client</code> folder</li>
                        <li>
                            Run the following command:
                            <pre><code>.\Nethermind.Runner.exe --config xdai --JsonRpc.Enabled true  --HealthChecks.Enabled true --HealthChecks.UIEnabled true --JsonRpc.EnginePort=8551 --JsonRpc.JwtSecretFile=../jwtsecret/jwtsecret</code></pre>    
                        </li>
                    </ul> 
                </div>
            </TabItem>
        </Tabs>
    </TabItem>
    <TabItem value="chiado">
        <Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
            {label: 'Linux, MacOS, Arm64', value: 'others'},
            {label: 'Windows', value: 'win'}
        ]}>
            <TabItem value="others">
                <div>
                    <ul>
                        <li>
                            Install dependencies
                            <pre><code>sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y</code></pre>
                        </li>
                         <li>Copy the download link for Linux, MacOS or Arm64 package from the <a href="https://downloads.nethermind.io/" target="_blank">Nethermind download page</a>.</li>
                        <li>
                            Download Nethermind
                            <pre><code>wget [URL_FROM_PREVIOUS_STEP]</code></pre>
                        </li>
                        <li>
                            Unzip the downloaded file
                            <pre><code>unzip [FILE_NAME] -d el-client</code></pre>
                        </li>
                        <li>
                            Get into the folder
                            <pre><code>cd el-client</code></pre>
                        </li>
                        <li>
                            Execute Nethermind
                            <pre><code>./Nethermind.Runner --config chiado --JsonRpc.Enabled true  --HealthChecks.Enabled true --HealthChecks.UIEnabled true --JsonRpc.EnginePort=8551 --JsonRpc.JwtSecretFile=../jwtsecret/jwtsecret</code></pre>
                        </li>
                    </ul>
                </div>
            </TabItem>
            <TabItem value="win">
                <div>
                    <ul>
                        <li>Download the Windows package from the <a href="https://downloads.nethermind.io/" target="_blank">Nethermind download page</a>.</li>
                        <li>Unzip the file in the <code>el-client</code> folder created in the previous step.</li>
                        <li>Navigate to the <code>el-client</code> folder</li>
                        <li>
                            Run the following command:
                            <pre><code>.\Nethermind.Runner.exe --config chiado --JsonRpc.Enabled true  --HealthChecks.Enabled true --HealthChecks.UIEnabled true --JsonRpc.EnginePort=8551 --JsonRpc.JwtSecretFile=../jwtsecret/jwtsecret</code></pre>
                        </li>
                    </ul>
                </div>
            </TabItem>
        </Tabs>
    </TabItem>
</Tabs>