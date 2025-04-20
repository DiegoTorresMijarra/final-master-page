
// Color palette
export const colors = {
  // Primary colors
  primary: '#33c3f0',
  primaryHover: '#1eaedb',
  primaryLight: '#e5f7fc',
  
  // Secondary colors
  secondary: '#7E69AB',
  secondaryHover: '#6E59A5',
  secondaryLight: '#E5DEFF',
  
  // Background colors
  background: '#F8F7F3',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#1A1F2C',
  
  // Text colors
  textPrimary: '#1A1F2C',
  textSecondary: '#8E9196',
  textLight: '#FFFFFF',
  
  // Accents
  accent: '#2E7D32',
  accentHover: '#256E29',
  
  // State colors
  success: '#4CAF50',
  error: '#EA384C',
  warning: '#FFC107',
  info: '#0EA5E9',
  
  // Border and dividers
  border: '#E2E0D8',
  divider: '#F1F0FB',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.6)',
};

// Font families
export const fonts = {
  primary: "'Inter', sans-serif",
  serif: "'Times New Roman', serif",
};

// Font sizes
export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
};

// Font weights
export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

// Spacing
export const spacing = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

// Transitions
export const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
};

// Media queries breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Media query helper
export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
};

// Container widths
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Z-index values
export const zIndices = {
  base: 1,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modal: 1300,
  tooltip: 1400,
  toast: 1500,
};
