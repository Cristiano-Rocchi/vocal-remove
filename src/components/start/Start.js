import { Button, Col, Container, Row } from "react-bootstrap";
import "../start/Start.css";
import Magnet from "../react-bits/Magnet";
import Arrow from "../../assets/svg/arow.svg";
import ElectricBorder from "../react-bits/ElectricBorder";
import Lanyard from "../react-bits/Lanyard";

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
          <Col xs={1}>ao</Col>
          <Col xs={10}>
            <div className="title-container d-flex flex-column align-items-center justify-content-center min-vh-100 gap-5">
              <h1>Welcome To the Vocal Remove</h1>
              <h2>Carica qualsiasi brano</h2>
              <h2>Attendi qualche secondo</h2>
              <h2>E scarica il risultato</h2>
              <div className="d-flex gap-5">
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
            </div>
          </Col>
          <Col xs={1}>ao</Col>
        </Row>
      </Container>
    </>
  );
};
export default Start;
