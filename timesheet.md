The total project time took quite a while because I chose to learn a bit more about react/redux and some of the newer front-end tools that I haven't used before. I figured the best way to learn all this new stuff is to learn-by-doing.

Learning and debugging react-redux (8-10hrs)
---
* I picked `react-boilerplate` to start learning react/redux because it's the first thing I Googled
 * Set up and install `react-boilerplate`
 * So many new things to learn in the boilerplate... I had to figure out how all these work:
  * webpack
  * redux, especially the concept of selectors and `mapPropsToState` and `mapDispatchToProps`. Those took a while to figure out.
  * ES6/7 syntax is also new to me but I learned Coffeescript a while ago so it turned out to be relatively quick to pick    
  * the `react-boilerplate` has an opinionated structure. It took serious time to understand everything the things I needed to change in order to get the app to work.
n   * what is this package `reselect`? and why is it useful? https://www.npmjs.com/package/reselect
    * stuck in debugging hell trying to get redux to connect properly to the state props.
    * Roadblock: I spent a long time trying to debug some browser error problems because I was trying to edit code from the boiler plate. When I started a fresh new component it started to work even though the code is almost identical! Go figure. I still don't know why the original stopped working. Sometimes that's just how it goes. 
    * After staring at the code for quite a while I feel I ccan finally be productive.

Building the app (10hrs)
----
* (2hr) Code up the `RiskTable` view and `RiskButton` components
* (1hr) tinkering with graphing libraries. `react-easy-chart` plugged into my boilerplate environment very easily! Thank goodness.
* (1hr) How do I preserve state when I move to page 2?
 * Discover and use `react-router-dom` lib. Very cool.
* (3hr) I refactored various views and components as I re-considered the rendering logic. Probably wasted too much time on that.
 * Build the datatable but refactor to pull the business logic out of the JSX and put it into the selectors file.
* (1hr) Learn some new css grid tricks (`display:grid`) which I ended up throwing out because I decided to use a bootstrap based library instead.
 * After trying a few different css libraries. I decided `react-bootstrap` works easiest for me.
 * re-designed app using bootstrap.

Cleaning up (3hrs)
---
* write tests for the code. 
* delete as much boilerplate as I can without breaking app.
* Add documentation
