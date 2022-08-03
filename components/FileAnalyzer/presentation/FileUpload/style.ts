import styled from 'styled-components';

export const FileWrapper = styled.label`
  width: 200px;
  height: 200px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.6rem;
    padding-bottom: 1rem;
    text-align: center;
    color: #fb6775;
    font-weight: 500;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;
