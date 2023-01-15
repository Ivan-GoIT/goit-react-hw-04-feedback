import { FeedbackWidget } from '../FeedbackWidget/FeedbackWidget';
import { useState,  } from 'react';
// import { useEffect } from 'react';

const useAppState = (key, value) => {
  const [state, setState] = useState(() => ({ name: key, value }));

  return [state, setState];
};

export const App = () => {
  const [good, setGood] = useAppState('Good', 0);
  const [neutral, setNeutral] = useAppState('Neutral', 0);
  const [bad, setBad] = useAppState('Bad', 0);

  const total = { name: 'Total', value: 0 };
  const positivePercentage = {
    name: 'Positive feedback',
    value: 0,
  };

  const handleStatisticChange = evt => {
    const { name } = evt.target;

    const increaseValueByOne = state => ({ ...state, value: state.value + 1 });

    switch (name) {
      case 'good':
        setGood(prev => increaseValueByOne(prev));
        break;
      case 'neutral':
        setNeutral(prev => increaseValueByOne(prev));
        break;
      case 'bad':
        setBad(prev => increaseValueByOne(prev));
        break;
      default:
        return;
    }
  };

  total.value = good.value + neutral.value + bad.value;
  positivePercentage.value =
    Math.round((good.value * 100) / total.value.toFixed(5)) + '%';

  return (
    <>
      <FeedbackWidget
        stateData={{ good, bad, neutral, total, positivePercentage }}
        onChangeStatistic={handleStatisticChange}
      />
    </>
  );
};

export default App;
