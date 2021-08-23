import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../redux/slice';

const HomeContainer = () => {
  const dispatch = useDispatch()

  const video = useSelector((state) => state.home.video)

  const getVideos = () => {
    dispatch(Action.Creators.getVideos({
      part: 'snippet',
      chart: 'mostPopular',
    }))
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <Container>
      Home
    </Container>
  )
}

const Container = styled.div`
`;
export default HomeContainer;
