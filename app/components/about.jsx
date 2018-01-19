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
      <h1 className=" text-center page-title"> About</h1>
      <p className = "text-center"> Built using React, jQuery& Foundation</p>
      <p className = "text-center">
        <a  target="_blank" href="https://www.linkedin.com/in/srini-cincy/"> My linkedin profile</a>
      </p>
    </div>
  );
};
module.exports = About;
