import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { DiCss3, DiHtml5, DiJava, DiJavascript, DiMysql, DiPhp } from "react-icons/di";
import { SiExpress, SiFlutter, SiKotlin, SiVuedotjs } from "react-icons/si";

const techIcons = {
  Flutter: <SiFlutter />,
  MySQL: <DiMysql />,
  Express: <SiExpress />,
  Kotlin: <SiKotlin />,
  Php: <DiPhp />,
  Java: <DiJava />,
  Html: <DiHtml5 />,
  Css: <DiCss3 />,
  Javascript: <DiJavascript />,
  Vuejs: <SiVuedotjs />
};

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><strong className="blue">{props.title}</strong></Card.Title>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {props.techStack.map((tech, index) => (
            <Col key={index} xs={4} md={2} className="tech-icons2">
              {techIcons[tech]} <span>{tech.replace(/([a-z])([A-Z])/g, '$1 $2')}</span>
            </Col>
          ))}
        </Row>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isGitLab ? "GitLab" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        { }

        {!props.isGitLab && props.youtubeLink && (
          <Button
            variant="danger"
            href={props.youtubeLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsYoutube /> &nbsp;
            {"Vidéo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
