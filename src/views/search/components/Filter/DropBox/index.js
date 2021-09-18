import React from 'react';
import styled from 'styled-components';

const DropBox = ({ menu = [] }) => (
  <Container>
    {
      menu.map((item) => item)
    }
  </Container>
)

const Container = styled.div`
  padding-right: 32px;
`;
export default DropBox;
