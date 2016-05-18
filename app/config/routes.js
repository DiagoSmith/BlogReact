
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Root = require('../components/root');
var Home = require("../components/Home");
var Blog = require("../components/Blog");
var login = require("../components/login");
var Posts = require("../components/posts");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Root}> //Header dashboard thing, always present at every route. 
      <Route path = 'Home' component={Home} />
      <Route path = 'login' component={login} /> // returns the login form 
      <Route path = 'Blog' component={Blog} />
      	<Route path = 'Blog/Posts' component={Posts} />
      
    </Route>
  </Router>
);

module.exports = routes;