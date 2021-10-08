import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import cn from 'classnames';
import qs from 'qs';

import { searchVideos, setSearchVideos } from '../redux/slice';
import SearchDetail from '../components/SearchDetail';
import { useIntersection } from '../../../hooks/useIntersection';
import Sidebar from '../../shared/components/Sidebar';
import Shortcuts from '../../shared/components/Sidebar/components/Shortcuts';

const SearchContainer = () => {
  const shortcutState = useSelector((state) => state.app.shortcuts)
  const match = useRouteMatch()
  const { query } = match.params
  const searchResults = useSelector((state) => state.search.results)
  const nextPageToken = useSelector((state) => state.search.nextPageToken)
  const [pageToken, setPageToken] = useState(nextPageToken || '')
  const [sentinelRef, inView] = useIntersection()

  const dispatch = useDispatch()
  const location = useLocation();
  const { publishedAfter, order, type } = qs.parse(location.search, { ignoreQueryPrefix: true })

  const searchVideo = () => {
    dispatch(searchVideos({
      part: 'snippet, id',
      q: query,
      maxResults: 5,
      regionCode: 'KR',
      pageToken,
      publishedAfter,
      order,
      type,
    }))
  }
  useEffect(() => {
    searchVideo()
  }, [query, pageToken, publishedAfter, order, type])

  useEffect(() => {
    if (inView) {
      setPageToken(nextPageToken)
    }
  }, [inView])

  useEffect(() => {
    dispatch(setSearchVideos(
      [],
    ))
  }, [query, publishedAfter, order, type])

  return (
    <Container className={cn({ shortcutState })}>
      {
        !shortcutState ? <Sidebar /> : <Shortcuts />
      }
      <SearchDetail results={searchResults} />
      <Sentinel ref={sentinelRef} />
    </Container>
  )
}

const Container = styled.div`
  padding-left: 260px;

  &.shortcutState {
    padding-left: 72px;
  }
`;

const Sentinel = styled.div`
  height: 1px;
  pointer-events: none;
`;
export default SearchContainer;
