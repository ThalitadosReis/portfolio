import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import resume from "../assets/resume.pdf";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span style={{ color: "#e3d35a" }}>Welcome to my Portfolio</span>
              <h1>
                Hi! I'm Thalita, <br />
                and I build things
                <span style={{ color: "#e3d35a" }}>.</span>
              </h1>
              <p>
                I'm a tech-loving junior full-stack developer who gets a thrill
                from building innovative applications. With experience in both
                front-end and back-end development, I can bring a unique
                perspective to any project.
              </p>
              <a href={resume} download="Thalita dos Reis resume.pdf">
                {" "}
                Download Resume <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
