
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyles } from '@/styles/CommonStyles';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface LayoutProps {
    children: React.ReactNode;
}

const Main = styled.main`
    flex: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <Main>
                <Header />
                {children}
                <Footer />
            </Main>
        </ThemeProvider>
    );
};

export default Layout;
