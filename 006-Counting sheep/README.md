<h2><a href="https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript">6. Counting sheep...</a></h2><h3>8 kyu</h3><hr><div>

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

## **For example,**
```
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```
The correct answer would be `17`.

**Hint**: Don't forget to check for bad values like `null`/`undefined`

## **Sample Tests:**

```js
const {assert} = require('chai');

describe('Sample Tests', function() {
  const tests = [
    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined,null,false,true], 1],
    [[undefined,null,false,true,true,false,null,undefined], 2],
    [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],
  ];

  for (let [sheep, expected] of tests) {
    it(`${stringify(sheep)}`, function() {
      assert.strictEqual(countSheeps(sheep), expected);
    });
  }
  
  function stringify(sheep) {
    return `[${sheep.map(String).join(',')}]`;
  }
});
```

</div>
