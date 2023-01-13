import { FeedbackWidget } from '../FeedbackWidget/FeedbackWidget';
import { useState, memo } from 'react';
//import { useEffect } from 'react';

export const App = memo(() => {
  const [good, setGood] = useState({ name: 'Good', value: 0 });
  const [neutral, setNeutral] = useState({ name: 'Neutral', value: 0 });
  const [bad, setBad] = useState({ name: 'Bad', value: 0 });

  const handleStatisticChange = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood({ ...good, value: good.value + 1 });
        break;
      case 'neutral':
        setNeutral({ ...neutral, value: neutral.value + 1 });
        break;
      case 'bad':
        setBad({ ...bad, value: bad.value + 1 });
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good.value + neutral.value + bad.value;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good.value * 100) / total.value.toFixed(5)) + '%';
  };

  const total = { name: 'Total', value: countTotalFeedback() };
  const positivePercentage = {
    name: 'Positive feedback',
    value: countPositiveFeedbackPercentage(),
  };

  return (
    <>
      {console.log('App.render')}
      <FeedbackWidget
        stateData={{ good, bad, neutral, total, positivePercentage }}
        onChangeStatistic={handleStatisticChange}
      />
    </>
  );
});

export default App;
