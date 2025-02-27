import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
`;

const Header1 = styled.a`
    text-align: center;
    color: #36476D;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
`;

const Logo = styled.img`
    width: 16rem;
    height: auto;
    padding-left: 4.5rem;
    padding-top: 3.5rem;
`;

const Banner = () => {
  return (
    <>
      <Container>
        <Logo src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="Spectator Logo" />
        <Header1>
            Spectator's Sources
        </Header1>
      </Container>
    </>
  );
};

export default Banner;