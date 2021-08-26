import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import ShortcutsContainer from './ShorcutsContainer';
import Shortcuts from '../components/Sidebar/components/Shortcuts';
import {
  Desktop, Mobile, Tablet, WideDesktop,
} from '../../../hooks/mediaQuery';
import Sidebar from '../components/Sidebar';
import AnimationSidebarContainer from './AnimationSidebarContainer';

const HeaderContainer = () => {
  const shortcutsState = useSelector((state) => state.app.shortcuts)

  return (

    <Container>
      <WideDesktop>
        <ShortcutsContainer />
        {
          !shortcutsState
          && <Sidebar />
        }
      </WideDesktop>
      <Desktop>
        <AnimationSidebarContainer />
        <Shortcuts />
      </Desktop>
      <Tablet>
        <AnimationSidebarContainer />
        <Shortcuts />
      </Tablet>
      <Mobile>
        <AnimationSidebarContainer />
        <Shortcuts />
      </Mobile>
    </Container>
  )
}

const Container = styled.div`

`;
export default HeaderContainer;
