var React = require('react');
var {Link} = require('react-router');
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
      <h1 className="text-center page-title">Example</h1>
      <p className="text-center"> Here are a few example location to try out</p>
      <ol>
        <li>
          <Link to='/?location=cincinnati'> Cincinnati, OH</Link>
        </li>
        <li>
            <Link to='/?location=bangalore'> Bangalore, India</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
