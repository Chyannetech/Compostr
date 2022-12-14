import React from 'react'
import Map from "../assets/map.png"
import { ImLeaf } from "react-icons/im"
// import { BsCircleFill } from "react-icons/bs"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react"
import "../style/map.css"
import { useNavigate } from 'react-router';

function MainpageMap({setNavBool}) {
    setNavBool(true)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate=useNavigate()

    // const handleClick = event => {
    //     event.target.parentNode.style.height='855px'
    // }

    
  return (
    <div className='divImage'>
      <div className='searchBar'><input className='searchinput' placeholder='Find Compost Site'></input><div className='magnify'></div></div>
    <img className="image" src={Map} alt="bigmap"/>
        <>

        <div class="btn" onClick={handleShow}  >
            <ImLeaf size={35} color='#398f3f' />    
              
        </div>

         <Offcanvas show={show} onHide={handleClose} placement={'bottom'} style={{height:'300px'}}className="offcanvas"  >
        <Offcanvas.Body>
          <div className='modalHead'><div className='modalTitle'>Miami Community Garden ·</div><div className='modalDistance'> 0.2 mi</div></div>
          <div className='stats'><div className='open-closed'>Open</div><span>·</span><div className='times'>8am - 7pm</div><span>·</span><div className='star'></div><div className='rating'>4.5 (7)</div></div>
          <div className='picLinks'><div className='thumb' onClick={()=>{navigate('/info')}}> </div><div className='links'><div className='directions'><div className='dirIcon'></div>Directions</div><div className='site'><div className='webIcon'> </div>Website</div></div></div>
          <div className='someIcons'> </div>
        
        </Offcanvas.Body>
      </Offcanvas>
        </>
         <div class="btn2" onClick={handleShow} >
            <ImLeaf size={35} color='#398f3f' />
        </div>
         <div class="btn3" onClick={handleShow}>
            <ImLeaf size={35} color='#398f3f' />
        </div>
         <div class="btn4" onClick={handleShow}>
            <ImLeaf size={35} color='#398f3f' />
        </div>
        {/* <BsCircleFill className="circle" size={20} color='blue' /> */}
    <div>MainpageMap</div>
    </div>
  )
}

export default MainpageMap