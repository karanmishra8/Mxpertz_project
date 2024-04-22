import React from 'react'

const Hero = () => {
  return (
    <div className='container row mx-auto mt-5 '>

      <div className='col-lg-3'>
         <button className="btn btn-primary rounded-pill fw-bold">New</button>
      </div>
      <div className='col-lg-3'>
      <button className="btn btn-success rounded-pill fw-bold">In progress</button>
      </div>
      <div className='col-lg-3'>
      <button className="btn btn-warning text-white rounded-pill fw-bold">Completed</button>
      </div>
      <div className='col-lg-3 mb-5'>
      <button className="btn btn-dark rounded-pill fw-bold">Clear all</button>
      </div>

    </div>
  )
}

export default Hero