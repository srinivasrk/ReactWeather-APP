var React = require('react');

// var Examples = React.createClass({
//   render:function(){
//     return(
//       <h3>Example</h3>
//     );
//   }
// });


//Stateless functional component
var Examples = (props) => {
  return(
    <div>
      <h3>Example</h3>
      <p> Welcome to examples page!</p>
    </div>
  );
}

module.exports = Examples;
