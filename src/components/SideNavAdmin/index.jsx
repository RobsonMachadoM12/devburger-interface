import { SignOut } from '@phosphor-icons/react';
import Logo from '../../assets/Logo 1.svg';
import { useUser } from '../../hooks/UserContaxt';
import { NavLincks } from './navLincks';
import { Container, NavLinckContainer, NavLinck, Footer } from './styles';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();
    return (
        <Container>
            <img src={Logo} alt='Hamburger Logo Devburger' />
            <NavLinckContainer>
                {NavLincks.map(linck => (
                    <NavLinck
                        key={linck.id}
                        to={linck.path}
                        $isActive={pathname === linck.path}
                    >
                        {linck.icon}
                        <span>{linck.label}</span>
                    </NavLinck>
                ))}
            </NavLinckContainer>
            <Footer>
                <NavLinck to='/login' onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLinck>
            </Footer>

        </Container>
    );
}