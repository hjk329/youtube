import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import RelatedVideosList from '../components/List/RelatedVideosList';
import { getRelatedVideos, setRelatedVideos } from '../redux/slice';
import { useIntersection } from '../../../hooks/useIntersection';
import IosLoader from '../../shared/components/Loader/IosLoader';

const RelatedVideosContainer = ({ info }) => {
  const videoCategoryId = info?.snippet?.categoryId
  const videoId = info.id
  const dispatch = useDispatch()
  const relatedVideos = useSelector((state) => state.watch.related.items)
  const nextPageToken = useSelector((state) => state.watch.related.nextPageToken)
  const [pageToken, setPageToken] = useState(nextPageToken)

  const getRelatedVideo = () => {
    dispatch(getRelatedVideos({
      part: 'snippet, statistics',
      chart: 'mostPopular',
      videoCategoryId,
      maxResults: 10,
      regionCode: 'KR',
      pageToken,
    }))
  }
  useEffect(() => {
    getRelatedVideo()
  }, [videoCategoryId, videoId, pageToken])

  useEffect(() => {
    dispatch(setRelatedVideos({
      related: {},
    }))
  }, [videoId])

  const [sentinelRef, inView] = useIntersection()

  useEffect(() => {
    if (inView) {
      setPageToken(nextPageToken)
    }
  }, [inView])

  return (
    <Container>
      <RelatedVideosList video={relatedVideos} />
      <Sentinel ref={sentinelRef} />
      {
        inView
          && <IosLoader />
      }
    </Container>
  )
}

const Container = styled.div`

`;

const Sentinel = styled.div`
    
`;
export default RelatedVideosContainer;
