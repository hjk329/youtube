import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { getVideos } from '../redux/slice';
import VideoList from '../components/List/VideoList';
import Visual from '../components/Visual';
import { useMQ } from '../../../hooks/mediaQuery';
import { useIntersection } from '../../../hooks/useIntersection';
import IosLoader from '../../shared/components/Loader/IosLoader';

const HomeContainer = () => {
  const dispatch = useDispatch()

  const video = useSelector((state) => state.home.video)
  const nextPageToken = useSelector((state) => state.home.nextToken)
  const shortcutState = useSelector((state) => state.app.shortcuts)

  const [pageToken, setPageToken] = useState(nextPageToken)
  const {
    isWideDesktop,
    isDesktop,
    isTablet,
    isMobile,
    isNotMobile,
  } = useMQ()

  const getVideo = () => {
    dispatch(getVideos({
      part: 'snippet, statistics, id, contentDetails',
      chart: 'mostPopular',
      maxResults: '16',
      regionCode: 'KR',
      pageToken,
    }))
  }

  useEffect(() => {
    getVideo()
  }, [pageToken])

  const [showVisual, setShowVisual] = useState(true)
  const onClose = () => {
    setShowVisual(false)
  }

  const [sentinelRef, inView] = useIntersection()

  useEffect(() => {
    if (inView && video.length > 0) {
      setPageToken(nextPageToken)
    }
  }, [inView])

  return (
    <Container className={cn({
      isWideDesktop,
      isDesktop,
      isTablet,
      isMobile,
      isNotMobile,
      shortcutState,
    })}
    >
      {
        showVisual
            && <Visual onClose={onClose} />
      }
      <VideoList data={video} />
      <Sentinel ref={sentinelRef} />
      {
        inView && <IosLoader />
      }

    </Container>
  )
}

const Container = styled.div`
  &.isWideDesktop {
    padding: 56px 0 0 240px;
  }

  &.isDesktop {
    padding-left: 72px;
  }
  
  &.shortcutState {
    padding-left: 72px;
  }
`;

const Sentinel = styled.div`
  height: 1px;
  pointer-events: none;
`;
export default HomeContainer;
