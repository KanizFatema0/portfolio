import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/memory-game.png";
import projImg2 from "../assets/img/E-Commerce Website.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/poster1.png";
import projImg5 from "../assets/img/poster2.png";
import projImg6 from "../assets/img/poster3.png";
import projImg7 from "../assets/img/Figma1.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      imgUrl: projImg2,
      url: "https://drive.google.com/file/d/16q0qPzCzNucALLJtff2lkq9HLV9xUZTU/view?usp=sharing"
    },
    {
      title: "Memory Game",
      imgUrl: projImg1,
      url: "https://ubiquitous-sopapillas-b0b243.netlify.app/"
    },
  ];
  const projects2 = [
    {
      title: "MealSwift (Food Delivery App)",
      imgUrl: projImg7,
      url: "https://drive.google.com/file/d/16KjcItL7_aFD6ggrBXSLZPiauheZ44w5/view?usp=drive_link"
    },
  ];
  const projects3 = [
    {
      title: "Poster",
      imgUrl: projImg4,
      url: "https://drive.google.com/file/d/10iqKp6idAu0JVJq4WEEMPt55EXWmovX3/view?usp=sharing"
    },
    {
      title: "Poster",
      imgUrl: projImg5,
      url: "https://drive.google.com/file/d/1VxtwpqlF2_ksdb0aPbWhRLQo9GdXehyF/view?usp=sharing"
    },
    {
      title: "Poster",
      imgUrl: projImg6,
      url: "https://drive.google.com/file/d/1BSi298-FwVqf_cue4dQ2oQMT65SageKv/view?usp=sharing"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Below is a compilation of various projects that I have undertaken throughout my academic journey, as well as personal projects that reflect my passion and skills. These projects highlight my approach to problem-solving, creativity, and technical proficiency.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI/UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                    <Tab.Content>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                    <Tab.Content>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background" />
    </section>
  );
};
