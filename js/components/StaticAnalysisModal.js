var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var OverlayMixin = require('react-bootstrap').OverlayMixin;
var SurveyActions = require('../actions/SurveyActions');

var StaticAnalysisModal = React.createClass({
  mixins: [OverlayMixin],
  propTypes: {
    isOpen: React.PropTypes.bool.isRequired
  },
  handleClose() {
    SurveyActions.toggleStaticAnalysisModal();
  },
  handleDrop() {

  },
  handleClick() {
    SurveyActions.toggleStaticAnalysisModal();
  },
  render() {
    return (
        <div className='static-modal'></div>
    );
  },
  renderOverlay() {
    if (!this.props.isOpen) {
      return <div></div>;
    }
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Static Analysis Parameters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do stuff here.
        </Modal.Body>

        <Modal.Footer>
          <Button>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
});

module.exports = StaticAnalysisModal;