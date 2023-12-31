import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='add-btn-div'>
        <Button className="add-btn" variant="secondary" onClick={handleShow}>
        <>Rais new fund </>
        <img width="50" height="50"  src="https://img.icons8.com/neon/96/plus.png" alt="plus-math"/>
        </Button>
      </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter details of new funding</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fund title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Fund details</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fund image URL</Form.Label>
              <Form.Control
                placeholder='https://ibb.co/Cnkr5LZ'
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Account id</Form.Label>
              <Form.Control
                placeholder='0x871f10Ce5653DaeAB15a51141311A81c6eDCF88D'
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;