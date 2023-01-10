import css from './FeedbackWidget.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';

export const FeedbackWidget = props => {
  const { stateData, onChangeStatistic } = props;
  const { total, positivePercentage, ...rest } = stateData;
  
  return (
    <div className={css.feedbackWidget}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={rest} onLeaveFeedback={onChangeStatistic} />
      </Section>
      {!!total.value&&<Section title={'Statistic'}>
        <Statistics statistics={stateData} />
      </Section>}
    </div>
  );
};

FeedbackWidget.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
    neutral: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
    bad: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
    total: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
    positivePercentage: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }),
};