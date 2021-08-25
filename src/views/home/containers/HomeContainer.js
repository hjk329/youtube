import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideos } from '../redux/slice';
import VideoList from '../../shared/components/List/VideoList';
import Visual from '../components/Visual';
import { Desktop, WideDesktop } from '../../../hooks/mediaQuery';
import WideDesktopLayout from '../../shared/components/Layout/WideDesktopLayout';
import DesktopLayout from '../../shared/components/Layout/DesktopLayout';

const HomeContainer = () => {
  const dispatch = useDispatch()

  const video = useSelector((state) => state.home.video)

  const getVideo = () => {
    dispatch(getVideos({
      part: 'snippet, statistics, id, contentDetails',
      chart: 'mostPopular',
      maxResults: '8',
      regionCode: 'KR',
    }))
  }
  useEffect(() => {
    getVideo()
  }, [])
  const [showVisual, setShowVisual] = useState(true)
  const onClose = () => {
    setShowVisual(false)
  }
  const shortcutsState = useSelector((state) => state.app.shortcuts)

  return (
    <Container>
      <WideDesktop>
        <WideDesktopLayout>
          {
            showVisual
            && <Visual onClose={onClose} />
          }
          <VideoList data={video} />
        </WideDesktopLayout>
      </WideDesktop>
      <Desktop>
        <DesktopLayout>
          {
            showVisual
                  && <Visual onClose={onClose} />
          }
          <VideoList data={video} />
        </DesktopLayout>
      </Desktop>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export default HomeContainer;
