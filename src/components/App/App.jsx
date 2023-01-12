import { FeedbackWidget } from '../FeedbackWidget/FeedbackWidget';
import { useState } from 'react';
//import { useEffect } from 'react';

export const App = () => {
  const [good, setGood] = useState({ name: 'Good', value: 0 });
  const [neutral, setNeutral] = useState({ name: 'Neutral', value: 0 });
  const [bad, setBad] = useState({ name: 'Bad', value: 0 });
  const [total, setTotal] = useState({ name: 'Total', value: 0 });
  const [positivePercentage, setPositivePercentage] = useState({
    name: 'Positive feedback',
    value: '0%',
  });


  const countPositiveFeedbackPercentage = () => {
    setPositivePercentage({
      ...positivePercentage,
      value: Math.round((good.value * 100) / total.value.toFixed(5)) + '%',
    });
  };

  const countTotalFeedback = () => {
    setTotal({
      ...total,
      value: good.value + neutral.value + bad.value,
    });

    countPositiveFeedbackPercentage();
    // console.log('countTotalFeedback', total);
    // console.log('good.value', good.value);

  };

  const handleStatisticChange = evt => {
    const {name} = evt.target;
    //console.log('handleStatisticChange');
    switch (name) {
      case 'good':
        setGood({ ...good, value: good.value + 1 });
        console.log('handleStatisticChange setGood', good);
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
    console.log(good);
    countTotalFeedback()
  };

  return (
    
    <>
    {console.log('return')}
      <FeedbackWidget
        stateData={{ good, bad, neutral, total, positivePercentage }}
        onChangeStatistic={handleStatisticChange}
      />
    </>
  );
};

export default App;
