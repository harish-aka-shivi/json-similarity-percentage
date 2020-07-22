/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import LeftPane from './leftPane';
import RightPane from './rightPane';
import MiddlePane from './middlePane';

const PaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Home = () => (
  <PaneContainer>
    <LeftPane key={1} />
    <MiddlePane key={2} />
    <RightPane key={3} />
  </PaneContainer>
);

export default Home;
