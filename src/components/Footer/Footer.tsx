import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../../assets/styles/Footer/Footer.css";

function Footer(): JSX.Element {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section ">
      <Container fluid className="footer" >
        <Row className="text-center align-items-center">
          {/* Texte de copyright et lien vers GitHub */}
          <Col xs={12} md={4} className="footer-copywright py-2">
            <h3>
              {t("bytheo1")}{" "}
              <a
                href="https://github.com/KizuCore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("github_profile_link")}
                className="footer-link"
              >
                KizuCore
              </a>
            </h3>
          </Col>

          {/* Copyright */}
          <Col xs={12} md={4} className="footer-copywright py-2">
            <h3>
              Copyright © 2024-{year} - {t("portfolio_theo")}
            </h3>
          </Col>

          {/* Icônes des réseaux sociaux */}
          <Col xs={12} md={4} className="footer-body py-2">
            <div className="footer-icons d-flex justify-content-center justify-content-md-end gap-5" style={{ paddingRight: "20px" }}>
              <a
                href="https://github.com/KizuCore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("github_profile_link")}
                className="icon-link"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/théo-guérin-b20630192/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("linkedin_profile_link")}
                className="icon-link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:theo.guerin35000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("email_link")}
                className="icon-link"
              >
                <AiOutlineMail className="" />
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
