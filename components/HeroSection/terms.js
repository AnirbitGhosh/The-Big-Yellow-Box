import React, {useState} from 'react'
import {
    TermsContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroTerms,
    FormWrap,
    FormContent,
} from './HeroElements';

const TermsHeroSection = () => {
    const [hover, setHover] = useState(false);
    const Img = "/background.jpg";
    
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <TermsContainer>
            <HeroBg style={{
                    backgroundImage: `url(${Img})`,
                    height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: 'cover'
                }} >
            </HeroBg>
            <HeroContent>
                <HeroH1><u>Our Terms of Service</u></HeroH1>
                <FormWrap>
                    <FormContent>
                    <HeroTerms>
                        This is our terms and conditions and we are a new company.
                        We use your ideas and give you back 10% of any profits made
                        off your idea.  

                    </HeroTerms>
                    </FormContent>
                </FormWrap>    
            </HeroContent>
        </TermsContainer>
    )
}

export default TermsHeroSection;
