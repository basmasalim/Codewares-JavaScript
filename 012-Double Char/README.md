<h2><a href="https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript">12. Double Char</a></h2><h3>8 kyu</h3><hr><div>

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

## **Examples (Input -> Output):**
```
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
```
Good Luck!

## **Sample Tests:**

```js
const Test = require('@codewars/test-compat');

describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});

```
</div>