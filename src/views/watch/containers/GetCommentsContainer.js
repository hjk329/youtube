import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getComments, setComments } from '../redux/slice';
import { useIntersection } from '../../../hooks/useIntersection';
import Comments from '../components/VideoDetail/Comments';

const GetCommentsContainer = () => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.watch.comments.items)
  const videoId = useSelector((state) => state.watch.result[0].id)
  const nextPageToken = useSelector((state) => state.watch.comments.nextPageToken)

  const [sentinelRef, inView] = useIntersection()
  const [pageToken, setPageToken] = useState(nextPageToken)
  const displayComments = () => {
    dispatch(getComments({
      part: 'snippet, id',
      videoId,
      order: 'relevance',
      pageToken,
    }))
  }
  useEffect(() => {
    displayComments()
  }, [pageToken, videoId])
  useEffect(() => {
    dispatch(setComments({
      comments: [],
    }))
  }, [videoId])
  useEffect(() => {
    if (inView) {
      setPageToken(nextPageToken)
    }
  }, [inView])
  return (
    <Container>
      <Comments comments={comments} />
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
export default GetCommentsContainer;
