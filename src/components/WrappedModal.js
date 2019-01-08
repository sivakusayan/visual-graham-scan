import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

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
    return (
      <div>
        <button onClick={this.openModal}>?</button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <h2>What is the Convex Hull?</h2>
          <h2>What can it be used for?</h2>
          <h2>Credits</h2>
        </Modal>
      </div>
    );
  }
}

export default WrappedModal;
