import React, {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {useTheme} from '@/contexts/ThemeContext';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {PaletteIcon} from 'lucide-react';
import {fonts, fontSizes, fontWeights, spacing, media, transitions} from '@/styles/constants-styles';


const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {setTheme, currentTheme: colors} = useTheme();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };


    const HeaderContainer = styled.header`
        background-color: ${colors.backgroundLight};
        border-bottom: 1px solid ${colors.border};
    `;

    const HeaderContent = styled.div`
        max-width: 1280px;
        margin: 0 auto;
        padding: ${spacing[3]} ${spacing[4]};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Logo = styled.div`
        display: flex;
        align-items: center;
        gap: ${spacing[2]};
    `;

    const LogoImg = styled.img`
        height: 40px;
        width: auto;
    `;

    const LogoText = styled.span`
        font-family: ${fonts.serif};
        font-size: ${fontSizes.xl};
        font-weight: ${fontWeights.bold};
        color: ${colors.textPrimary};
    `;

    const DesktopNav = styled.nav`
        display: none;

        ${media.md} {
            display: flex;
            align-items: center;
            gap: ${spacing[6]};
        }
    `;

    const MobileMenuButton = styled.button`
        display: flex;

        ${media.md} {
            display: none;
        }

        background: none;
        border: none;
        color: ${colors.textPrimary};
        padding: ${spacing[2]};
        cursor: pointer;
    `;

    const MobileNav = styled.nav<{ isOpen: boolean }>`
        position: absolute;
        left: 0;
        right: 0;
        background-color: ${colors.backgroundLight};
        border-bottom: 1px solid ${colors.border};
        z-index: 50;
        transition: ${transitions.default};
        max-height: ${props => props.isOpen ? '260px' : '0'};
        overflow: hidden;
        box-shadow: ${props => props.isOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'};

        ${media.md} {
            display: none;
        }
    `;

    const MobileNavContent = styled.div`
        display: flex;
        flex-direction: column;
        padding: ${spacing[4]};
    `;

    const NavLink = styled.a`
        color: ${colors.textPrimary};
        font-weight: ${fontWeights.medium};
        transition: ${transitions.default};

        &:hover {
            color: ${colors.primary};
        }
    `;

    const MobileNavLink = styled.a`
        color: ${colors.textPrimary};
        font-weight: ${fontWeights.medium};
        padding: ${spacing[2]} 0;
        transition: ${transitions.default};

        &:hover {
            color: ${colors.primary};
        }
    `;

    const ThemeSelector = styled.div`
        position: absolute;
        right: ${spacing[4]};
        top: ${spacing[4]};
        z-index: 50;
        display: flex;
        align-items: center;
        gap: ${spacing[2]};
    `;

    const ThemeIcon = styled(PaletteIcon)`
        width: 20px;
        height: 20px;
    `;

    return (
        <HeaderContainer>
            <HeaderContent>
                <Link href="/" passHref>
                    <Logo as="a">
                        <LogoImg src="/images/logo.png" alt="Artisan Web Corner"/>
                        <LogoText>Artisan Web Corner</LogoText>
                    </Logo>
                </Link>

                <ThemeSelector>
                    <ThemeIcon/>
                    <Select onValueChange={(value) => setTheme(Number(value))}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar tema"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Tema Moderno</SelectItem>
                            <SelectItem value="2">Tema Océano</SelectItem>
                            <SelectItem value="3">Tema Bosque</SelectItem>
                            <SelectItem value="4">Tema Atardecer</SelectItem>
                        </SelectContent>
                    </Select>
                </ThemeSelector>

                {/* Desktop Menu */}
                <DesktopNav>
                    <Link href="/" passHref>
                        <NavLink>Inicio</NavLink>
                    </Link>
                    <Link href="/about" passHref>
                        <NavLink>Quienes Somos</NavLink>
                    </Link>
                    <Link href="/ProductsPage" passHref>
                        <NavLink>Productos</NavLink>
                    </Link>
                    <Link href="/contact" passHref>
                        <NavLink>Contacto</NavLink>
                    </Link>
                </DesktopNav>

                {/* Mobile Menu Button */}
                <MobileMenuButton onClick={toggleMobileMenu} aria-label="Menú">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </MobileMenuButton>
            </HeaderContent>

            {/* Mobile Menu */}
            <MobileNav isOpen={mobileMenuOpen}>
                <MobileNavContent>
                    <Link href="/" passHref>
                        <MobileNavLink onClick={() => setMobileMenuOpen(false)}>Inicio</MobileNavLink>
                    </Link>
                    <Link href="/about" passHref>
                        <MobileNavLink onClick={() => setMobileMenuOpen(false)}>Quienes Somos</MobileNavLink>
                    </Link>
                    <Link href="/products" passHref>
                        <MobileNavLink onClick={() => setMobileMenuOpen(false)}>Productos</MobileNavLink>
                    </Link>
                    <Link href="/contact" passHref>
                        <MobileNavLink onClick={() => setMobileMenuOpen(false)}>Contacto</MobileNavLink>
                    </Link>
                </MobileNavContent>
            </MobileNav>
        </HeaderContainer>
    );
};

export default Header;
