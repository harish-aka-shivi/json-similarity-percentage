import React from 'react';
import styled from 'styled-components';

const JsonInput = styled.textarea`
  flex-grow:1;
  border-right-style: solid; 
  border-bottom-style: none; 
  border-color: #eeeeee;
  border-width: 0.2px; 
  width: 80%;
  resize: none;
`;

const JsonInputComponent = ({ value, onChange }) => {
  const handleChange = e => {
    e.preventDefault();
    onChange(e.target.value);
  };
  return (
    <JsonInput value={value} onChange={handleChange} />
  );
};

export default JsonInputComponent;
