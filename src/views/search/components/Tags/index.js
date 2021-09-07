import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Tags = () => {
  const results = useSelector((state) => state.search.results)
  const tags = results.map((item) => item.videoInfo.snippet.tags)
  return (
    <Container>
      {
        tags.map((item) => <Tag>{item}</Tag>)
      }
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 8px;

`;

const Col = styled.div`

`;

const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #606060;
`;
export default Tags;
