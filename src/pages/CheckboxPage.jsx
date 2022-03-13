import React from 'react';
import styled from 'styled-components';
import Checkbox from '../components/Checkbox';
import { fruitData } from '../data/fruit';

function CheckboxPage () {
  return (
    <main>
    <StyledH1>좋아하는 과일을 골라주세요.</StyledH1>
    <form>
      <StyledFieldset>
        {fruitData.map((item) => (
          <Checkbox key={item.id} text={item.text} />
        ))}
      </StyledFieldset>
    </form>
  </main>
  )
}

export default CheckboxPage;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 10rem;
  padding: 1.5rem;
  border: 2px solid gainsboro;
  border-radius: 0.5rem;
`;

const StyledH1 = styled.h1`
  font-size: 1.25rem;
`;
