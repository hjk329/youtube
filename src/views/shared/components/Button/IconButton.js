import React from 'react';
import styled from 'styled-components';

const IconButton = ({icon, text, size}) => {
    return (
        <Container size={size}>
            {icon}
            {text && <Text>{text}</Text>}
        </Container>
    )
}

const Container = styled.div`
  svg {
    width: ${p => p.size ?? 20}px;
    height: ${p => p.size ?? 20}px;
  }
`;

const Text = styled.div`

`;
export default IconButton;