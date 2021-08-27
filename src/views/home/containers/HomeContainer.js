import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideos } from '../redux/slice';
import VideoList from '../components/List/VideoList';
import Visual from '../components/Visual';
import {
  Desktop, Mobile, Tablet, WideDesktop,
} from '../../../hooks/mediaQuery';
import WideDesktopLayout from '../../shared/components/Layout/WideDesktopLayout';
import DesktopLayout from '../../shared/components/Layout/DesktopLayout';
import { useIntersection } from '../../../hooks/useIntersection';
import IosLoader from '../../shared/components/Loader/IosLoader';
import HeaderContainer from '../../shared/containers/HeaderContainer';

const HomeContainer = () => {
  const dispatch = useDispatch()

  const video = useSelector((state) => state.home.video)
  const nextPageToken = useSelector((state) => state.home.nextToken)

  const getVideo = () => {
    dispatch(getVideos({
      part: 'snippet, statistics, id, contentDetails',
      chart: 'mostPopular',
      maxResults: '16',
      regionCode: 'KR',
      pageToken: nextPageToken,
    }))
  }

  const [pageToken, setPageToken] = useState(nextPageToken)

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
    <Container>
      <HeaderContainer />
      <WideDesktop>
        <WideDesktopLayout>
          {
            showVisual
            && <Visual onClose={onClose} />
          }
          <VideoList data={video} />
          <Sentinel ref={sentinelRef} />
          {
            inView && <IosLoader />
          }
        </WideDesktopLayout>
      </WideDesktop>
      <Desktop>
        <DesktopLayout>
          {
            showVisual
            && <Visual onClose={onClose} />
          }
          <VideoList data={video} />
          <Sentinel ref={sentinelRef} />
          {
            inView && <IosLoader />
          }
        </DesktopLayout>
      </Desktop>
      <Tablet>
        <DesktopLayout>
          {
            showVisual
            && <Visual onClose={onClose} />
          }
          <VideoList data={video} />
          {
            inView && <IosLoader />
          }
        </DesktopLayout>
      </Tablet>
      <Mobile>
        {
          showVisual
          && <Visual onClose={onClose} />
        }
        <VideoList data={video} />
        <Sentinel ref={sentinelRef} />
        {
          inView && <IosLoader />
        }
      </Mobile>

    </Container>
  )
}

const Container = styled.div`
  position: relative;

`;

const Sentinel = styled.div`
  height: 1px;
  pointer-events: none;
`;
export default HomeContainer;
