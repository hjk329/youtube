import React from 'react';
import styled from 'styled-components';

const RatioBox = ({
  width, height, children, contain,
}) => (
  <Container style={{ paddingTop: `${(height / width) * 100}%` }}>
    <Inner>
      {children}
    </Inner>
  </Container>
)

const Container = styled.div`
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: #eee;

  img,
  video,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: ${(p) => (p.contain ? 'contain' : 'cover')};
  }
`;
export default RatioBox;
