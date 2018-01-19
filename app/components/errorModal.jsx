var React = require('react');

var ErrorModal = React.createClass({
  propTypes:{
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps:function(){
    return{
      title: 'An error occured'
    };
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render:function(){
    var {title, message} = this.props;

    return(
      <div className="tiny text-center reveal" id="error-modal" data-reveal="">
        <h4> {title} </h4>
        <p> {message} </p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
