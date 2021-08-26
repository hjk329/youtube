import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { showAnimationSidebar } from '../redux/slice';
import GnbCallingAnimationSidebar from '../components/Header/Gnb/GnbCallingAnimationSidebar';

const AnimationSidebarContainer = () => {
  const dispatch = useDispatch()
  const getAnimationSidebar = () => {
    dispatch(showAnimationSidebar())
  }
  const animationSidebarStatus = useSelector((state) => state.app.animationSidebar)
  return (
    <Container>
      <GnbCallingAnimationSidebar getAnimationSidebar={getAnimationSidebar} animationSidebarStatus={animationSidebarStatus} />
    </Container>
  )
}

const Container = styled.div`

`;

export default AnimationSidebarContainer;
