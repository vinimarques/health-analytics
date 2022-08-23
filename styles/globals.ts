import { Colors } from '@constants/enums';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: 'Roboto';
  padding-top: 50px;
}

.swiper-pagination-bullet-active {
  background-color: ${Colors.RED} !important;
}
`;

export default GlobalStyle;
