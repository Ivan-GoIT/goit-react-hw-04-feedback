import css from './FeedbackButton.module.css';
import PropTypes from 'prop-types';

export const FeedbackButton = props => {
  const { buttonName, buttonTitle, onClick } = props;
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
};

FeedbackButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired,
};
