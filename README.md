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
