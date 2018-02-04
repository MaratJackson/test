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
    <Modal.Header closeButton style={{borderBottom:'0px',marginLeft:'25px'}}>
      <Modal.Title id="contained-modal-title" style={{fontWeight:'700',marginBottom:'10px'}}> Add category to our new shop </Modal.Title>
       <Button onClick={this.handleHide} style={{backgroundColor:'#15d18d',fontSize:'10px',color:'white',borderColor:'#15d18d',height: '23px',marginBottom:'20px'}}>
      <i style={{fontWeight:'bold',fontStyle:'normal'}}>Sprint 3</i></Button>
<img src="avatar.png" className="img-rounded" alt="Cinque Terre" width="304" height="236" style={{width:'30px',height:'25px',marginBottom:'20px',marginLeft:'25px'}}/>
   <i style={{fontSize:'smaller',color:'grey',fontStyle:'normal'}}>John John</i>
   <i style={{marginLeft:'20px',fontSize:'smaller',fontStyle:'normal',color:'grey'}}>Due date: 09 May 2018</i>
       <p style={{color:'grey'}}>  Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.</p>
<i className="fa fa-paint-brush" aria-hidden="true" style={{color:'#d2d2d2'}}></i> <i className="fa fa-paperclip" aria-hidden="true" style={{left: '10px',color:'#d2d2d2'}}></i> <i className="fa fa-align-left" aria-hidden="true" style={{left: '20px',color:'#d2d2d2'}}></i>
    <br />
    <h4 style={{fontWeight:'700',marginBottom:'10px',marginTop:'40px'}}><i className="fa fa-check-square" aria-hidden="true" style={{marginRight:'10px',color:'#c9c9c9'}}></i> Product page</h4>
<div className="form-check" style={{fontSize:'large'}}>
    <label>
    <input style={{display:'none'}} type="checkbox" name="check"/> <span className="label-text"><i style={{fontSize:'15px',fontStyle:'initial',marginLeft:'7px'}}>Option 01</i></span>
</label>
</div>
<div className="form-check" style={{fontSize:'large'}}>
    <label>
    <input style={{display:'none'}} type="checkbox" name="check"/> <span className="label-text"><i style={{fontSize:'15px',fontStyle:'initial',marginLeft:'7px'}}>Option 02</i></span>
</label>
</div>
<div className="form-check" style={{fontSize:'large'}}>
    <label>
    <input style={{display:'none'}} type="checkbox" name="check"/> <span className="label-text"><i style={{fontSize:'15px',fontStyle:'initial',marginLeft:'7px'}}>Option 03</i></span>
</label>
</div>
<div className="form-group">
    <label htmlFor="exampleFormControlTextarea1" style={{marginTop:'30px',fontWeight:'700',fontSize:'initial'}}><i className="fa fa-comment-o" aria-hidden="true" style={{marginRight:'10px',color:'#c9c9c9',fontSize:'large'}}></i>Comments</label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
    </div>
    </Modal.Header>
      <Modal.Body>
      <h4 style={{fontWeight:'700',marginBottom:'10px'}}><i className="fa fa-align-justify fa-w-14" aria-hidden="true" style={{color:'#c9c9c9',fontSize:'large',marginRight:'10px',marginRight:'10px',marginLeft:'25px'}}></i>Activity</h4>
       <br />
         <img src="avatar.png" className="img-rounded" alt="Cinque Terre" width="304" height="236" style={{width:'30px',height:'25px',marginBottom:'15px',marginLeft:'25px'}}/>
       <br />
        <img src="avatar.png" className="img-rounded" alt="Cinque Terre" width="304" height="236" style={{width:'30px',height:'25px',marginBottom:'15px',marginLeft:'25px'}}/>
      </Modal.Body>
    <Modal.Footer style={{borderBottom:'0px',borderColor:'white'}}>
    </Modal.Footer>
  </Modal>
 </div>
);
}
}