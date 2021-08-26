import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/all';

import { IconLogo } from '../../../../../icons';
import SearchBox from '../SearchBox';
import Nav from './Nav';
import Shortcuts from '../../Sidebar/components/Shortcuts';
import { DefaultButton } from '../../Button/DefaultButton';

const GnbCallingAnimationSidebar = ({ getShortcuts, shortcutsState }) => (
  <Container>
    <Logo>
      <Button className="side" onClick={getShortcuts}>
        {' '}
        <MdMenu />
        {' '}
      </Button>
      <Button className="logo">
        {' '}
        <IconLogo />
        {' '}
      </Button>
    </Logo>
    <SearchBox />
    <Nav />
    {
      shortcutsState && <Shortcuts />
    }
  </Container>
)

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`;

const Button = styled(DefaultButton)`
  cursor: pointer;

  &.side {
    padding: 8px;

    svg {
      width: 24px;
      height: 24px;
      fill: rgb(96, 96, 96);
    }
  }

  &.logo {
    padding: 18px 14px 18px 16px;
  }

`;
export default GnbCallingAnimationSidebar;
