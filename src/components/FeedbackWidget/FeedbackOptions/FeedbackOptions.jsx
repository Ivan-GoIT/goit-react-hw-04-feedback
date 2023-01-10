import { FeedbackButton } from '../FeedbackButton/FeedbackButton';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(key => (
        <FeedbackButton
          key={key}
          buttonName={key}
          buttonTitle={options[key].name}
          onClick={onLeaveFeedback}
        />
      ))}
    </>
  );
};


FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({ 
  }).isRequired
};