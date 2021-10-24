import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMediaMatch } from 'rooks';
import { useLocation } from 'react-router-dom';

const SidebarGuide = () => {
  const normalSidebar = useSelector((state) => state.app.normalSidebar)
  const smallScreen = useMediaMatch('(max-width: 1000px');
  const mobileScreen = useMediaMatch('(max-width: 768px');
  const location = useLocation()

  if (mobileScreen || location.pathname.startsWith('/watch/')) return null;

  return (
    <Container>
      {
        // eslint-disable-next-line no-nested-ternary
        smallScreen
          ? <ShortcutGuide />
          : normalSidebar
            ? <NormalGuide />
            : <ShortcutGuide />
      }
    </Container>
  )
}

const Container = styled.div`
  flex-shrink: 0;
`;

const ShortcutGuide = styled.div`
  width: 72px;
`;

const NormalGuide = styled.div`
  width: 240px;
`;
export default SidebarGuide;
