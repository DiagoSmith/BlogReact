

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')

ReactDOM.render(
	routes, 
	document.getElementById('app')
	); 




//ReactDOM.render(<Hello name ="Ro"/>, document.getElementById('app')); 
//ReactDOM.render(<Avatar username ="Ro"/>, document.getElementById('app2'));


//the component is invoked here, this is the first argument of the method. 
//the second argument instructs the component where to render to that element.


/////Props////
//Props are used to access data that is passed with the render. It's called within the returned component 
//within the curly braces 

/* ALL REACT COMPONENTS SHOULD BE: 
	Focussed 
	Independent
	Reusable
	Small
	Testable
*/



// var root = React.createClass({
// 	render: function () {
// 		return (
// 			getInitialState() {
// 			    return {
			          
// 			    };
// 			},
// 			)
// 	}
// })



/*var Hello = React.createClass({
  render: function () { //must always have a render method
    return (
      <div>Hello ReactJS Programmer {this.props.name} </div>
    )
  }
});


 var ProfilePic = React.createClass({
   render: function() {
     return (
       <img src={'https://photo.fb.com/' + this.props.username} />
     )
   }
 })

 var ProfileLink = React.createClass({
   render: function() {
     return (
       <a href={'https://www.fb.com/' + this.props.username}>
         {this.props.username}
       </a>
     )
   }
 })

 var Avatar = React.createClass({
   render: function() {
     return (
       <div>
         <ProfilePic username={this.props.username} />
         <ProfileLink username={this.props.username} />
       </div>
     )
   }
 })*/