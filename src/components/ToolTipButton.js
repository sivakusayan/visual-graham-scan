/**
 * A button that shows a tooltip upon hover. Note that an svg with the same name as the
 * passed in purpose should be in the spritesheet, else no icon will be displayed.
 */

import React from 'react';
import PropTypes from 'prop-types';

import KebabCaseString from '../propTypes/KebabCaseString';
import toTitleCase from '../utils/toTitleCase';

const ToolTipButton = ({ purpose, onClick, disabled }) => (
  <button
    type="button"
    aria-label={toTitleCase(purpose)}
    data-tool-tip={toTitleCase(purpose)}
    className={`btn btn--driver ${purpose}`}
    onClick={onClick}
    disabled={disabled}
  >
    <svg className="btn--driver__icon">
      <use xlinkHref={`img/spritesheet.svg#${purpose}`} />
    </svg>
  </button>
);

ToolTipButton.propTypes = {
  purpose: KebabCaseString,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ToolTipButton.defaultProps = {
  purpose: KebabCaseString,
  onClick: () => null,
  disabled: false,
};

export default ToolTipButton;
