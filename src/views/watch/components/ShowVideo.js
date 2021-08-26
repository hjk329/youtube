import React from 'react';
import styled from 'styled-components';

const ShowVideo = ({ id }) => (
  <Container>
    <Inner>
      <iframe src={`https://www.youtube.com/embed/${id}`} title="video" frameBorder="0" />
    </Inner>
  </Container>
)

const Container = styled.div`

`;

const Inner = styled.div`
    iframe {
      
    }
`;
export default ShowVideo;
