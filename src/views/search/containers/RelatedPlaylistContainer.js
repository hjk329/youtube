import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { getChannelSection } from '../redux/slice';

const RelatedPlaylistContainer = () => {
  const dispatch = useDispatch()
  const getRelatedPlaylist = () => {
    dispatch(getChannelSection({
      part: 'snippet',

    }))
  }
  return (
    <Container>
      RelatedPlaylistContainer
    </Container>
  )
}

const Container = styled.div`
  width: 385px;
  flex-shrink: 0;
`;
export default RelatedPlaylistContainer;
