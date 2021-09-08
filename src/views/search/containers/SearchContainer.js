import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { searchVideos } from '../redux/slice';
import SearchDetail from '../components/SearchDetail';
import { showShortcuts } from '../../shared/redux/slice';

const SearchContainer = () => {
  const match = useRouteMatch()
  const { query } = match.params
  const searchResults = useSelector((state) => state.search.results)
  const shortcutState = useSelector((state) => state.app.shortcuts)

  const dispatch = useDispatch()

  const searchVideo = () => {
    dispatch(searchVideos({
      part: 'snippet, id',
      q: query,
      maxResults: 2,
      regionCode: 'KR',
    }))
  }
  useEffect(() => {
    searchVideo()
  }, [query])
  return (
    <Container>
      <SearchDetail results={searchResults} />
    </Container>
  )
}

const Container = styled.div`

`;
export default SearchContainer;
