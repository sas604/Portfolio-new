import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import styled from 'styled-components';
import { H1highlight } from '../styles/Type';
import { FancyButton } from './CaseStudy';

const SubmitBtn = styled(FancyButton)`
  appearance: none;
  border: none;
  margin-top: calc(1.5rem + 6px);
  box-shadow: -6px -6px 0px 0px #d9edf7;
  flex: 1;
  cursor: pointer;
  color: var(--dark-blue);
`;
const ContactStyles = styled.section`
  .icons {
    flex: 1 220px;
    font-size: 2rem;
    * + * {
      margin-left: 1.5rem;
    }
  }
  .contact-wrapper {
    display: flex;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }
  form {
    box-shadow: -6px -6px 0px 0px var(--yellow);
    flex: 1 350px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: var(--dark-blue);
    color: white;
    padding: 4.5rem 3rem;
  }
  label {
    margin-top: 1.5rem;
  }
  input,
  textarea {
    margin-top: 0.35rem;
    display: block;
    width: 100%;
    padding: 0.5rem;
    max-width: 400px;
  }
  label > span,
  label {
    display: block;
  }
`;
export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ContactStyles id="contacts">
      <H1highlight>Let's Get in Touch</H1highlight>
      <p>
        Send me a message with your contact info or connect with me on social
        media.
      </p>
      <div className="contact-wrapper">
        <div className="icons">
          <Link href="https://twitter.com/alex_tagunov">
            <a aria-label="twitter">
              <AiFillTwitterCircle />
            </a>
          </Link>
          <Link href="https://github.com/sas604">
            <a aria-label="gitHub">
              <AiFillGithub />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/aleksandr-tagunov/">
            <a aria-label="LinkedIn">
              <AiFillLinkedin />
            </a>
          </Link>
          <Link href="https://www.google.com/search?q=Reasons+not+to+use+Facebook+in+2021">
            <a aria-label="Facebook">
              <AiFillFacebook />
            </a>
          </Link>
        </div>
        <form onSubmit={onSubmit}>
          <h2>Send Me a Message</h2>
          <label htmlFor="name">
            <span> Your Name</span>
            <input type="text" id="name" name="name" />
          </label>
          <label htmlFor="subject">
            <span> Subject</span>
            <input type="text" id="subject" name="subject" />
          </label>
          <label htmlFor="email">
            <span>Your Email</span>
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="message">
            <span>Message</span>
            <textarea name="message" id="message" rows="7" />
          </label>
          <SubmitBtn
            whileTap={{
              x: -6,
              y: -6,
              boxShadow: '0px 0px 0px 0px #023047',
            }}
            as={motion.button}
            type="submit"
          >
            Send
          </SubmitBtn>
        </form>
      </div>
    </ContactStyles>
  );
}
