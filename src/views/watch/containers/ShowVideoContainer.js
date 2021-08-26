import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { getVideos } from '../../home/redux/slice';
import RatioBox from '../../shared/components/RatioBox';
import ShowVideo from '../components/ShowVideo';

const ShowVideoContainer = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const getVideo = () => {
    dispatch(getVideos({
      part: 'snippet, statistics, id, contentDetails',
      id,
    }))
  }

  useEffect(() => {
    getVideo()
  }, [id])

  return (
    <Container>
      <ShowVideo id={id} />
    </Container>
  )
}

const Container = styled.div`

`;

export default ShowVideoContainer;
