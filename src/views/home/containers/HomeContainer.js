import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideos } from '../redux/slice';
import VideoList from '../../shared/components/List/VideoList';
import Visual from '../components/Visual';

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
  const [showVisual, setShowVisual] = useState(true)
  const onClose = () => {
    setShowVisual(false)
  }
  return (
    <Container>
      {
        showVisual
        && <Visual onClose={onClose} />
      }
      <VideoList data={video} />
    </Container>
  )
}

const Container = styled.div`
`;
export default HomeContainer;
