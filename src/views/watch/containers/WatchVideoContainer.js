import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import { watchVideo } from '../redux/slice';
import VideoDetail from '../components/VideoDetail';

const WatchVideoContainer = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const info = useSelector((state) => state.watch.result[0])

  const videoItem = () => {
    dispatch(watchVideo({
      part: 'snippet, contentDetails, statistics',
      id,
    }))
  }

  useEffect(() => {
    videoItem()
  }, [id])

  if (_.isEmpty(info)) return null;

  return (
    <Container>
      <VideoDetail video={info} id={id} />
    </Container>
  )
}

const Container = styled.div`

`;

export default WatchVideoContainer;
