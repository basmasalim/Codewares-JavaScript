<h2><a href="https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript">2. Sum of positive</a></h2><h3>8 kyu</h3><hr><div><p>You get an array of numbers, return the sum of all of the positives ones. <br> Example  <code>[1,-4,7,12]</code> => <code>1 + 7 + 12 = 20</code> <br> Note: if there is nothing to sum, the sum is default to <code>0</code></p>

<p>&nbsp;</p>
<p><strong class="example">Sample Tests:</strong></p>

```
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });
```

</div>
