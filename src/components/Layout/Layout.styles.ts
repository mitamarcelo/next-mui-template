import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3e505b;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LogoWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 80vh;
  }
`;

export const ContentContainer = styled.div`
  height: 100vh;
  width: 80vw;
  position: absolute;
  top: 0;
  left: 10vw;
  background-color: rgba(255, 255, 255, 0.3);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
