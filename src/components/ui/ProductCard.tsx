
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Product } from '@/types/models';
import { colors, fontSizes, fontWeights, fonts, transitions, borderRadius, shadows } from '@/styles/constants-styles';

interface ProductCardProps {
  product: Product;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.backgroundLight};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.lg};
  overflow: hidden;
  box-shadow: ${shadows.md};
  transition: ${transitions.default};
  
  &:hover {
    box-shadow: ${shadows.lg};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 208px; /* 52 * 4 */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${colors.primary};
  color: ${colors.textLight};
  font-size: ${fontSizes.xs};
  padding: 4px 8px;
  border-radius: 9999px;
`;

const ContentContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h3`
  font-family: ${fonts.serif};
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeights.semibold};
  color: ${colors.textPrimary};
  margin-bottom: 4px;
  transition: ${transitions.default};
  
  ${CardContainer}:hover & {
    color: ${colors.primary};
  }
`;

const ProductDescription = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.textSecondary};
  margin-bottom: 12px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const Price = styled.span`
  font-weight: ${fontWeights.semibold};
  color: ${colors.primary};
`;

const ViewDetails = styled.span`
  font-size: ${fontSizes.xs};
  color: ${colors.textSecondary};
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <CardContainer>
        <ImageContainer>
          <ProductImage
            src={product.imageUrl || '/images/placeholder-product.jpg'}
            alt={product.name}
          />
          {product.category && (
            <CategoryBadge>
              {product.category.name}
            </CategoryBadge>
          )}
        </ImageContainer>
        <ContentContainer>
          <ProductName>
            {product.name}
          </ProductName>
          <ProductDescription>
            {product.shortDescription}
          </ProductDescription>
          <FooterContainer>
            <Price>
              {product.price?.toFixed(2)}€
            </Price>
            <ViewDetails>
              Ver detalles →
            </ViewDetails>
          </FooterContainer>
        </ContentContainer>
      </CardContainer>
    </Link>
  );
};

export default ProductCard;
