import styled from "styled-components"
import Center from "../../../components/center";
import { Header } from "../../../components/header";
import f014 from "../../../assets/features/f014.webp";

const Footer = styled.footer`
    object-fit: cover;
    position: relative;
    padding: 4rem 0;
    min-height: 100dvh;
    color: hsl(0, 0%, 100%);
    background: hsl(180, 3%, 94%) url(${f014}) 50%  / cover no-repeat fixed;
    background-color: hsla(0, 0%, 13%, 0.5333333333333333);
    background-blend-mode: darken;
`
const ContactWrapper = styled(Center)`
    @media screen and (min-width: 60em){
        position: absolute;
        width: 30em;
        right: 30rem;
        left: auto;
    }
`
const ContactHeader = styled(Header)`
    font-weight: 100;
`
const Addresses = styled.section`
    display: flex;
    gap: 1rem;
    flex-flow: wrap;
`
const Address = styled.div`
    > * {margin: 1rem 0;}
    > h4,h5 {text-transform: uppercase; font-size: 1.8rem; font-weight: 100;}
`
const Form = styled.form`margin: 1rem auto;`
const FormCaption = styled.h6`text-transform: uppercase; font-size: 1.8rem;font-weight: 200;`
const FieldGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
const FieldInput = styled.input.attrs({ type: 'text' })`
    border: none;
    color: orange;
    outline: none;
    font-size: 1.8rem;
    font-weight: 200;
    appearance: none;
    font-style: oblique;
    padding: 1.1rem .2rem;
    background: transparent;
    border-bottom: .4rem solid;
    &::placeholder {font-style: italic; font-size: 1rem; color: #fff6;}
`
const TextArea = styled(FieldInput)`width: 100%;`
const Submit = styled.button.attrs({ type: 'submit' })`
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    margin: 1em 0;
    transition: all .5s ease;
    padding: .8rem 3.5rem;
    background: transparent;
    border: .1rem solid #555;
    &:hover {scale: .9}
    &:active {scale: .7}
`

export default function Contact() {
    return (<Footer id={'contact'}>
        <ContactWrapper>
            <ContactHeader>Contact</ContactHeader>
            <Addresses>
                <Address>
                    <h4>Veggie</h4>
                    <p>1234 Address1, City1, Country</p>
                    <p>+123 4567 890</p>
                </Address>
                <Address>
                    <h5>Reservations</h5>
                    <p>reservations@veggie.com</p>
                    <p>+234 567 8900</p>
                </Address>
            </Addresses>
            <Form>
                <FormCaption>Contact Form</FormCaption>
                <FieldGroup>
                    <FieldInput placeholder="Your Name." required />
                    <FieldInput placeholder="Your Email." type="email" required />
                </FieldGroup>
                <TextArea placeholder="Your Message." as={'textarea'} cols={10} rows={4} required />
                <Submit>Send</Submit>
            </Form>
        </ContactWrapper>
    </Footer>)
}
