import { Button, Col, Container, Row } from "react-bootstrap";
import "../start/Start.css";
import Magnet from "../react-bits/Magnet";
import Arrow from "../../assets/svg/arow.svg";
import ElectricBorder from "../react-bits/ElectricBorder";
import Lanyard from "../react-bits/Lanyard";

/*FLAGS */
import itaflag from "../../assets/flags/itaflag.png";
import engflag from "../../assets/flags/engflag.png";
import espflag from "../../assets/flags/espflag.png";

const Start = () => {
  return (
    <>
      {/* OVERLAY DEL LANYARD SOPRA TUTTO */}
      <div className="lanyard-overlay">
        <div className="lanyard-position">
          <Lanyard position={[0, 0, 20]} gravity={[0, -50, 0]} />
        </div>
      </div>

      <Container fluid>
        <Row>
          <Col xs={2}>ao</Col>
          <Col xs={8}>
            <div className="title-container d-flex flex-column align-items-center justify-content-center min-vh-100 gap-5">
              <h1>Welcome To the Vocal Remove</h1>
              <h2>Carica qualsiasi brano</h2>
              <h2>Attendi qualche secondo</h2>
              <h2>E scarica il risultato</h2>
              <div className="text-center">
                <img
                  src={Arrow}
                  alt=""
                  className="mb-3"
                  style={{ transform: "rotate(90deg)" }}
                />
                <div className="d-flex gap-4">
                  <div>
                    <img src={Arrow} alt="" />
                  </div>
                  <Magnet
                    padding={100}
                    magnetStrength={1.5}
                    disabled={window.innerWidth < 768}
                  >
                    <ElectricBorder
                      color="#000000ff"
                      speed={1}
                      chaos={0.3}
                      thickness={3}
                      style={{ borderRadius: 16 }}
                    >
                      <Button className="start-btn">Start</Button>
                    </ElectricBorder>
                  </Magnet>
                  <div>
                    <img
                      style={{ transform: "rotate(180deg)" }}
                      src={Arrow}
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src={Arrow}
                  alt=""
                  className="mt-3"
                  style={{ transform: "rotate(270deg)" }}
                />
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <div className="d-flex gap-2 flag-wrapper">
              <img className="flag" src={engflag} alt="UK Flag" />
              <img className="flag" src={itaflag} alt="Italian Flag" />
              <img className="flag" src={espflag} alt="Spanish Flag" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Start;
