import React, { useContext } from 'react';
import styled from 'styled-components';
import Pane from '../../components/Pane';
import JsonInputComponent from '../../components/JsonInput';
import JsonHandlerContext from '../../contexts/JsonHandlerContext';

const LeftPainUI = styled.div`
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 720px) {
    border-bottom-style: solid;
    border-right-style: none;
  }
 
  padding: 2em;

`;

const LeftPane = () => {
  const {
    valueLeft,
    setValueLeft,
  } = useContext(JsonHandlerContext);
  return (
    <Pane flexGrow={0.4}>
      <LeftPainUI>
        <h3>Please enter Json 1</h3>
        <JsonInputComponent value={valueLeft} onChange={setValueLeft} />
      </LeftPainUI>
    </Pane>
  );
};

export default LeftPane;
