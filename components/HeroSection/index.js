import React, {useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    ArrowForward,
    ArrowRight,
    FormWrap,
    FormContent,
    Form,
    FormLabel,
    IdeaInput,
    EmailInput,
    FormButton,
} from './HeroElements';
import useForm from '../Form/useForm';
import validate from '../Form/validateInfo';

const HeroSection = (props) => {
    const [hover, setHover] = useState(false);
    const Img = "/background.jpg";
    
    const onHover = () => {
        setHover(!hover);
    }

    const {handleChange, values, handleSubmit, errors} = useForm(props, validate); 

    return (
        <HeroContainer>
            <HeroBg style={{
                    backgroundImage: `url(${Img})`,
                    height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: 'cover'
                }} >
                {/* <VideoBg autoPlay={true} loop muted src={Video} type="video/mp4" /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Type your business idea, thoughts, feelings, confessions or what you had for breakfast this morning into the big yellow box. If we like your idea, we'll go with it and give you back 10% of the profits. That's it!</HeroH1>
                <br />
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormLabel htmlFor='idea'>Your idea</FormLabel>
                            <IdeaInput 
                            id='idea' 
                            type='text' 
                            name='idea'  
                            value={values.idea}
                            onChange={handleChange}
                            />
                            {errors.idea && <p>{errors.idea}</p>}

                            <FormLabel htmlFor='email'>Enter your email address so we can contact you</FormLabel>
                            <EmailInput 
                            id='email' 
                            type='email' 
                            name='email' 
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}

                            <FormButton type='submit' onMouseEnter={onHover} 
                                onMouseLeave={onHover} 
                                primary='true' 
                                dark='true'>
                                    Submit {hover ? <ArrowForward /> : <ArrowRight />}
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
