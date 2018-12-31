/**
 * A button that shows a tooltip upon hover. Note that an svg with the same name as the
 * passed in purpose should be in the spritesheet, else no icon will be displayed.
 */

import React from 'react';
import PropTypes from 'prop-types';

import KebabCase from '../propTypes/KebabCase';
import toTitleCase from '../utils/toTitleCase';

const StageButton = ({ purpose, onClick, disabled }) => (
  <button
    type="button"
    data-tool-tip={toTitleCase(purpose)}
    className={`btn btn--icon ${purpose}`}
    onClick={onClick}
    disabled={disabled}
  >
    <svg className="btn--icon__icon">
      <use href={`img/spritesheet.svg#${purpose}`} />
    </svg>
  </button>
);

StageButton.propTypes = {
  purpose: KebabCase,
  onClick: PropTypes.func.isRequired,
};

StageButton.defaultProps = {
  purpose: 'none',
};

export default StageButton;
