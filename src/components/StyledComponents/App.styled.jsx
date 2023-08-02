import { styled } from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 30px auto 0;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: relative;
  background: #ffffff82;

  /*The background extends to the outside edge of the padding. No background is drawn beneath the border.*/
  background-clip: padding-box;

  border: solid 8px transparent;
  border-radius: 0.8rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -8px; /* same as border width */
    border-radius: inherit; /* inherit container box's radius */
    background: linear-gradient(to left, turquoise, greenyellow);
  }
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;
const SecondaryTitle = styled.h2`
  color: #333;
  text-align: center;
`;
export { Container, Title, SecondaryTitle };
