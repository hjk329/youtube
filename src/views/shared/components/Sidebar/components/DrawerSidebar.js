import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaMatch } from 'rooks';
import cn from 'classnames';

import { handleDrawerSidebar } from '../../../redux/slice';
import AnimationSidebar from './contents/AnimationSidebar';

const DrawerSidebar = () => {
  const dispatch = useDispatch()
  const isActive = useSelector((state) => state.app.drawerSidebar)
  const smallScreen = useMediaMatch('(max-width: 1000px');

  const onClick = () => {
    dispatch(handleDrawerSidebar(false))
  }

  useEffect(() => {
    if (!smallScreen) {
      dispatch(handleDrawerSidebar(false))
    }
  }, [smallScreen])
  return (
    <Container className={cn({ isActive })}>
      <AnimationSidebar onClick={onClick} />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 240px;
  overflow-y: auto;
  border-right: 1px solid #000;
  top:0;
  left:0;
  bottom: 0;
  z-index: 1500;
  transform: translateX(-100%);
  transition: 0.4s;
  &.isActive {
    transform: none;
  }
`;
export default DrawerSidebar;
