import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all';

const ScrollMenu = ({ data = [], children }) => {
  const ref = useRef(null)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [scrollMax, setScrollMax] = useState(1)
  useEffect(() => {
    if (ref.current) {
      setScrollLeft(ref.current.scrollLeft)
      setScrollMax(ref.current.scrollWidth - ref.current.clientWidth)
    }
  }, [data])
  const start = scrollLeft > 0
  const end = scrollMax <= scrollLeft
  const onScroll = (e) => {
    setScrollLeft(e.target.scrollLeft)
  }
  const onClickLeft = () => {
    ref.current.scrollLeft = Math.max(0, ref.current.scrollLeft - 300)
  }
  const onClickRight = () => {
    ref.current.scrollLeft = Math.min(scrollMax, ref.current.scrollLeft + 300)
  }
  return (

    <Container>
      {start
        && (
          <Button onClick={onClickLeft}>
            <MdKeyboardArrowLeft />
          </Button>
        )}
      <Track ref={ref} onScroll={onScroll}>
        {
          data.map((item, index) => children(item))
        }
      </Track>
      {
        end
        && (
          <Button onClick={onClickRight}>
            <MdKeyboardArrowRight />
          </Button>
        )
      }
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 58px;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    pointer-events: none;

  }

  &::before {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
    opacity: 0;
    transition: 0.2s;
  }

  &.start::before {
    opacity: 1;
  }

  &::after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
    transition: 0.2s;
  }

  &.end::after {
    opacity: 0;
  }
`;

const Track = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Button = styled.div`
  height: 56px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;
export default ScrollMenu;
