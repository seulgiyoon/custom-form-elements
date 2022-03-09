import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  /* label::before로 custom checkbox를 설정한 경우를 위한 스타일링 */
  /* mouse click시 focus 스타일링 */
  .js-focus-visible input {
    &:focus:not(.focus-visible) + label {
      &:before {
        outline: none;
      }
    }
  }

  /* 키보드 focus 스타일링 */
  .js-focus-visible input.focus-visible {
     &:focus + label {
       &:before {
        outline: 2px solid blue;
       }
     }
  }
`;

export default GlobalStyles;
