import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 body * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, 
    system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
    'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button { 
    cursor: pointer;
  }

  .flex {
    display: flex;
  }

`;

export default GlobalStyles;
