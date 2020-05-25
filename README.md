# ThermoCo Test App

### Installation

ABB Test requires [Node.js](https://nodejs.org/) to run.



Install the dependencies and start the server.

```sh
$ cd abb-test
$ npm install
$ npm start
```

### Basic Features

I have developed the app considering that the API mocker only sends the data from sensors whenever it's required and the app is which assigns status and other calculations to the shown data. So it would be easy to adjust the sensibility, quality and performance by the user.

I have assumed that the feature quality status should be the worst of any control in that feature but it could be changed to any other weighted score.

It has a default configuration for the features, controls, number of saved data sets to calculate the total deviation, delay.. but you always can change them to whatever values modifying the **`config.js`** file.

### Next Steps

For simplicity the feature configuration always has the same number of controls, so it would need some layout improvements to adjust the height and/or width of the Feature Boxes when the controls are not the same in number.

I would add some controls to adjust the quality ranges, data refreshing delay and total number of data sets to save. 

For preventing errors for **`FeatureBox.js`** Component consumers I would add unit tests and Typscript to the app.

To improve performance I would investigate on the total deviation calculation, which is the most CPU consumer.

----
### License


MIT
