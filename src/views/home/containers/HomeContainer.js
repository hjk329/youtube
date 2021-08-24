import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideos } from '../redux/slice';
import VideoList from '../../shared/components/List/VideoList';

const HomeContainer = () => {
  const dispatch = useDispatch()

  const video = useSelector((state) => state.home.video)

  const getVideo = () => {
    dispatch(getVideos({
      part: 'snippet, statistics, id, contentDetails',
      chart: 'mostPopular',
      maxResults: '8',
      regionCode: 'KR',
    }))
  }
  useEffect(() => {
    getVideo()
  }, [])
  return (
    <Container>
      <VideoList data={video} />
    </Container>
  )
}

const Container = styled.div`
`;
export default HomeContainer;
