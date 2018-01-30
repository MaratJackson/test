import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
export default class ExampleModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    }
    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
<Button bsStyle="primary" bsSize="large" onClick={() => this.setState({ show: true })} style={{marginTop: 150, marginLeft: 1500}}>Show Modal </Button>

<Modal show={this.state.show} onHide={this.handleHide} container={this} aria-labelledby="contained-modal-title">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title"> Contained Modal </Modal.Title>
    </Modal.Header>
      <Modal.Body>
      <h4>Hello world</h4>
        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
        ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
      </Modal.Body>
    <Modal.Footer>
     <Button onClick={this.handleHide}>Close</Button>
    </Modal.Footer>
  </Modal>
 </div>
);
}
}