I know relatively little about react and all the front-end architecture. Best way to figure this out is to learn-by-doing.

Learning and debugging react-redux (8hrs)
---
* I picked `react-boilerplate` to start learning react/redux because it's the first thing I Googled
 * set up and install `react-boilerplate`
 * so many new things to learn here... need to figure out how these work:
   * webpack
   * redux
   * ES6/7 syntax
 * Make a basic react component `RiskButton`
  * from boilerplate ... `npm run generate`
  * Ecmascript 6/7 syntax is so different from what plain old JS...
 * how does a component interact with redux?
  * intro to redux...
 * the `react-boilerplate` is very opinionated on structure. It is taking some time to understand what parts I need to edit.
  * look at `react-boilerplate` to create my first reducer.
   * what is this package `reselect`? and why is it useful? https://www.npmjs.com/package/reselect
   * stuck in debugging hell trying to get redux to connect properly to the state props.
   * after 2 or 3 hours I couldn't figure out why the component was broken and the error messaging is too vague. I started a new component and appears to be working even though the code is almost identical! Go figure. I still don't know why the original stopped working. Sometimes that's just how it goes. Having stared at this react/redux code for a couple of hours trying to identify the problem I am more familiar with its patterns.
 * watch short video on youtube about redux mapStateToProps and mapDispatchToProps: makes total sense now. Now I'm in the groove.

Building the app (12hrs)
----
* Design Table view
* Learn a little about css-grid
* tinkering with graphing libraries. `react-easy-chart` plugged into my boilerplate environment very easily! Thank goodness.
* Now, how do I preserve state when I move to page 2?
 * Discover and use `react-router-dom` lib. Very cool.
* fiddling around with displaying data and refactoring sampledata
 * (4hr) Build the datatable but refactor to pull the business logic out of the JSX and put it into the selectors file.
 * try out a couple different css libraries. `react-bootstrap` works well enough.
*
* re-design app using bootstrap.

Cleaning up (2hrs)
---
* refactor code. delete as much boilerplate as I can without breaking app.
* add documentation
* testing?
