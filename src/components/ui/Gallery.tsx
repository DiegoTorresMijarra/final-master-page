
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors, borderRadius, shadows, transitions } from '@/styles/constants-styles';

interface GalleryProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  className?: string;
}

const GalleryContainer = styled.div<{ className?: string }>`
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius.lg};
  width: 100%;
  ${props => props.className};
`;

const GallerySlider = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-out;
  transform: translateX(-${props => props.translateX}%);
`;

const GalleryImage = styled.img`
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${colors.backgroundLight}CC;
  color: ${colors.textPrimary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: ${shadows.md};
  transition: ${transitions.default};
  
  &:hover {
    background-color: ${colors.backgroundLight};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? colors.primary : `${colors.backgroundLight}B3`};
  border: none;
  cursor: pointer;
  transition: ${transitions.default};
  
  &:hover {
    background-color: ${props => props.active ? colors.primary : colors.backgroundLight};
  }
`;

const Gallery: React.FC<GalleryProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide effect
  useEffect(() => {
    if (autoSlide) {
      const startTimer = () => {
        timerRef.current = setTimeout(goToNext, autoSlideInterval);
      };

      startTimer();

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [currentIndex, autoSlide, autoSlideInterval]);

  return (
    <GalleryContainer className={className}>
      <GallerySlider translateX={currentIndex * 100}>
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
          />
        ))}
      </GallerySlider>

      {/* Navigation arrows */}
      <PrevButton
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </PrevButton>
      <NextButton
        onClick={goToNext}
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </NextButton>

      {/* Dots indicator */}
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </GalleryContainer>
  );
};

export default Gallery;
