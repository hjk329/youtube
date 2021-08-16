import React from 'react';
import styled from 'styled-components';


const IconButton = ({icon, text}) => {
    return (
        <Container>
            {icon}
            {text && <Text>{text}</Text>}
        </Container>
    )
}

const Container = styled.div`

`;

const Text = styled.div`

`;
export default IconButton;