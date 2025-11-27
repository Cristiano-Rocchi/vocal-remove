import { Button, Col, Container, Row } from "react-bootstrap";
import "../start/Start.css";

const Start = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="title-container d-flex flex-column align-items-center justify-content-center min-vh-100 gap-5">
              <h1>Welcome To the Vocal Remove</h1>
              <h1>Carica qualsiasi brano</h1>
              <h1>Attendi qualche secondo</h1>
              <h1>E scarica il risultato</h1>
              <Button>Carica</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Start;
