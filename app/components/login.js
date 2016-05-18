var React = require('react');

var login= React.createClass({
  render: function () {
    return (
    	<div>
	    	<form action = "" onSubmit= {this.handleSubmit}> 
	  			Username:<br/>
	  			<input type="text" name="user" onChange = {this.userChange}/><br/>
	  			PassW:<br/>
	  			<input type="password" name="pw" onChange = {this.pwChange}/>
	  			<input type="submit" value="Submit"/>
  			</form> 
  		</div>
    )
  },
  handleSubmit: function(e) {
  	var data = {
  		user_login: this.state.user
  		user_pwd: this.state.pw
  	}


  $.ajax({
    type: 'POST',
    url: 'http://apitest.icfrog.com/api/login',
    data: data
  })
  

}

  },
  userChange: function(e) {
  	this.setState(({value: event.target.value});) //updates the username with latest value
  },
  pwChange: function(e) {
  	this.setState(({value: event.target.value});)
  }
});

module.exports = login;