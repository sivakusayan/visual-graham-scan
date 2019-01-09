import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import MODAL_MARKUP from '../__constants__/MODAL_MARKUP';

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
    const style = {
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.35)',
      }
    };
    return (
      <div className={`modal-container ${!isEditable ? 'fade' : ''}`}>
        <button
          type="button"
          aria-label="Help"
          className="btn btn--modal"
          onClick={this.openModal}
        >?</button>
        <Modal
          style={style}
          isOpen={isOpen}
          onRequestClose={this.closeModal}
          contentLabel="Help Modal"
          // Works together with _modal.scss to properly define fade transition
          closeTimeoutMS={300}
          className="modal"
        >
          <button
            type="button"
            aria-label="Close Help"
            className="btn btn--modal"
            onClick={this.closeModal}
          >X</button>
          <section className="modal-copy">
            <div>
              <h2 className="modal-heading">What is the Convex Hull?</h2>
              {MODAL_MARKUP.WHAT}
            </div>
            <div>
              <h2 className="modal-heading">What can it be used for?</h2>
              {MODAL_MARKUP.WHY}
            </div>
            <div className="modal-misc">
              <div>
                <h2 className="modal-heading">Credits</h2>
                {MODAL_MARKUP.CREDITS}
              </div>
              <div>
                <h2 className="modal-heading">Resources</h2>
                {MODAL_MARKUP.RESOURCES}
              </div>
            </div>
          </section>
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
