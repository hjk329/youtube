import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaMatch } from 'rooks';

import { IconLogo } from '../../../../../icons';
import SearchBox from '../SearchBox';
import Nav from './Nav';
import { handleDrawerSidebar, handleNormalSidebar } from '../../../redux/slice';

const Gnb = () => {
  const dispatch = useDispatch();
  const small = useMediaMatch('(max-width: 1000px)');
  const normalSidebar = useSelector((state) => state.app.normalSidebar)
  const drawerSidebar = useSelector((state) => state.app.drawerSidebar)
  const onClick = () => {
    if (small) {
      dispatch(handleDrawerSidebar(!drawerSidebar))
    } else {
      dispatch(handleNormalSidebar(!normalSidebar))
    }
  }
  return (
    <Container>
      <Logo>
        <Button className="side" onClick={onClick}>
          {' '}
          <MdMenu />
          {' '}
        </Button>
        <Button className="logo" to="/">
          {' '}
          <IconLogo />
          {' '}
        </Button>
      </Logo>
      <SearchBox />
      <Nav />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 16px;

`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`;

const Button = styled(Link)`
  display: block;
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
export default Gnb;
