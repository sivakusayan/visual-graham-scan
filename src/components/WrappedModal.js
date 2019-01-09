import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import MODAL_COPY from '../__constants__/MODAL_COPY';

Modal.setAppElement('#app');

class WrappedModal extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => this.setState({
    isOpen: true,
  })

  closeModal = () => this.setState({
    isOpen: false,
  })

  render() {
    const { isOpen } = this.state;
    const { isEditable } = this.props;
    return (
      <div className={`modal-container ${!isEditable ? 'fade' : ''}`}>
        <button
          type="button"
          aria-label="Help"
          className="btn btn--modal"
          onClick={this.openModal}
        >?</button>
        <Modal
          isOpen={isOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <button
            type="button"
            aria-label="Close Help"
            className="btn btn--modal"
            onClick={this.closeModal}
          >X</button>
          <h2>What is the Convex Hull?</h2>
          {MODAL_COPY.WHAT}
          <h2>What can it be used for?</h2>
          {MODAL_COPY.WHY}
          <h2>Credits</h2>
          <h2>Resources</h2>
          {MODAL_COPY.RESOURCES}
        </Modal>
      </div>
    );
  }
}

WrappedModal.propTypes = {
  isEditable: PropTypes.bool,
};

WrappedModal.defaultProps = {
  isEditable: false,
};

export default WrappedModal;
