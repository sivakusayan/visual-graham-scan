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
          <p>
            The convex hull, is vaguely speaking, the collection of
            points that you need to 'surround' all the other points. It
            is perhaps bext explained with pictures.
          </p>
          <h2>What can it be used for?</h2>
          <p>
            The convex hull has a wide variety of applications, such as
            checking for collisions, robot motion planning, and image processing.
            One can also try to find the convex hull of a 3D point set, which gives
            us a nice way to compute Delaunay Triangulations.
          </p>
          <h2>Credits</h2>
        </Modal>
      </div>
    );
  }
}

export default WrappedModal;
