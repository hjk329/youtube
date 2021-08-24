import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Category from '../components/Category';
import { getCategories } from '../redux/slice';

const CategoriesContainer = () => {
  const dispatch = useDispatch()
  const getCategory = () => {
    dispatch(getCategories({
      part: 'snippet',
      regionCode: 'KR',
    }))
  }
  useEffect(() => {
    getCategory()
  }, [])
  const categories = useSelector((state) => state.category.list)
  return (
    <Container>
      <Category categories={categories.items} />
    </Container>
  )
}

const Container = styled.div`

`;
export default CategoriesContainer;
