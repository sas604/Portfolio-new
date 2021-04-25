import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
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
    margin-bottom: 1.5rem;
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
    position: relative;
    box-shadow: -10px -10px 0px 0px var(--yellow);
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
  .status {
    position: absolute;
    bottom: 24px;
  }
`;
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const { values, updateValue } = useForm({
    email: '',
    name: '',
    subject: '',
    message: '',
    honey: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(values),
      });
      const text = await res.json();
      if (!res.ok) {
        throw new Error(text.msg);
      }
      setStatus(text.msg);
      setLoading(false);
    } catch (error) {
      setStatus(error.msg);
      setLoading(false);
    }
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
            <input
              type="text"
              id="name"
              required
              name="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="subject">
            <span> Subject</span>
            <input
              type="text"
              required
              id="subject"
              name="subject"
              value={values.subject}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="email">
            <span>Your Email</span>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="honey" style={{ display: 'none' }}>
            <span>Don't fill this field</span>
            <input
              type="text"
              id="honey"
              name="honey"
              value={values.honey}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="message">
            <span>Message</span>
            <textarea
              required
              name="message"
              id="message"
              rows="7"
              value={values.message}
              onChange={updateValue}
            />
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
            {loading ? 'Loading...' : 'Send'}
          </SubmitBtn>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </ContactStyles>
  );
}
