
import styled, { createGlobalStyle, css } from 'styled-components';
import { colors, fonts, fontSizes, spacing, borderRadius, shadows, transitions } from './constants-styles';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${fonts.primary};
    background-color: ${colors.background};
    color: ${colors.textPrimary};
    line-height: 1.5;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.serif};
    margin-bottom: ${spacing[4]};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing[4]};
`;

export const Section = styled.section`
  padding: ${spacing[16]} 0;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[2]} ${spacing[4]};
  font-weight: 500;
  border-radius: ${borderRadius.md};
  transition: ${transitions.default};
  cursor: pointer;
  
  ${props => props.variant === 'primary' || !props.variant ? css`
    background-color: ${colors.primary};
    color: ${colors.textLight};
    border: none;
    
    &:hover {
      background-color: ${colors.primaryHover};
    }
  ` : ''}
  
  ${props => props.variant === 'secondary' ? css`
    background-color: ${colors.secondary};
    color: ${colors.textLight};
    border: none;
    
    &:hover {
      background-color: ${colors.secondaryHover};
    }
  ` : ''}
  
  ${props => props.variant === 'outline' ? css`
    background-color: transparent;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    
    &:hover {
      background-color: ${colors.primaryLight};
    }
  ` : ''}
`;

export const Card = styled.div`
  background-color: ${colors.backgroundLight};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  overflow: hidden;
  transition: ${transitions.default};
  
  &:hover {
    box-shadow: ${shadows.lg};
  }
`;

export const FlexContainer = styled.div<{ 
  direction?: 'row' | 'column',
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around',
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
  gap?: keyof typeof spacing,
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap ? spacing[props.gap] : 0};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;

export const Grid = styled.div<{
  columns?: number,
  gap?: keyof typeof spacing
}>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${props => props.gap ? spacing[props.gap] : spacing[6]};
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(${props => Math.min(props.columns || 1, 2)}, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => Math.min(props.columns || 1, 3)}, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(${props => props.columns || 1}, 1fr);
  }
`;

export const Typography = styled.p<{
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption',
  color?: string,
  align?: 'left' | 'center' | 'right',
  weight?: keyof typeof fontSizes
}>`
  color: ${props => props.color || colors.textPrimary};
  text-align: ${props => props.align || 'left'};
  
  ${props => props.variant === 'h1' && css`
    font-size: ${fontSizes['5xl']};
    font-weight: 700;
    font-family: ${fonts.serif};
  `}
  
  ${props => props.variant === 'h2' && css`
    font-size: ${fontSizes['4xl']};
    font-weight: 700;
    font-family: ${fonts.serif};
  `}
  
  ${props => props.variant === 'h3' && css`
    font-size: ${fontSizes['3xl']};
    font-weight: 700;
    font-family: ${fonts.serif};
  `}
  
  ${props => props.variant === 'h4' && css`
    font-size: ${fontSizes['2xl']};
    font-weight: 600;
    font-family: ${fonts.serif};
  `}
  
  ${props => props.variant === 'h5' && css`
    font-size: ${fontSizes.xl};
    font-weight: 600;
    font-family: ${fonts.serif};
  `}
  
  ${props => props.variant === 'h6' && css`
    font-size: ${fontSizes.lg};
    font-weight: 600;
    font-family: ${fonts.serif};
  `}
  
  ${props => (props.variant === 'body' || !props.variant) && css`
    font-size: ${fontSizes.md};
    font-weight: 400;
  `}
  
  ${props => props.variant === 'small' && css`
    font-size: ${fontSizes.sm};
    font-weight: 400;
  `}
  
  ${props => props.variant === 'caption' && css`
    font-size: ${fontSizes.xs};
    font-weight: 400;
    color: ${colors.textSecondary};
  `}
`;

export const Badge = styled.span<{ variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' }>`
  display: inline-block;
  padding: ${spacing[1]} ${spacing[2]};
  border-radius: ${borderRadius.full};
  font-size: ${fontSizes.xs};
  font-weight: 500;
  
  ${props => props.variant === 'primary' || !props.variant ? css`
    background-color: ${colors.primaryLight};
    color: ${colors.primary};
  ` : ''}
  
  ${props => props.variant === 'secondary' ? css`
    background-color: ${colors.secondaryLight};
    color: ${colors.secondary};
  ` : ''}
  
  ${props => props.variant === 'success' ? css`
    background-color: ${colors.success}20;
    color: ${colors.success};
  ` : ''}
  
  ${props => props.variant === 'error' ? css`
    background-color: ${colors.error}20;
    color: ${colors.error};
  ` : ''}
  
  ${props => props.variant === 'warning' ? css`
    background-color: ${colors.warning}20;
    color: ${colors.warning};
  ` : ''}
  
  ${props => props.variant === 'info' ? css`
    background-color: ${colors.info}20;
    color: ${colors.info};
  ` : ''}
`;

export const Input = styled.input`
  width: 100%;
  padding: ${spacing[2]} ${spacing[3]};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.md};
  font-family: ${fonts.primary};
  font-size: ${fontSizes.md};
  transition: ${transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary}40;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${spacing[2]} ${spacing[3]};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.md};
  font-family: ${fonts.primary};
  font-size: ${fontSizes.md};
  transition: ${transitions.default};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary}40;
  }
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${colors.divider};
  border: none;
  margin: ${spacing[6]} 0;
`;
