import React, { useState } from 'react';
import calculateSimilarity from '../similarityCalculateAlgo';
import { INVALID_JSON } from '../similarityCalculateAlgo/errorMessages';

const intialContext = {
  valueLeft: '',
  valueRight: '',
  setValueLeft: () => {},
  setValueRight: () => {},
  status: '',
  calculateScore: () => {},
};

const JsonHandlerContext = React.createContext(intialContext);

export const JsonHandlerProvider = ({ children }) => {
  const [valueLeft, setValueLeftInternal] = useState('');
  const [valueRight, setValueRightInternal] = useState('');

  const [status, setStatus] = useState('');

  const setValueLeft = value => {
    setStatus('');
    setValueLeftInternal(value);
  };

  const setValueRight = value => {
    setStatus('');
    setValueRightInternal(value);
  };

  const calculateScore = () => {
    const result = calculateSimilarity(valueLeft, valueRight);
    if (result !== INVALID_JSON) {
      setStatus(`JSON similarity score is = ${result}`);
    } else {
      setStatus('Please enter valid JSON');
    }
  };

  return (
    <JsonHandlerContext.Provider
      value={{
        valueLeft,
        valueRight,
        setValueLeft,
        setValueRight,
        calculateScore,
        status,
      }}
    >
      {children}
    </JsonHandlerContext.Provider>
  );
};

export default JsonHandlerContext;
