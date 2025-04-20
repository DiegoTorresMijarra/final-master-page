
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, fontSizes, fontWeights, shadows, borderRadius, spacing, zIndices } from '@/styles/constants-styles';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
  id: string;
  onClose: () => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ToastWrapper = styled.div<{ isClosing: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${colors.backgroundLight};
  box-shadow: ${shadows.md};
  border-radius: ${borderRadius.md};
  padding: ${spacing[3]} ${spacing[4]};
  margin-bottom: ${spacing[2]};
  animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.3s ease forwards;
  max-width: 450px;
  width: 100%;
`;

const SuccessToast = styled(ToastWrapper)`
  border-left: 4px solid ${colors.success};
`;

const ErrorToast = styled(ToastWrapper)`
  border-left: 4px solid ${colors.error};
`;

const InfoToast = styled(ToastWrapper)`
  border-left: 4px solid ${colors.info};
`;

const WarningToast = styled(ToastWrapper)`
  border-left: 4px solid ${colors.warning};
`;

const ToastIcon = styled.div`
  margin-right: ${spacing[3]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToastContent = styled.div`
  flex: 1;
`;

const ToastTitle = styled.h4`
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes.md};
  color: ${colors.textPrimary};
  margin: 0 0 ${spacing[1]} 0;
`;

const ToastMessage = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.textSecondary};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.textSecondary};
  cursor: pointer;
  padding: ${spacing[1]};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.textPrimary};
  }
`;

const ToastContainerWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: ${zIndices.toast};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// Array to store toast messages
const toastStore: {
  toasts: Array<{ id: string; message: string; type: ToastType }>;
  listeners: Array<(toasts: Array<{ id: string; message: string; type: ToastType }>) => void>;
  addToast: (message: string, type: ToastType) => string;
  removeToast: (id: string) => void;
  subscribe: (listener: (toasts: Array<{ id: string; message: string; type: ToastType }>) => void) => () => void;
} = {
  toasts: [],
  listeners: [],
  addToast: (message, type) => {
    const id = Date.now().toString();
    toastStore.toasts.push({ id, message, type });
    toastStore.listeners.forEach(listener => listener([...toastStore.toasts]));
    
    // Automatically remove after 4 seconds
    setTimeout(() => {
      toastStore.removeToast(id);
    }, 4000);
    
    return id;
  },
  removeToast: (id) => {
    toastStore.toasts = toastStore.toasts.filter(toast => toast.id !== id);
    toastStore.listeners.forEach(listener => listener([...toastStore.toasts]));
  },
  subscribe: (listener) => {
    toastStore.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      toastStore.listeners = toastStore.listeners.filter(l => l !== listener);
    };
  }
};

// Component to display a single toast
const Toast: React.FC<ToastProps> = ({ message, type, id, onClose }) => {
  const [isClosing, setIsClosing] = React.useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const getToastComponent = () => {
    switch (type) {
      case 'success':
        return (
          <SuccessToast isClosing={isClosing}>
            <ToastIcon>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke={colors.success} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L9 12L13 8" stroke={colors.success} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ToastIcon>
            <ToastContent>
              <ToastTitle>Success</ToastTitle>
              <ToastMessage>{message}</ToastMessage>
            </ToastContent>
            <CloseButton onClick={handleClose}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CloseButton>
          </SuccessToast>
        );
      case 'error':
        return (
          <ErrorToast isClosing={isClosing}>
            <ToastIcon>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke={colors.error} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6V10" stroke={colors.error} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14H10.01" stroke={colors.error} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ToastIcon>
            <ToastContent>
              <ToastTitle>Error</ToastTitle>
              <ToastMessage>{message}</ToastMessage>
            </ToastContent>
            <CloseButton onClick={handleClose}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CloseButton>
          </ErrorToast>
        );
      case 'info':
        return (
          <InfoToast isClosing={isClosing}>
            <ToastIcon>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke={colors.info} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14V10" stroke={colors.info} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6H10.01" stroke={colors.info} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ToastIcon>
            <ToastContent>
              <ToastTitle>Info</ToastTitle>
              <ToastMessage>{message}</ToastMessage>
            </ToastContent>
            <CloseButton onClick={handleClose}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CloseButton>
          </InfoToast>
        );
      case 'warning':
        return (
          <WarningToast isClosing={isClosing}>
            <ToastIcon>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke={colors.warning} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6V10" stroke={colors.warning} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14H10.01" stroke={colors.warning} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ToastIcon>
            <ToastContent>
              <ToastTitle>Warning</ToastTitle>
              <ToastMessage>{message}</ToastMessage>
            </ToastContent>
            <CloseButton onClick={handleClose}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CloseButton>
          </WarningToast>
        );
      default:
        return null;
    }
  };
  
  return getToastComponent();
};

// Main Toast Container Component
const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = React.useState<Array<{ id: string; message: string; type: ToastType }>>([]);
  
  useEffect(() => {
    const unsubscribe = toastStore.subscribe(setToasts);
    
    // Expose the showToast function globally
    (window as any).showToast = (message: string, type: ToastType = 'info') => {
      toastStore.addToast(message, type);
    };
    
    return () => {
      unsubscribe();
      delete (window as any).showToast;
    };
  }, []);
  
  if (toasts.length === 0) {
    return null;
  }
  
  return (
    <ToastContainerWrapper>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => toastStore.removeToast(toast.id)}
        />
      ))}
    </ToastContainerWrapper>
  );
};

export default ToastContainer;
