import { memo } from 'react';
import css from './FeedbackButton.module.css';
import PropTypes from 'prop-types';

export const FeedbackButton = memo(
  ({ buttonName, buttonTitle, onClick }) => {
    return (
      <button
        type="button"
        name={buttonName}
        className={css.button}
        onClick={onClick}
      >
        {buttonTitle}
      </button>
    );
  },
  (prev, next) =>
    prev.buttonName === next.buttonName && prev.buttonTitle === next.buttonTitle
);

FeedbackButton.displayName = 'FeedbackButton';

FeedbackButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
