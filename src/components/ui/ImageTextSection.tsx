
import React from 'react';
import styled from 'styled-components';
import { colors, spacing, borderRadius, shadows, media } from '@/styles/constants-styles';

interface ImageTextSectionProps {
  image: string;
  title: string;
  text: string | React.ReactNode;
  imageLeft?: boolean;
  className?: string;
}

const SectionContainer = styled.section<{ className?: string }>`
  padding: ${spacing[12]} 0;
  ${props => props.className};
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing[4]};
`;

const Grid = styled.div<{ imageLeft: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing[8]};
  
  ${media.md} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const ImageContainer = styled.div<{ imageLeft: boolean }>`
  order: 2;
  
  ${media.md} {
    order: ${props => props.imageLeft ? 1 : 2};
  }
  
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius.lg};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: ${shadows.lg};
  }
`;

const TextContainer = styled.div<{ imageLeft: boolean }>`
  order: 1;
  
  ${media.md} {
    order: ${props => props.imageLeft ? 2 : 1};
  }
`;

const Title = styled.h2`
  font-family: 'Times New Roman', serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  margin-bottom: ${spacing[4]};
`;

const TextContent = styled.div`
  color: ${colors.textSecondary};
  line-height: 1.7;
  
  p {
    margin-bottom: ${spacing[4]};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  image,
  title,
  text,
  imageLeft = true,
  className,
}) => {
  return (
    <SectionContainer className={className}>
      <SectionContent>
        <Grid imageLeft={imageLeft}>
          <ImageContainer imageLeft={imageLeft}>
            <Image src={image} alt={title} />
          </ImageContainer>
          
          <TextContainer imageLeft={imageLeft}>
            <Title>{title}</Title>
            {typeof text === 'string' ? (
              <TextContent>
                <p>{text}</p>
              </TextContent>
            ) : (
              <TextContent>
                {text}
              </TextContent>
            )}
          </TextContainer>
        </Grid>
      </SectionContent>
    </SectionContainer>
  );
};

export default ImageTextSection;
