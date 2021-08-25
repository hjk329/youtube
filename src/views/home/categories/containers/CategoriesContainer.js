import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Category from '../components/Category';
import { getCategories } from '../redux/slice';
import WideDesktopLayout from '../../../shared/components/Layout/WideDesktopLayout';
import { WideDesktop } from '../../../../hooks/mediaQuery';

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
      <WideDesktop>
        <WideDesktopLayout>
          <Category categories={categories.items} />
        </WideDesktopLayout>
      </WideDesktop>
    </Container>
  )
}

const Container = styled.div`

`;
export default CategoriesContainer;
