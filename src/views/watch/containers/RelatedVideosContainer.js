import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { useWindowSize } from 'rooks';

import RelatedVideosList from '../components/List/RelatedVideosList';
import { getRelatedVideos, setRelatedVideos } from '../redux/slice';
import { useIntersection } from '../../../hooks/useIntersection';
import IosLoader from '../../shared/components/Loader/IosLoader';
import { StyledButton } from '../../shared/components/Button/DefaultButton';

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

  const { innerWidth } = useWindowSize();
  const small = innerWidth <= 1000

  useEffect(() => {
    if (inView && !small) {
      setPageToken(nextPageToken)
    }
  }, [inView])

  const nextPage = () => {
    setPageToken(nextPageToken)
  }

  return (
    <Container>
      <RelatedVideosList video={relatedVideos} />
      <Sentinel ref={sentinelRef} />
      {
        small ? <Button onClick={nextPage}>더보기</Button> : <IosLoader />
      }
    </Container>
  )
}

const Container = styled.div`

`;

const Sentinel = styled.div`
  height: 1px;
  pointer-events: none;
`;

const Button = styled(StyledButton)`
  height: 37px;
  padding: 9px 15px;
  width: 100%;

`;
export default RelatedVideosContainer;
