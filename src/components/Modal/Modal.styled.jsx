import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: #fff;
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;
