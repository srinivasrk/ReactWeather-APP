var React = require('react');

// var About = React.createClass({
//   render:function(){
//     return(
//       <h3> About component</h3>
//     );
//   }
// });


// stateless functional component

var About = (props) => {
  return(
    <div className="row">
      <h3 className="small-12 text-center"> About</h3>
      <p className = "small-12  text-center"> Built using React, jQuery& Foundation</p>
      <p className = "small-12  text-center">
        <a  target="_blank" href="https://www.linkedin.com/in/srini-cincy/"> My linkedin profile</a>
      </p>
    </div>
  );
};
module.exports = About;
