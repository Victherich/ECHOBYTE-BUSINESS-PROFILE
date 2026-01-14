import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa"; // for the play button

const FounderWrapper = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #cbd5f5;
  max-width: 700px;
  margin-bottom: 40px;
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 12px;
    display: block;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    color: #2563eb;
    opacity: 0.9;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 1;
    }
  }
`;

const VideoPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  iframe {
    width: 90%;
    max-width: 900px;
    height: 500px;
    border: none;
    border-radius: 12px;

    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
`;

export default function MeetTheFounder({ videoUrl, thumbnail }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FounderWrapper id="founder">
      <Title>Meet the Founder</Title>
      <Subtitle>Hear from our founder about our mission, vision, and journey in building innovative digital solutions.</Subtitle>

      <VideoThumbnail onClick={() => setIsOpen(true)}>
        <img src={thumbnail} alt="Founder Video Thumbnail" />
        <FaPlay />
      </VideoThumbnail>

      {isOpen && (
        <VideoPopup>
          <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
          <iframe
            src={videoUrl}
            title="Founder Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoPopup>
      )}
    </FounderWrapper>
  );
}
