import 'focus-visible'; // use focus-visible library
import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import GlobalStyles from './GlobalStyles';

const fruitData = [
  { id: 0, text: '바나나' },
  { id: 1, text: '사과' },
  { id: 2, text: '키위' },
  { id: 3, text: '블루베리' },
  { id: 4, text: '단감' },
  { id: 5, text: '귤' },
];

function App() {
  return (
    <main>
      <GlobalStyles />
      <StyledH1>좋아하는 과일을 골라주세요.</StyledH1>
      <form>
        <StyledFieldset>
          {fruitData.map((item) => (
            <Checkbox key={item.id} text={item.text} />
          ))}
        </StyledFieldset>
      </form>
    </main>
  );
}

export default App;

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
