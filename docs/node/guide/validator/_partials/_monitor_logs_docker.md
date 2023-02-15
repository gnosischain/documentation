import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="execution" label="execution" default>

  ```shell
  docker logs -f --tail 500 execution
  ```

  </TabItem>
  <TabItem value="consensus" label="consensus">

```shell
docker logs -f --tail 500 consensus
```

  </TabItem>
  <TabItem value="validator" label="validator">

```shell
docker logs -f --tail 500 validator
```

  </TabItem>
</Tabs>