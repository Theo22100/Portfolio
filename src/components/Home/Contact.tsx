import React, { JSX, Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Col, Spinner } from "react-bootstrap";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../assets/styles/Contact/Contact.css';
import ContactForm from "./ContactForm.tsx";

// Chargement différé des icônes avec types explicites
const AiFillGithub = React.lazy(() =>
  import("react-icons/ai").then(module => ({ default: module.AiFillGithub }))
);
const AiOutlineMail = React.lazy(() =>
  import("react-icons/ai").then(module => ({ default: module.AiOutlineMail }))
);
const FaLinkedinIn = React.lazy(() =>
  import("react-icons/fa").then(module => ({ default: module.FaLinkedinIn }))
);

function Contact(): JSX.Element {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Col md={12} className="home-about-social pt-5" ref={ref}>
      <h2 className="blue-title pt-5 pb-3" style={{ fontSize: "2.6em" }}>
        {t('social')}
      </h2>

      <ContactForm />

      <ul className="home-about-social-links">
        {/* GitHub */}
        <motion.li
          className="social-icons"
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={iconVariants}
        >
          <a
            href="https://github.com/Theo22100"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
            aria-label={t('github_profile2')}
          >
            <Suspense fallback={<Spinner animation="border" role="status" />}>
              <AiFillGithub size={55} />
            </Suspense>
          </a>
        </motion.li>

        {/* LinkedIn */}
        <motion.li
          className="social-icons"
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={iconVariants}
        >
          <a
            href="https://www.linkedin.com/in/théo-guérin-b20630192/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
            aria-label={t('linkedin_profile')}
          >
            <Suspense fallback={<Spinner animation="border" role="status" />}>
              <FaLinkedinIn size={55} />
            </Suspense>
          </a>
        </motion.li>

        {/* Mail */}
        <motion.li
          className="social-icons"
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={iconVariants}
        >
          <a
            href="mailto:theo.guerin35000@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
            aria-label={t('email_me')}
          >
            <Suspense fallback={<Spinner animation="border" role="status" />}>
              <AiOutlineMail size={55} />
            </Suspense>
          </a>
        </motion.li>
      </ul>
    </Col>
  );
}

export default Contact;
