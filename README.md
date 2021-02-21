# _Mr. Roboger's Neighborhood_

#### _Web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with some exceptions. The user can enter a new number and see new results over and over again without refreshing the page._

#### By _**Carlos Urquiza**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_
* _Bootstrap_
* _Git_
* _GitHub_

## Description

_This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_

* **Numbers that contain a 1:** All digits are replaced with "Beep!"
* **Numbers that contain a 2:** All digits are replaced with "Boop!"
* **Numbers that contain a 3:** All digits are replaced with "Won't you be my neighbor?"

## Setup/Installation Requirements

* _Clone this repository._
* _Navigate to the top level of the directory._
* _Open the index.html file in order to view in your browser. Alternatively, you can view the project via this [GitHub Page](https://webquiza.github.io/mr_robogers_neighborhood/)_

## Specifications

**Describe: roboTalk();**

```
Test: "Numbers that contain a 1: All digits are replaced with "Beep!""
Expect(roboTalk(1).toEqual("0, Beep!");
```
```
Test: "Numbers that contain a 2: All digits are replaced with "Boop!""
Expect(roboTalk(2).toEqual("0, Beep!, Boop!");
```
```
Test: "Numbers that contain a 3: All digits are replaced with "Won't you be my neighbor?""
Expect(roboTalk(3).toEqual("0, Beep!, Boop!, Won't you be my neighbor?");
```
```
Test: "Numbers that contain a 10: All digits are replaced with "Beep!"
Expect(roboTalk(10).toEqual("0, Beep!, Boop!, Won't you be my neighbor?,4,5,6,7,8,9, Beep!");
```
```
Test: "Numbers that contain a 12: All digits are replaced with "Beep!, Beep!, Boop!"
Expect(roboTalk(12).toEqual("0, Beep!, Boop!, Won't you be my neighbor?,4,5,6,7,8,9, Beep!, Beep!, Boop!");
```
```
Test: "Numbers that contain a 13: All digits are replaced with "Beep!, Beep!, Boop!, Won't you be my neighbor?"
Expect(roboTalk(13).toEqual("0, Beep!, Boop!, Won't you be my neighbor?,4,5,6,7,8,9, Beep!, Beep!, Boop!, Won't you be my neighbor?");
```

## Known Bugs

* _No known bugs._

## License

_MIT_

## Contact Information

_Please contact me at webquiza@gmail.com if you run into any issues viewing this project after following the Setup/Installation Requirements._