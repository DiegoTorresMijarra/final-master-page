
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

// Theme 1: Modern Purple
export const colors1 = {
  primary: '#9b87f5',
  primaryHover: '#8B5CF6',
  primaryLight: '#E5DEFF',
  secondary: '#7E69AB',
  secondaryHover: '#6E59A5',
  secondaryLight: '#D6BCFA',
  background: '#F8F7F3',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#1A1F2C',
  textPrimary: '#1A1F2C',
  textSecondary: '#8E9196',
  textLight: '#FFFFFF',
  accent: '#D946EF',
  accentHover: '#C026D3',
  success: '#4CAF50',
  error: '#EA384C',
  warning: '#FFC107',
  info: '#0EA5E9',
  border: '#E2E0D8',
  divider: '#F1F0FB',
  overlay: 'rgba(0, 0, 0, 0.6)',
};

// Theme 2: Ocean Blue
export const colors2 = {
  primary: '#33C3F0',
  primaryHover: '#1EAEDB',
  primaryLight: '#E5F7FC',
  secondary: '#0EA5E9',
  secondaryHover: '#0284C7',
  secondaryLight: '#D3E4FD',
  background: '#F0F9FF',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#0C4A6E',
  textPrimary: '#0C4A6E',
  textSecondary: '#64748B',
  textLight: '#FFFFFF',
  accent: '#06B6D4',
  accentHover: '#0891B2',
  success: '#4CAF50',
  error: '#EA384C',
  warning: '#FFC107',
  info: '#0EA5E9',
  border: '#E2E8F0',
  divider: '#F1F5F9',
  overlay: 'rgba(0, 0, 0, 0.6)',
};

// Theme 3: Forest Green
export const colors3 = {
  primary: '#2E7D32',
  primaryHover: '#256E29',
  primaryLight: '#F2FCE2',
  secondary: '#4CAF50',
  secondaryHover: '#43A047',
  secondaryLight: '#E8F5E9',
  background: '#F5FBF6',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#1B5E20',
  textPrimary: '#1B5E20',
  textSecondary: '#66796B',
  textLight: '#FFFFFF',
  accent: '#66BB6A',
  accentHover: '#57A65C',
  success: '#4CAF50',
  error: '#EA384C',
  warning: '#FFC107',
  info: '#0EA5E9',
  border: '#E8F5E9',
  divider: '#F1F8E9',
  overlay: 'rgba(0, 0, 0, 0.6)',
};

// Theme 4: Warm Sunset
export const colors4 = {
  primary: '#F97316',
  primaryHover: '#EA580C',
  primaryLight: '#FDE1D3',
  secondary: '#FEC6A1',
  secondaryHover: '#FB923C',
  secondaryLight: '#FEF7CD',
  background: '#FFF7ED',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#7C2D12',
  textPrimary: '#7C2D12',
  textSecondary: '#9A3412',
  textLight: '#FFFFFF',
  accent: '#FB923C',
  accentHover: '#F97316',
  success: '#4CAF50',
  error: '#EA384C',
  warning: '#FFC107',
  info: '#0EA5E9',
  border: '#FFEDD5',
  divider: '#FFF7ED',
  overlay: 'rgba(0, 0, 0, 0.6)',
};

// Color palette
export const colors = colors2;