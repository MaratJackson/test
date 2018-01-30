import React from 'react';
import Modal from './Modal'
import './app.css'
export default class Trigger extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
        this.setState({ show: false });
    }
    render() {
        return (

       <div>

         <div className="panel panel-default pageHead">
            <img src="1.jpg" className="img-circle avatar" alt="Cinque Terre" width="304" height="236"/>
            <i className="fa fa-bell" aria-hidden="true" style={{fontSize: '20px',left: '11px',color:'white'}}></i>
            <i className="fa fa-cog" aria-hidden="true" style={{left: 40, fontSize: 20, color: 'white'}}></i>
            <i className="fa fa-share" aria-hidden="true" style={{fontSize: '20px',left: '70px',color:'white'}}></i>
            <i style={{marginLeft: 120, color: 'white',fontStyle:'normal',fontSize:'20px',fontWeight: 'bold'}}>Project</i>
            <ul className="nav nav-tabs ul" style={{color:'white'}}>
                <li className=""><a href="#A" data-toggle="tab" style={{color:"white"}}>OVERVIEW</a></li>
                <li className=""><a href="#B" data-toggle="tab" style={{color:"white"}}>TASKS</a></li>
                <li className=""><a href="#C" data-toggle="tab" style={{color:"white"}}>PROGRESS</a></li>
            </ul>
            <div className="panel-body"></div>
        </div>


        <div className="panel panel-default vertMenu">
         <div className="panel-heading heading">
         <i className="fa fa-dashboard" aria-hidden="true" style={{fontSize: 20, left: 15, top: 20, bottom: 111,color:"#dadfea"}}>
          <i style={{color:'#959596',fontStyle: 'normal', fontSize: 14, fontWeight: 'bold',fontFamily: 'sans-serif',marginLeft:'11px'}}>PROJECTS DASHBOARD</i>
          <br/>
          <i className="fa fa-circle" aria-hidden="true" style={{top: '10px',left: '25px',fontSize:'10px',color:'#3e4eb8',marginBottom: '12px'}}>
          <i style={{marginLeft:'18px',fontSize:'15px',color:'#bfbfc1',fontFamily:'sans-serif',fontStyle:'normal'}}>Buildateam</i>
            </i>
            <br/>
            <i className="fa fa-circle" aria-hidden="true" style={{top: '10px',left: '25px',fontSize:'10px',color:'#f5a623'}}>
            <i style={{marginLeft:'18px',fontSize:'15px',color:'#bfbfc1',fontFamily:'sans-serif',fontStyle:'normal'}}>Kickstagram</i>
            </i>
            </i>
        </div>
        <div className="panel-heading myTasks">
            <i className="fa fa-calendar-plus-o" aria-hidden="true" style={{fontSize: '20px',left: '15px', color: 'rgb(218, 223, 234)',top: '12px'}}>
            <i style={{color:'#959596',fontStyle: 'normal', fontSize: 14, fontWeight: 'bold',fontFamily: 'sans-serif',marginLeft:'11px'}}>MY TASKS</i>
            </i>
        </div>
        <div className="panel-body">
            <i className="fa fa-clock-o" aria-hidden="true" style={{fontSize:'20px',left:'15px',color: 'rgb(218, 223, 234)'}}>
            <i style={{color:'#959596',fontStyle: 'normal', fontSize: 14, fontWeight: 'bold',fontFamily: 'sans-serif',marginLeft:'11px'}}>TIME TRACKING</i>
            <i className="fa fa-play" aria-hidden="true" style={{ top:'25px',fontSize:'15px',color:'#48d3c2',left:'-115px'}}>
               <i style={{marginLeft:'18px',fontSize:'15px',color:'#bfbfc1',fontFamily:'sans-serif',fontStyle:'normal'}}>Play</i>
            </i>
          <i className="fa fa-undo" aria-hidden="true" style={{top: '35px', fontSize: '15px',left:'23px',color:'#ffd1fb'}}>
             <i style={{marginLeft:'18px',fontSize:'15px',color:'#bfbfc1',fontFamily:'sans-serif',fontStyle:'normal'}}>Undo</i>
          </i>
             </i>
        </div>

        </div>


        <div className="panel panel-default rightDiv">
            <div className="panel panel-default" style={{ height: '10%',borderColor: '#f2f2f4'}}>
            <i className="fa fa-comment-o" aria-hidden="true" style={{fontSize:'20px',top:'30px',left:'30px',color:'#dadfea'}}></i>
        </div>
        <center>
            <ul className="nav nav-tabs nav-stacked" style={{ borderColor: '#f2f2f4'}}>
                <li><img src="avatar.png" className="img-circle friendAvatar" alt="Cinque Terre" width="304" height="236"/></li>
                <li><img src="avatar.png" className="img-circle friendAvatar" alt="Cinque Terre" width="304" height="236"/></li>
                <li><img src="avatar.png" className="img-circle friendAvatar" alt="Cinque Terre" width="304" height="236"/></li>
                <li><img src="avatar.png" className="img-circle friendAvatar" alt="Cinque Terre" width="304" height="236"/></li>
                <li><img src="avatar.png" className="img-circle friendAvatar" alt="Cinque Terre" width="304" height="236"/></li>
                <li><img src="avatar.png" className="img-circle friendAvatar" alt="Cinque Terre" width="304" height="236"/></li>
            </ul>
        </center>
            </div>
            <Modal />
    </div>
);
}
}