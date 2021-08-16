import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,  
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';

const Navbar = ({toggle}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: 'white'}}>
            <Nav>
                <NavbarContainer>
                    <Link href="/"><NavLogo onClick={toggleHome}>The Big Yellow Box</NavLogo></Link>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
