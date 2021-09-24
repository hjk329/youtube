import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getChannelSection } from '../redux/slice';
import ChannelSectionList from '../components/ChannelSection/List';

const ChannelSectionContainer = () => {
  const channelItems = useSelector((state) => state.app.channelSection.items)
  const { channelId } = useParams()
  const dispatch = useDispatch()
  const getChannelSections = () => {
    dispatch(getChannelSection({
      part: 'snippet, id, contentDetails',
      channelId,
    }))
  }
  useEffect(() => {
    getChannelSections()
  }, [])
  return (
    <Container>
      <ChannelSectionList data={channelItems} />
    </Container>
  )
}

const Container = styled.div`

`;
export default ChannelSectionContainer;
