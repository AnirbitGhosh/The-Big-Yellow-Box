import React, {useState} from 'react'
import {
    TermsContainer,
    HeroBg,
    TermsHeroContent,
    HeroH1,
    HeroTerms,
    FormWrap,
    FormContent,
    TermsP,
} from './HeroElements';
import Link from 'next/link';

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
            <TermsHeroContent>
                <HeroH1><u>Our Terms of Service</u></HeroH1>
                <FormWrap>
                    <FormContent>
                    <HeroTerms>
                    <TermsP>1. Owners of <Link href="/">thebigyellowbox.net</Link> reserve the right to use all submissions for purposes such as business, marketing, and product/service development</TermsP>
                    <TermsP>2. Submissions may be posted publicly on social media</TermsP>
                    <TermsP>3. Owners of <Link href="/">thebigyellowbox.net</Link> will contact users via their submitted email address if the user&apos;s submission is deemed (by the owners of thebigyellowbox.net) to be eligible for compensation in the form of 10% of any profits made as a direct result of the submission</TermsP>
                    <TermsP>4. Anonymous submissions (those with no email address entered) will not be contacted</TermsP>
                    <TermsP>5. Only users who provide an email address may be contacted about paid compensation for profits generated as a direct result of their submission</TermsP>
                    <TermsP>6. Owners of <Link href="/">thebigyellowbox.net</Link> reserve the right to progress with anonymous submissions (those with no email address provided) in any capacity without contacting or compensating the anonymous user</TermsP>
                    <TermsP>7. Users who are not cooperative (users who take more than three days to reply to more than two emails) upon being contacted will not be eligible for paid compensation</TermsP>

                    </HeroTerms>
                    </FormContent>
                </FormWrap>    
            </TermsHeroContent>
        </TermsContainer>
    )
}

export default TermsHeroSection;
