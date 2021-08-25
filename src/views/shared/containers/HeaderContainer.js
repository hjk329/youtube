import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import WideGnb from '../components/Header/Gnb/WideGnb';
import Shortcuts from '../components/Sidebar/components/Shortcuts';
import {
  Desktop, Mobile, Tablet, WideDesktop,
} from '../../../hooks/mediaQuery';
import Sidebar from '../components/Sidebar';
import NarrowGnb from '../components/Header/Gnb/NarrowGnb';

const HeaderContainer = () => {
  const shortcutsState = useSelector((state) => state.app.shortcuts)

  return (

    <Container>
      <WideDesktop>
        <WideGnb />
        {
          !shortcutsState
          && <Sidebar />
        }
      </WideDesktop>
      <Desktop>
        <NarrowGnb />
        <Shortcuts />
      </Desktop>
      <Tablet>
        <NarrowGnb />
        <Shortcuts />
      </Tablet>
    </Container>
  )
}

const Container = styled.div`

`;
export default HeaderContainer;
