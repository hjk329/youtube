import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import RelatedVideosList from '../components/List/RelatedVideosList';
import { getRelatedVideos, setRelatedVideos } from '../redux/slice';
import { useIntersection } from '../../../hooks/useIntersection';

const RelatedVideosContainer = ({ info }) => {
  const videoCategoryId = info?.snippet?.categoryId
  const videoId = info.snippet.id
  const dispatch = useDispatch()
  const relatedVideos = useSelector((state) => state.watch.related)
  const getRelatedVideo = () => {
    dispatch(getRelatedVideos({
      part: 'snippet, statistics',
      chart: 'mostPopular',
      videoCategoryId,
      maxResults: 10,
      regionCode: 'KR',
    }))
  }
  useEffect(() => {
    getRelatedVideo()
  }, [videoCategoryId, videoId])

  const [sentinelRef, inView] = useIntersection()

  return (
    <Container>
      <RelatedVideosList video={relatedVideos} />
      <Sentinel ref={sentinelRef} />
    </Container>
  )
}

const Container = styled.div`

`;

const Sentinel = styled.div`
    
`;
export default RelatedVideosContainer;
