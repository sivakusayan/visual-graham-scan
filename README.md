# Visual Graham Scan
A web application that provides a visualization of the Graham Scan algorithm. The user can manually add points or randomly generate a collection of points. Afterwards, the animation can be played automatically or step-by-step at the user's pace. 

The live app can be found [here](https://www.visualgrahamscan.com/).

![Graham Scan Algorithm](https://media.giphy.com/media/9oI4Z7wqpuLKfqfWBY/giphy.gif)

## What is the Graham Scan?
The Graham Scan is an algorithm used to compute the convex hull of a point set. It is one of the faster convex hull algorithms,
having a time complexity of **O(n log n)** in the worst case, and can reach as low as **O(n)** if the points are pre-sorted. Here is a high-level
overview of how the algorithm works.
<pre>
<b>let</b> points = [] of points 
<b>let</b> convexHull = empty []
<b>let</b> startPoint = lowest, rightmost point <b>in</b> points
<b>sort</b> points by polar angle made with startPoint 

<b>for</b> point <b>in</b> points
  <b>push</b> point into convexHull
  <b>if</b> convexHull has a right turn
    <b>pop</b> the point at the vertex of the right turn 
 
<b>return</b> convexHull
</pre>
## Technologies Used
* [React](https://reactjs.org/) (Library for building UIs)
* [Redux](https://redux.js.org/) (State Management Tool)
* [SASS](https://sass-lang.com/) (CSS Preprocessor)
## Running Locally
### Prequisites
Make sure you that you have Node.js installed. If you don't have it yet, head over to [this link](https://nodejs.org/en/download/).
### Installation and Launch
To get started, first clone the application, and move into the repository:
```
$ git clone https://github.com/sivakusayan/visual-graham-scan.git
$ cd visual-graham-scan
```
Afterwards, install all the dependencies and run the application. Enjoy!
```
$ npm install
$ npm run local
```
### Running Tests
If you want to run the tests, you can do so with the following script:
```
$ npm run test
```
You can also only test a specific part of the application if you like:
```
$ npm run test-algorithm
$ npm run test-components
$ npm run test-containers
$ npm run test-state
```
