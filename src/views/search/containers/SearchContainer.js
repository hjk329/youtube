import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import qs from 'qs';

import { searchVideos, setSearchVideos } from '../redux/slice';
import SearchDetail from '../components/SearchDetail';
import { useIntersection } from '../../../hooks/useIntersection';
import { timeSort } from '../components/Filter';

const SearchContainer = () => {
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
      publishedAfter: timeSort[publishedAfter],
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
    <Container>
      <SearchDetail results={searchResults} />
      <Sentinel ref={sentinelRef} />
    </Container>
  )
}

const Container = styled.div`

`;

const Sentinel = styled.div`
  height: 1px;
  pointer-events: none;
`;
export default SearchContainer;
