import { Button, Col, Container, Row } from "react-bootstrap";
import "../start/Start.css";
import Magnet from "../react-bits/Magnet";
import Arrow from "../../../assets/svg/arow.svg";

const Start = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="title-container d-flex flex-column align-items-center justify-content-center min-vh-100 gap-5">
              <h1>Welcome To the Vocal Remove</h1>
              <h2>Carica qualsiasi brano</h2>
              <h2>Attendi qualche secondo</h2>
              <h2>E scarica il risultato</h2>
              <div className="d-flex">
                <div></div>
                <Magnet
                  padding={150}
                  magnetStrength={1}
                  disabled={window.innerWidth < 768}
                >
                  <Button className="start-btn">Start</Button>
                </Magnet>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Start;
