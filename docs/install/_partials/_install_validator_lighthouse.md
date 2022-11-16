import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
    <TabItem value="win">
        <div class="admonition admonition-info alert alert--info"><div class="admonition-content">
        Lighthouse only runs on Linux. To run it on Windows, <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank">Install Linux on Windows with WSL</a>, and follow the instructions on the WSL terminal.
        </div></div>
    </TabItem>
</Tabs>


<Tabs groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">
        <div>
            <p>To run a validator, we need to first import the keys generated in the previous step.</p>
            <ul>
                <li>In a new command line window, navigate to the <code>cl-client</code> folder and execute Lighthouse validator client</li>
                <li>
                    To ease the import process, we will create a <code>password.txt</code> file containing the password used to encrypt the validator keys.
                    <pre><code>echo 'PLACE_HERE_YOUR_PASSWORD' > keystores/validator_keys/password.txt</code></pre>
                </li>
                <li>
                    Import the validator keys using lighthouse:
                    <pre><code>./lighthouse account_manager validator import --network gnosis --password-file keystores/validator_keys/password.txt --reuse-password --directory keystores/validator_keys --datadir .</code></pre>
                </li>
                <li>
                    Start your lighhouse validator:
                    <pre><code>./lighthouse validator_client --network gnosis --validators-dir validators --enable-doppelganger-protection  --graffiti "gnosis-docs-graffiti"</code></pre>
                    Replace <code>gnosis-docs-graffiti</code> with your <a href="https://lighthouse-book.sigmaprime.io/graffiti.html" target="_blank">graffiti</a>.
                    Learn more about the <a href="https://lighthouse-book.sigmaprime.io/validator-doppelganger.html" target="_blank"><code>enable-doppelganger-protection</code></a> flag in Lighthouse docs.
                </li>
            </ul>
        </div>
    </TabItem>
    <TabItem value="chiado">
        <div data-comment="TODO: document chiado validation process"></div>
    </TabItem>
</Tabs>