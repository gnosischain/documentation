import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
        {label: 'Linux, MacOS, Arm64', value: 'others'},
        {label: 'Windows', value: 'win'}
    ]}>
    <TabItem value="others">
        <div>
            <ul>
                    <li>Copy the download link for Linux, MacOS or Arm64 package from the <a href="https://github.com/gnosischain/validator-data-generator/releases" target="_blank">validator data generation tool</a>.</li>
                <li>
                    Download the Validator Data Generation tool
                    <pre><code>wget [URL_FROM_PREVIOUS_STEP]</code></pre>
                </li>
                <li>
                    Unzip the downloaded file
                    <pre><code>tar -xvf [FILE_NAME]</code></pre>
                </li>
                <li>
                    Get into the folder
                    <pre><code>cd gbc-validator-data-generator</code></pre>
                </li>
                <li>
                    Execute Validator Data Generation tool and follow the instructions.
                    <pre><code>./deposit new-mnemonic</code></pre>
                </li>
                <li>Select the language of the UI and mnemonic.</li>
                <li>Choose the number of validators. Remember: 1 GNO = 1 validator. You can run many validators in the same machine.</li>
                <li>Choose <code>gnosis</code> on the network/chain name.</li>
                <li>Create a password to encrypt the keys.</li>
                <li>The mnemonic (seed phrase) will show on screen. Save it in a secure place (idealy offline).</li>
                <li>Type your mnemonic to confirm in the tool.</li>
                <li>
                    Wait untill the keys are created. Two types of files will be generated: 
                    <ul>
                        <li><code>deposit_data-*.json</code></li>
                        <li>One <code>keystore-*.json</code> per validator</li>
                    </ul>
                </li>
                <li>Save the location of the generated keys, and copy them in a backup USB memory or any other secure storage.</li>
            </ul>                    
        </div>
    </TabItem>
    <TabItem value="win">
        <div>
            <ul>
                <li>
                    Download the Windows version of the <a href="https://github.com/gnosischain/validator-data-generator/releases" target="_blank">Validator Data Generation tool</a> from the releases page.
                </li>
                <li>
                    Execute Validator Data Generation tool and follow the instructions.
                    <pre><code>deposit.exe new-mnemonic</code></pre>
                </li>
                <li>Select the language of the UI and mnemonic.</li>
                <li>Choose the number of validators. Remember: 1 GNO = 1 validator. You can run many validators in the same machine.</li>
                <li>
                    <Tabs groupId="network" defaultValue="gnosis" values={[
                        {label: 'Gnosis', value: 'gnosis'},
                        {label: 'Chiado', value: 'chiado'}
                    ]}>
                        <TabItem value="gnosis">Choose <code>gnosis</code> on the network/chain name.</TabItem>
                        <TabItem value="chiado">Choose <code>chiado</code> on the network/chain name.</TabItem>
                    </Tabs>
                </li>
                <li>Create a password to encrypt the keys.</li>
                <li>The mnemonic (seed phrase) will show on screen. Save it in a secure place (idealy offline).</li>
                <li>Type your mnemonic to confirm in the tool.</li>
                <li>
                    Wait untill the keys are created. Two types of files will be generated: 
                    <ul>
                        <li><code>deposit_data-*.json</code></li>
                        <li>One <code>keystore-*.json</code> per validator</li>
                    </ul>
                </li>
                <li>Save the location of the generated keys, and copy them in a backup USB memory or any other secure storage.</li>
            </ul>                    
        </div>
    </TabItem>
</Tabs>
<p>For custom setup and more instructions, check the <a href="https://github.com/gnosischain/validator-data-generator#gnosis-chain-validators-data-generator">repository readme</a>.</p>