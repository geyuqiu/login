# improve web accessibility

* mobile first, CMS that supports accessibility
* assign alt tags to images, descriptions to links, forms
* use colors wisely to provide great experience to people that are strongly/weakly color blind
* keyboard navigation on a website
* follow [WCAG 2.0](https://www.w3.org/TR/WCAG20/)

# optimize Frontend code 
use lighthouse to measure initial load time and optimize:

* use e.g. wepback to bundle and minimize your packaged code
* tree shake / dead code elimination, discover dependencies that are not needed
* lazy loading
* mobile first approach, including responsive images
* load third party js scripts asynchronously (`defer`)
* clean up unused code: css, html, js
* svg over jpg etc., compress images if possible
* if it is really about top performance, then prefer libraries (React, Vue) over frameworks (Angular)
* decreases latency for users using e.g. S3 and CloudFront to enable serving over CDN and caching
* leverage caching
* optimize video, especially for mobile users

# React component life cycle 
* Virtual DOM
* all life cycle methods can split to 3 categories
    * mounting
        * `constructor`: initialize variables
        * `render`: do not update states here!
        * `componentDidMount`: fetch apis etc.
    * updating
        * `render`:
        * `componentDidUpdate`: access changes to props
    * unmouting
        * `componentWillUnmount`: clean up

# Redux
idea initially introduced from Facebook developers: how to keep states centralized in stores, 
and keep the changes of states in stores understandable and maintainable via reducers, actions and dispatchers. 
It promotes the one way data flow. Since then similar frameworks has also developed for other frameworks,
e.g. NGRX for angular. However, with redux we do have a lot more boilerplate, so there has also been talks about "moving away from"
redux: https://www.youtube.com/watch?v=Toii079xVzc

# webpack
* static module bundler for css, js, images, fonts etc. and minimize them
* enable fast build optimizations, compared to IIFE tools like Gulp etc.
* helps treeshaking dependencies

# code efficiency, optimization and performance
* cracking the coding interview introduced multiple ways regarding how to write algorithms efficiently
    * start talking loud
    * try brute force while stating time and space complexity 
    * optimize it with different methods (BUD) while keeping time and space complexity in mind
    * etc.
* clean code: SOLID principles
* TDD with clean code together

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

the app is deployed on: https://yuqiu-login.netlify.app/

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
