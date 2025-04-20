
import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Gallery from '@/components/ui/Gallery';
import ImageTextSection from '@/components/ui/ImageTextSection';
import { colors, fonts, fontSizes, fontWeights, spacing, borderRadius, media } from '@/styles/constants-styles';
import styled from 'styled-components';

// Styled components
const HeroSection = styled.section`
  position: relative;
  background-color: ${colors.backgroundLight};
  padding: ${spacing[16]} ${spacing[4]} ${spacing[24]} ${spacing[4]};
  
  ${media.md} {
    padding: ${spacing[24]} ${spacing[8]};
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: ${fonts.serif};
  font-size: ${fontSizes['4xl']};
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
  margin-bottom: ${spacing[6]};
  
  ${media.md} {
    font-size: ${fontSizes['5xl']};
  }
  
  ${media.lg} {
    font-size: ${fontSizes['6xl']};
  }
`;

const HeroDescription = styled.p`
  color: ${colors.textSecondary};
  font-size: ${fontSizes.lg};
  max-width: 768px;
  margin-bottom: ${spacing[8]};
  
  ${media.md} {
    font-size: ${fontSizes.xl};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  
  ${media.sm} {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: ${spacing[3]} ${spacing[6]};
  background-color: ${colors.primary};
  color: white;
  border-radius: ${borderRadius.md};
  font-weight: ${fontWeights.medium};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: ${spacing[3]} ${spacing[6]};
  background-color: white;
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: ${borderRadius.md};
  font-weight: ${fontWeights.medium};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.backgroundLight};
  }
`;

const SectionContainer = styled.section`
  padding: ${spacing[16]} ${spacing[4]};
`;

const SectionWhite = styled(SectionContainer)`
  background-color: white;
`;

const SectionLight = styled(SectionContainer)`
  background-color: ${colors.backgroundLight};
`;

const SectionTitle = styled.h2`
  font-family: ${fonts.serif};
  font-size: ${fontSizes['3xl']};
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
  text-align: center;
  margin-bottom: ${spacing[10]};
`;

const SectionContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing[8]};
  
  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: ${spacing[6]};
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: ${fontSizes['4xl']};
  margin-bottom: ${spacing[4]};
`;

const FeatureTitle = styled.h3`
  font-family: ${fonts.serif};
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.semibold};
  color: ${colors.textPrimary};
  margin-bottom: ${spacing[2]};
`;

const FeatureDescription = styled.p`
  color: ${colors.textSecondary};
`;

const CTASection = styled.section`
  background-color: ${colors.primary};
  color: white;
  padding: ${spacing[16]} ${spacing[4]};
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: ${fonts.serif};
  font-size: ${fontSizes['3xl']};
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spacing[6]};
`;

const CTADescription = styled.p`
  font-size: ${fontSizes.lg};
  max-width: 640px;
  margin: 0 auto ${spacing[8]} auto;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: ${spacing[3]} ${spacing[8]};
  background-color: white;
  color: ${colors.primary};
  border-radius: ${borderRadius.md};
  font-weight: ${fontWeights.medium};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.backgroundLight};
  }
`;

// Feature card component
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCardComponent: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <FeatureCard>
      <FeatureIcon>{icon}</FeatureIcon>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  );
};

const Home: React.FC = () => {
  // Demo images for the gallery
  const galleryImages = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Soluciones digitales para artesanos y comercios
          </HeroTitle>
          <HeroDescription>
            Impulsa tu negocio con una presencia online profesional, diseñada específicamente para valorar y mostrar tus productos artesanales.
          </HeroDescription>
          <ButtonGroup>
            <Link href="/products" passHref legacyBehavior>
              <PrimaryButton>Ver Productos</PrimaryButton>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <SecondaryButton>Contactar</SecondaryButton>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* Gallery Section */}
      <SectionWhite>
        <SectionContent>
          <SectionTitle>
            Nuestros trabajos destacados
          </SectionTitle>
          <Gallery images={galleryImages} className="h-96" />
        </SectionContent>
      </SectionWhite>

      {/* Features Section */}
      <SectionLight>
        <SectionContent>
          <SectionTitle>
            ¿Por qué elegirnos?
          </SectionTitle>
          <FeatureGrid>
            <FeatureCardComponent
              icon="📱"
              title="Diseño Responsive"
              description="Nuestras aplicaciones se adaptan perfectamente a cualquier dispositivo, desde móviles hasta ordenadores de escritorio."
            />
            <FeatureCardComponent
              icon="🛒"
              title="Catálogo de Productos"
              description="Muestra tus productos con estilo, permitiendo a tus clientes explorar fácilmente tu catálogo completo."
            />
            <FeatureCardComponent
              icon="🔒"
              title="Seguridad Integrada"
              description="Protección avanzada para tu sitio con medidas como reCAPTCHA para prevenir spam y abusos."
            />
          </FeatureGrid>
        </SectionContent>
      </SectionLight>

      {/* Image & Text Sections */}
      <ImageTextSection
        image="/images/about-preview.jpg"
        title="Artesanía con pasión"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui."
        imageLeft={true}
      />
      
      <ImageTextSection
        image="/images/contact-preview.jpg"
        title="Estamos para ayudarte"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id."
        imageLeft={false}
        className="background-color: white;"
      />

      {/* CTA Section */}
      <CTASection>
        <SectionContent>
          <CTATitle>
            ¿Listo para impulsar tu negocio?
          </CTATitle>
          <CTADescription>
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a crear una presencia online que resalte la calidad de tus productos artesanales.
          </CTADescription>
          <Link href="/contact" passHref legacyBehavior>
            <CTAButton>Solicita información</CTAButton>
          </Link>
        </SectionContent>
      </CTASection>
    </Layout>
  );
};

export default Home;
