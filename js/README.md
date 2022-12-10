## micro-text-js

A JavaScript utility that provides text processing routines for post content (for the social network I'm building). This library conforms to a common test suite shared by many other implementations, particularly the one for Android applications (Java). The library provides autolinking and extraction for URLs, usernames, lists, and hashtags.

## NPM Users

Install it with: `npm install @micro-text/text-js`

The `micro.txt` namespace is exported, making it available as such:

``` js
var micro = require('@micro-text/text-js')
micro.autoLink(micro.htmlEscape('#hello < @world >'))
```

## Extraction Examples

    // basic extraction
    var usernames = micro.txt.extractMentions("Mentioning @vincent and @james")
    // usernames == ["vincent", "james"]

## Auto-linking Examples

    micro.txt.autoLink("link @user, please #request");

    micro.txt.autoLink("link @user, and expand url... http://sq.co/0JG5Mcq", {
        urlEntities: [
            {
              "url": "http://sq.co/0JG5Mcq",
              "display_url": "blog.square.com/2022/05/square…",
              "expanded_url": "http://blog.square.com/2022/05/square-for-mac-update",
              "indices": [
                30,
                48
              ]
            }
        ]});

## Content Parsing
**micro-text** exposes a "parseText" method that will return the following fields:

* **weightedLength:** Integer that indicates the weighted length calculated by the algorithm above.
* **permillage:** Integer value corresponding to the ratio of consumed weighted length to the maximum weighted length.
* **valid:** Boolean indicating whether it is a valid content (for posts).
* **dispayRangeStart:** Integer with start index on the text string
* **displayRangeEnd:** Integer with end index on the text string (inclusive)
* **validDisplayRangeStart:** Integer indicating the valid start index on the text string
* **validDisplayRangeEnd:** Integer indicating the valid end index on the text string. This can be lesser than displayRangeEnd (inclusive).

```js
var content = "This is a test post";
micro.txt.parseText(content);
/* Returns:
  {
    weightedLength: 20,
    permillage: 71,
    valid: true,
    displayRangeEnd: 19,
    displayRangeStart: 0,
    validRangeEnd: 19,
    validRangeStart: 0
  }
*/
```
