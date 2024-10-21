import React from "react";
import { useTranslation } from 'react-i18next';
import Card from "react-bootstrap/Card";
import { useInView } from 'react-intersection-observer';

function AboutCard() {
  const { t } = useTranslation();

  const { ref: refText, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card className="quote-card-view mt-4">
      <Card.Body>
        <blockquote
          className={`blockquote mb-0 background-box ${textInView ? 'slide-in-left' : ''}`}
          ref={refText}
        >
          {/* Justification texte*/}
          <p className="text-justify">
            {t('greeting')} <span className="blue">Théo Guérin</span>{t('from')}<span className="blue"> {t('rennes')}</span>.
            <br />
            <br />
            {t('current_position1')} <span className="blue">{t('developper23')}</span>{t('current_position2')} <span className="blue">{t('firstmaster')}</span>{t('current_position3')}
            <br />
            <br />
            {t('qualifications')}
          </p>

          {/* Liste */}
          <ul className="mt-3">
            <li className="about-activity mb-2">
              • <a
                href="https://istic.univ-rennes.fr/licence-informatique-parcours-informatique"
                className="text-decoration-none blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('degree1')}
              </a>
            </li>
            <li className="about-activity mb-2">
              • <a
                href="https://www.mydigitalschool.com/bachelor-1-2-web"
                className="text-decoration-none blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('degree2')}
              </a>
            </li>
            <li className="about-activity mb-2">
              • <a
                href="https://www.francecompetences.fr/recherche/rncp/37873/"
                className="text-decoration-none blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('degree3')}
              </a>
            </li>
          </ul>

          {/* Section Hobbies */}
          <p className="text-justify mt-4">
            {t('outside_of_coding')}
          </p>
          <ul className="list-unstyled mt-3">
            <li className="about-activity">{t('hobby1')}</li>
            <li className="about-activity">{t('hobby2')}</li>
            <li className="about-activity">{t('hobby3')}</li>
            <li className="about-activity">{t('hobby4')}</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
