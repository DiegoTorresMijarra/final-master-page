
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { colors, fonts, fontSizes, fontWeights, spacing } from '@/styles/constants-styles';

const NotFoundContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${spacing[20]} ${spacing[4]};
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const ErrorCode = styled.h1`
  font-family: ${fonts.serif};
  font-size: ${fontSizes['6xl']};
  font-weight: ${fontWeights.bold};
  color: ${colors.primary};
  margin-bottom: ${spacing[6]};
`;

const ErrorTitle = styled.h2`
  font-family: ${fonts.serif};
  font-size: ${fontSizes['3xl']};
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
  margin-bottom: ${spacing[4]};
`;

const ErrorDescription = styled.p`
  font-size: ${fontSizes.lg};
  color: ${colors.textSecondary};
  margin-bottom: ${spacing[8]};
`;

const HomeButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${spacing[2]} ${spacing[4]};
  background-color: ${colors.primary};
  color: white;
  border-radius: 0.375rem;
  font-weight: ${fontWeights.medium};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${colors.primaryHover};
  }
  
  svg {
    margin-right: ${spacing[2]};
  }
`;

const NotFound: React.FC = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <ContentWrapper>
          <ErrorCode>404</ErrorCode>
          <ErrorTitle>Página no encontrada</ErrorTitle>
          <ErrorDescription>
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </ErrorDescription>
          <Link href="/" passHref legacyBehavior>
            <HomeButton>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Volver al inicio
            </HomeButton>
          </Link>
        </ContentWrapper>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFound;
