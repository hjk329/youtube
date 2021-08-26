import React from 'react';
import styled from 'styled-components';

const IosLoader = () => (
  <Container>
    <Icon>
      <div className="spinner">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </Icon>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  .spinner {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .spinner span {
    display: block;
    transform-origin: 32px 32px;
    animation: spin 1.2s linear infinite;
  }

  .spinner span:after {
    border-radius: 20%;
    background-color: #000;
    content: " ";
    display: block;
    height: 14px;
    width: 5px;
    position: absolute;
    left: 30px;
    top: 5px;
  }

  .spinner span:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  .spinner span:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  .spinner span:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  .spinner span:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  .spinner span:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  .spinner span:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  .spinner span:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  .spinner span:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  .spinner span:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  .spinner span:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  .spinner span:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }

  .spinner span:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes spin {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

`;
export default IosLoader;
