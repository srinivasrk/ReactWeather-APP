var React = require('react');
//
// var WeatherOutput = React.createClass({
//   render:function(){
//     var {temp, location} = this.props;
//     return(
//       <h3> Weather in {location} is {temp} degree celsius ! </h3>
//     );
//   }
// });

var WeatherOutput = ({temp, location}) => {
  return(
    <h3> Weather in {location} is {temp} degree celsius ! </h3>
  );
}
module.exports = WeatherOutput;
