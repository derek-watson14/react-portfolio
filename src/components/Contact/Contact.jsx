import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email, phone } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" subtitle="" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <p className="contact-wrapper__text">{email}</p>
            <p className="contact-wrapper__text">{phone}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--projects"
              href={resume ? resume : 'https://www.linkedin.com/in/watsonderek/'}
            >
              {btn || "Resume"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
