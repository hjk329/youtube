import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { showShortcuts } from '../redux/slice';
import GnbCallingWideSidebar from '../components/Header/Gnb/GnbCallingWideSidebar';

const ShortcutsContainer = () => {
  const dispatch = useDispatch()
  const getShortcuts = () => {
    dispatch(showShortcuts())
  }
  const shortcutsState = useSelector((state) => state.app.shortcuts)
  return (
    <Container>
      <GnbCallingWideSidebar shortcutsState={shortcutsState} getShortcuts={getShortcuts} />
    </Container>
  )
}

const Container = styled.div`

`;
export default ShortcutsContainer;
