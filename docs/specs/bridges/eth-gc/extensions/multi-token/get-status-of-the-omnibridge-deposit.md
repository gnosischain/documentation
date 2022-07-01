---
description: >-
  How to get programatically the status of the deposit made through the
  OmniBridge
---

# Get status of the OmniBridge deposit

:::warning
This page is mostly for the application developers, if you sent tokens through the OmniBridge and would like to get the status whether the tokens were sent successfully or not, please use [AMB Live Monitoring application](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application) instead.
:::

First of all, the Arbitrary Message Bridge contract (`0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e`) which is used by the OmniBridge, emits the `UserRequestForAffirmation` event as part of the a deposit request made by user.

{% code title="https://github.com/poanetwork/tokenbridge-contracts/blob/feb0ba555cb8bf74f7fa21911120d878715a0a84/contracts/upgradeable_contracts/arbitrary_message/ForeignAMB.sol#L6
```
event UserRequestForAffirmation(bytes32 indexed messageId, bytes encodedData);
```
:::

For example, here is the event in the OmniBridge transaction: [https://etherscan.io/tx/0x804a4b28520faad8b68d122cafdffedd2e185a9aa734b69f264a652d5c53afa4#eventlog](https://etherscan.io/tx/0x804a4b28520faad8b68d122cafdffedd2e185a9aa734b69f264a652d5c53afa4#eventlog), the topic `0x482515ce3d9494a37ce83f18b72b363449458435fafdd7a53ddea7460fe01b58`.

![](</img/specs/bridges/image-89.png>)

It is obvious from the event definition and from the example that the Id of the AMB message is trackable as part of the event. The event from the example shows the message Id: `0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000000402`.

On another side of the bridge if the message was executed successfully the AMB contract (`0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59`) emits the `AffirmationCompleted` event.

{% code title="https://github.com/poanetwork/tokenbridge-contracts/blob/feb0ba555cb8bf74f7fa21911120d878715a0a84/contracts/upgradeable_contracts/arbitrary_message/HomeAMB.sol#L7-L12
```
event AffirmationCompleted(
    address indexed sender,
    address indexed executor,
    bytes32 indexed messageId,
    bool status
);
```
:::

Here is the event corresponding to the requests from the example: [https://blockscout.com/xdai/mainnet/tx/0x092f1c8a02f305e5bfb671b923710cdd150c5b0e41df048c75b790538a25025b/logs](https://blockscout.com/xdai/mainnet/tx/0x092f1c8a02f305e5bfb671b923710cdd150c5b0e41df048c75b790538a25025b/logs)

![](</img/specs/bridges/image-90.png>)

The topic of the event is `0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7`. And the message Id is represented as a separate topic in the event.

That's why it is possible to use different ways to filter out the corresponding transaction if the message Id of the OmniBridge deposit is known (it always can be received from the deposit transaction).

For example, you can use the BlockScout API for this: [https://blockscout.com/xdai/mainnet/api-docs](https://blockscout.com/xdai/mainnet/api-docs). Example of the request to the BlockScout:

```
https://blockscout.com/xdai/mainnet/api?module=logs&action=getLogs&fromBlock=1&toBlock=latest&address=0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59&topic0=0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7&topic3=0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000000402&topic0_3_opr=and
```

It will return the JSON with the transaction hash which causes the emit of the event `AffirmationCompleted` with the message Id:

```javascript
{
  "message": "OK",
  "result": [
    {
      "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
      "blockNumber": "0xbc8133",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
      "gasPrice": "0x3b9aca00",
      "gasUsed": "0x2d572",
      "logIndex": "0x8",
      "timeStamp": "0x5f7ab6dd",
      "topics": [
        "0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7",
        "0x00000000000000000000000088ad09518695c6c3712ac10a214be5109a655671",
        "0x000000000000000000000000f6a78083ca3e2a662d6dd1703c939c8ace2e268d",
        "0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000000402"
      ],
      "transactionHash": "0x092f1c8a02f305e5bfb671b923710cdd150c5b0e41df048c75b790538a25025b",
      "transactionIndex": "0x5"
    }
  ],
  "status": "1"
}
```
