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
* _Open the index.html file in order to view in your browser. Alternatively, you can view the project via this [GitHub Page](https://github.com/webquiza/mr_robogers_neighborhood/)_

## Specifications

**Describe: roboTalk();**
```
Test: "A string of "0" is returned if the number 0 is inputted."
Expect(userNumber(0).toEqual("0");
```
```
Test: "A string of "0 , Beep!" is returned if the number 1 is inputted."
Expect(userNumber(1).toEqual("0, Beep!");
```
```
Test: "A string of "0 , Beep!, Boop!" is returned if the number 2 is inputted."
Expect(userNumber(2).toEqual("0, Beep!, Boop!");
```
```
Test: "A string of "0 , Beep!, Boop!, Won't you be my neighbor?" is returned if the number 3 is inputted."
Expect(userNumber(2).toEqual("0, Beep!, Boop!, Won't you be my neighbor?");
```
```
Test: "A string of "0 , Beep!, Boop!, Won't you be my neighbor?,4,5" is returned if the number 5 is inputted."
Expect(userNumber(5).toEqual("0, Beep!, Boop!, Won't you be my neighbor?,4,5");
```

## Known Bugs

* _No known bugs._

## License

_MIT_

## Contact Information

_Please contact me at webquiza@gmail.com if you run into any issues viewing this project after following the Setup/Installation Requirements._