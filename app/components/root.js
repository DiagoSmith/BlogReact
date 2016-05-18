var React = require('react');

var Root = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        THIS will be the top dashboard, and will appear everywhere. 
       <br/>
       <br/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Root;