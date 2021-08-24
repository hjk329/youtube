import styled from 'styled-components';

export const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: none;
  cursor: pointer;
  user-select: none;
  outline: none;
`;

export const StyledButton = styled(DefaultButton)`
  color: rgb(6, 95, 212);
  font-size: 14px;
  font-weight: 500;

  border: 1px solid rgb(6, 95, 212);
  border-radius: 2px;
`;
