import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import Modal from '../Modal/Modal';
import './GridTables.css'

function GridTables() {

  const [show, setShow] = useState(false)
  const items = Array.from(Array(8).keys());
  const [tableNum, setTableNum] = useState(0)
  const order = useSelector(state=> state.orderReducer)

  const func = (item) => {
    setTableNum(item)
    setShow(true)
  }

  return (
      <div className='table-container'>
        {items.map((item) => (
          <div key={item} className='table-box' onClick={() => func(item+1)}>
            <div className='number'><h1>T{item+1}</h1></div>
            {/* <div className='status'><p>vacant</p></div> */}
          </div>
        ))}
      <Modal show={show} onClose={() => setShow(false)} tableNumber={tableNum}/>
      </div>
  );
}

export default GridTables;