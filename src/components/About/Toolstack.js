import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiLinux,
  SiAndroidstudio,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPhpmyadmin,
  SiMamp,
  SiWireshark,
  SiAmazonaws,
  SiMicrosoftexcel,
  SiAxios,
} from "react-icons/si";

const tools = [
  { component: SiWindows, name: "Windows" },
  { component: SiLinux, name: "Linux" },
  { component: SiVisualstudiocode, name: "Visual Studio Code" },
  { component: SiAndroidstudio, name: "Android Studio" },
  { component: SiPostman, name: "Postman" },
  { component: SiGit, name: "Git" },
  { component: SiGithub, name: "GitHub" },
  { component: SiGitlab, name: "GitLab" },
  { component: SiPhpmyadmin, name: "phpMyAdmin" },
  { component: SiMamp, name: "MAMP / LAMP" },
  { component: SiWireshark, name: "Wireshark" },
  { component: SiAmazonaws, name: "AWS" },
  { component: SiMicrosoftexcel, name: "Excel" },
  { component: SiAxios, name: "Axios" },
];

function Toolstack() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons-1"
            data-tip={`${tool.name}`}
          >
            <tool.component aria-label={tool.name} />
          </Col>
        ))}
      </Row>
      <ReactTooltip />
    </div>
  );
}

export default Toolstack;
