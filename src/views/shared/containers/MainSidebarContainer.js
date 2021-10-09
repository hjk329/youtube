import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaMatch } from 'rooks';

import Shortcuts from '../components/Sidebar/components/Shortcuts';
import Contents from '../components/Sidebar/components/contents';
import { handleNormalSidebar } from '../redux/slice';

const MainSidebarContainer = () => {
  const normalSidebar = useSelector((state) => state.app.normalSidebar)
  const location = useLocation()
  const smallScreen = useMediaMatch('(max-width: 1000px');
  const mobileScreen = useMediaMatch('(max-width: 768px');

  const dispatch = useDispatch()
  useEffect(() => {
    if (smallScreen) {
      dispatch(handleNormalSidebar(true))
    }
  }, [smallScreen])

  if (mobileScreen || location.pathname.startsWith('/watch/')) return null;
  return (
    <Container>
      {
        // eslint-disable-next-line no-nested-ternary
        smallScreen
          ? <Shortcuts />
          : normalSidebar
            ? <Contents />
            : <Shortcuts />
      }
    </Container>
  )
}

const Container = styled.div`
  padding-top: 50px;
`;
export default MainSidebarContainer;
