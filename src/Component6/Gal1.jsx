import React from 'react';
import sp1 from '../assets/sp1.png';
import sp2 from '../assets/sp2.png';

function Gal1() {
  return (
    <>
    <div>
        <img src={sp1} alt="Gal-1" loading='lazy'/>
        <img src={sp2} alt="Gal-2" loading='lazy'/>
    </div>
    </>
  )
}

export default Gal1