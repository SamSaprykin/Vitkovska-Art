import React from "react";
import styled from "styled-components";

const VideoComponent = ({ iframeUrl }) => {
  return (
    <WrapperIframe>
      <ContainerIframe>
        <StyledVideo
          autoplay={true}
          autoPlay
          muted
          loop
          playsInline
          className="responsive-iframe"
        >
          <source src={iframeUrl} type="video/mp4" />
          <source src={iframeUrl} type="video/ogg" />
          Your browser does not support the video tag.
        </StyledVideo>
      </ContainerIframe>
    </WrapperIframe>
  );
};

export default VideoComponent;

const ContainerIframe = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  padding-top: 56.25%;

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  border: none !important;
`;

const WrapperIframe = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
