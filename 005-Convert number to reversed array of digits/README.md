<h2><a href="https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript">5. Convert number to reversed array of digits</a></h2><h3>8 kyu</h3><hr><div>

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

## **Examples (input -> output)**
```
35231 => [1,3,2,5,3]
0 => [0]
```


<p>&nbsp;</p>
<p><strong class="example">Sample Tests:</strong></p>

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});
```

</div>