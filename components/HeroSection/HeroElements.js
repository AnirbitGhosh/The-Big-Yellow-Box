import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 840px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
`;

export const TermsContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: top;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    margin-top: 25px;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TermsHeroContent = styled.div`
    margin-top: 20px;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    font-weight: 400;
    color: black;
    font-size: 32px;
    text-align: center;
    font-family: 'Roboto Mono', monospace;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;

export const HeroP = styled.p`
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const TermsP = styled.p`
    padding-top: 20px;
    margin-left: 50px;
    font-weight: 400;
    color: black;
    font-size: 25px;
    text-align: left;
    font-family: 'Roboto Mono', monospace;

    @media screen and (max-width: 768px){
        font-size: 15px;
    }

    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroTerms = styled.span`
    font-size: 30px;
    font-family: 'Roboto Mono', monospace;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const FormWrap = styled.div`
    /* margin-bottom: 10px; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding-right: 50px;
    }
`;

export const Form = styled.form`
    background: transparent;
    max-width: 2000px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    /* box-shadow: 0 1px 3px #301934; */

    @media screen and (max-width: 768px){
        padding: 32px 32px;
        padding-left: 32px;
        padding-right: 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: black;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 400;
    color: black;
    font-family: 'Roboto Mono', monospace;
` 

export const TermsLabel = styled.label`
    margin-left: 15px;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 400;
    color: black;
    font-family: 'Roboto Mono', monospace;
` 

export const TermsIcon = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: green;
    font-family: 'Roboto Mono', monospace;
` 

export const IdeaInput = styled.textarea`
    background: #f3d458;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    height: 150px;
    font-size: 15px;
`

export const EmailInput = styled.input`
    background: #f3d458;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 12px;

    @media screen and (max-width: 480px){
        padding: 32px 32px;
    }
`

export const FormButton = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'black' : '#f3d458')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : 'black')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out; 
    width: 100%;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#f3d458' : 'black')};
        color: ${({dark}) => (dark ? '#010606' : '#fff')}
    }
`