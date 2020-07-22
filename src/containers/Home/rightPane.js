/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import Pane from '../../components/Pane';
import JsonInputComponent from '../../components/JsonInput';
import JsonHandlerContext from '../../contexts/JsonHandlerContext';

const RightPaneUI = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  > * + * {
    border-top: solid;
    border-color: #EEEEEE;
    border-width: 1px;
  }
`;

const RightPane = () => {
  const {
    valueRight,
    setValueRight,
  } = useContext(JsonHandlerContext);
  return (
    <Pane flexGrow={0.4}>
      <RightPaneUI>
        <h3>Please enter Json 2</h3>
        <JsonInputComponent value={valueRight} onChange={setValueRight} />
      </RightPaneUI>
    </Pane>
  );
};

RightPane.propTypes = {

};

export default RightPane;
