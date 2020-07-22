/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import Pane from '../../components/Pane';
import JsonHandlerContext from '../../contexts/JsonHandlerContext';

const MiddlePaneUI = styled.ul`
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

const CompareButton = styled.button`
  padding: 1rem 4rem 1rem 4rem;
  background-color: green;
  color: white;
  cursor: pointer;
`;

const StatusContainer = styled.p`
  padding: 1rem;
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1.2rem
`;

const MiddlePane = () => {
  const {
    status,
    calculateScore,
  } = useContext(JsonHandlerContext);
  const handleClick = e => {
    e.preventDefault();
    calculateScore();
  };
  return (
    <Pane flexGrow={0.2}>
      <MiddlePaneUI>
        <CompareButton type="submit" onClick={handleClick}> Compare </CompareButton>
        <StatusContainer>{status}</StatusContainer>
      </MiddlePaneUI>
    </Pane>
  );
};

MiddlePane.propTypes = {

};

export default MiddlePane;
