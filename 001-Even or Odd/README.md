<h2><a href="https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript">1. Even or Odd</a></h2><h3>8 kyu</h3><hr><div><p>Create a function that takes an integer as an argument and returns <code>"Even"</code> for even numbers or <code>"Odd"</code> for odd numbers.</p>

<p>&nbsp;</p>
<p><strong class="example">Sample Tests:</strong></p>

```js
const chai = require('chai');
const assert = chai.assert;

describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(evenOrOdd(0), "Even");
  });
});
```

</div>
