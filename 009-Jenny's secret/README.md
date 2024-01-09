<h2><a href="https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript">9.Jenny's secret message</a></h2><h3>8 kyu</h3><hr><div>

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

## **Sample Tests:**
```js
const Test = require('@codewars/test-compat');

describe("Jenny's greeting function", function(){
  it("should greet some people normally",function(){
    Test.assertEquals(greet("Jim"), "Hello, Jim!");
    Test.assertEquals(greet("Jane"), "Hello, Jane!");
    Test.assertEquals(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special",function(){
    Test.assertEquals(greet("Johnny"), "Hello, my love!");
  });
});
```

</div>