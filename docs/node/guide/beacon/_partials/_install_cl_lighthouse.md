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
                <div>
                    <ul>
                        <li>Go to the <a href="https://github.com/sigp/lighthouse/releases" target="_blank">lighhouse releases page</a> and copy the url of the latest release based on your OS version.</li>
                        <li>
                            Download the lighthouse-VERSION-ARQ.tar.gz binary.
                            <pre><code>wget [URL_FROM_PREVIOUS_STEP]</code></pre>
                        </li>
                        <li>
                            Extract the downloaded file
                            <pre><code>tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus</code></pre>
                        </li>
                        <li>
                            Get into the folder
                            <pre><code>cd consensus</code></pre>
                        </li>
                        <li>
                            Execute Lighthouse
                            <pre><code> ./lighthouse --network gnosis beacon_node --http --execution-endpoint http://localhost:8551 --execution-jwt ../jwtsecret/jwt.hex --checkpoint-sync-url "https://checkpoint.gnosischain.com"</code></pre>
                        </li>
                    </ul>
                </div>
            </TabItem>
            <TabItem value="win">
                <div>
                    <p>Lighthouse only runs on Linux. To run it on Windows, <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank">Install Linux on Windows with WSL</a>, and follow the instructions on the WSL terminal.</p>
                    <ul>
                        <li>Go to the <a href="https://github.com/sigp/lighthouse/releases" target="_blank">lighhouse releases page</a> and copy the url of the latest release based on your OS version.</li>
                        <li>
                            Download the lighthouse-VERSION-ARQ.tar.gz binary.
                            <pre><code>wget [URL_FROM_PREVIOUS_STEP]</code></pre>
                        </li>
                        <li>
                            Extract the downloaded file
                            <pre><code>tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus</code></pre>
                        </li>
                        <li>
                            Get into the folder
                            <pre><code>cd consensus</code></pre>
                        </li>
                        <li>
                            Execute Lighthouse
                            <pre><code> ./lighthouse --network gnosis beacon_node --http --execution-endpoint http://localhost:8551 --execution-jwt ../jwtsecret/jwt.hex --checkpoint-sync-url "https://checkpoint.gnosischain.com"</code></pre>
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
                        <li>Go to the <a href="https://github.com/sigp/lighthouse/releases" target="_blank">lighhouse releases page</a> and copy the url of the latest release based on your OS version.</li>
                        <li>
                            Download the lighthouse-VERSION-ARQ.tar.gz binary.
                            <pre><code>wget [URL_FROM_PREVIOUS_STEP]</code></pre>
                        </li>
                        <li>
                            Extract the downloaded file
                            <pre><code>tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus</code></pre>
                        </li>
                        <li>
                            Get into the folder
                            <pre><code>cd consensus</code></pre>
                        </li>
                        <li>
                            Execute Lighthouse
                            <pre><code> ./lighthouse --network gnosis beacon_node --http --execution-endpoint http://localhost:8551 --execution-jwt ../jwtsecret/jwt.hex --checkpoint-sync-url "https://checkpoint.gnosischain.com"</code></pre>
                        </li>
                    </ul>
                </div>
            </TabItem>
            <TabItem value="win">
                <div>
                    <p>Lighthouse only runs on Linux. To run it on Windows, <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank">Install Linux on Windows with WSL</a>, and follow the instructions on the WSL terminal.</p>
                    <ul>
                        <li>Go to the <a href="https://github.com/sigp/lighthouse/releases" target="_blank">lighhouse releases page</a> and copy the url of the latest release based on your OS version.</li>
                        <li>
                            Download the lighthouse-VERSION-ARQ.tar.gz binary.
                            <pre><code>wget [URL_FROM_PREVIOUS_STEP]</code></pre>
                        </li>
                        <li>
                            Extract the downloaded file
                            <pre><code>tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus</code></pre>
                        </li>
                        <li>
                            Get into the folder
                            <pre><code>cd consensus</code></pre>
                        </li>
                        <li>
                            Execute Lighthouse
                            <pre><code> ./lighthouse --network gnosis bn --staking --http --execution-endpoint http://localhost:8551 --execution-jwt ../jwtsecret/jwt.hex --checkpoint-sync-url "https://checkpoint.gnosischain.com"</code></pre>
                        </li>
                    </ul>
                </div>
            </TabItem>
        </Tabs>
    </TabItem>
</Tabs>