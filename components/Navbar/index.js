import React, {useState, useEffect} from 'react'
import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,  
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: 'white'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}>THE BIG YELLOW BOX</NavLogo>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
