import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import RelatedVideos from '../components/VideoDetail/RelatedVideos';
import { getPlaylists } from '../redux/slice';

const RelatedVideosContainer = ({ id }) => {
  const result = useSelector((state) => state.watch.playlist)
  console.log(result)
  const dispatch = useDispatch()
  const getPlaylist = () => {
    dispatch(getPlaylists({
      part: 'snippet',
      id,
    }))
  }
  useEffect(() => {
    getPlaylist()
  }, [])
  return (
    <Container>
      <RelatedVideos />
    </Container>
  )
}

const Container = styled.div`

`;
export default RelatedVideosContainer;
