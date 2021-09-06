import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import RelatedVideosList from '../components/List/RelatedVideosList';
import { getRelatedVideos } from '../redux/slice';

const RelatedVideosContainer = ({ info }) => {
  const videoCategoryId = info?.snippet?.categoryId
  const dispatch = useDispatch()
  const relatedVideos = useSelector((state) => state.watch.related)
  const getPlaylist = () => {
    dispatch(getRelatedVideos({
      part: 'snippet, topicDetails',
      chart: 'mostPopular',
      videoCategoryId,
      maxResults: 50,
      regionCode: 'KR',
    }))
  }
  useEffect(() => {
    getPlaylist()
  }, [videoCategoryId])
  return (
    <Container>
      <RelatedVideosList video={relatedVideos} />
    </Container>
  )
}

const Container = styled.div`

`;
export default RelatedVideosContainer;
