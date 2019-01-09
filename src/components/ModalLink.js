import React from 'react';
import PropTypes from 'prop-types';

const ModalLink = ({ href, children }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="modal-link"
  >
    {children}
  </a>
);

ModalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalLink;
