import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from '../images/drc2_homecard.avif';
import img2 from '../images/palestine_updated_homecard.avif';
import img3 from '../images/WFP_STM_afghanistan6_homecard.avif';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Overview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Shared meals will provide emergency food assistance to families in Palestine.</h4>
        <p>
        With conflict escalating in October 2023, Palestine is facing an urgent humanitarian crisis. 1.8 million people are now food insecure, many of whom have lost their homes and are seeking safety in shelters. 

Despite challenging conditions, the World Food Programme (WFP) is on the ground providing life-saving aid to people in Palestine and those in shelters. Regular cash and food programmes are also continuing every day where possible. 

Until the end of the year, WFP plans to reach 1.1 million people in Gaza and the West Bank. Food support includes bread, canned chickpeas and beans. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function GroupExample() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Give emergency aid in Palestine</Card.Title>
          <Card.Text>
          Shared meals will provide emergency food assistance to families in Palestine.
          </Card.Text>

          <Button variant="primary" onClick={() => setModalShow(true)}>
        More info
      </Button>
      <Button variant="success" className='donate-btn'>
        Donate
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">10,443,254 meals</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Help in the Democratic Republic of the Congo</Card.Title>
          <Card.Text>
          One of the world’s biggest hunger crises, 25.8 million people in the Democratic Republic of the Congo (DRC) are food insecure.{' '}
          </Card.Text>

          <Button variant="primary" onClick={() => setModalShow(true)}>
        More info
      </Button>
      <Button variant="success" className='donate-btn'>
        Donate
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">230,865 meals</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Donate emergency support in Afghanistan</Card.Title>
          <Card.Text>
          Shared meals will help provide emergency humanitarian assistance to families in Afghanistan including school meals, cash and nutrition.
          </Card.Text>
            
          <Button variant="primary" onClick={() => setModalShow(true)}>
        More info
      </Button>
      <Button variant="success" className='donate-btn'>
        Donate
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">1,526,103 meals</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;