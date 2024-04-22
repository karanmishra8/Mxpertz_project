import React from 'react'
import Api from './Api'

const Next = () => {
    return (
        <div>
            <h1 className='text-center mt-5 fw-bold'> <span className='text-primary'>The lost city</span> <span className='text-light'>of future Earth</span></h1>
            <div className='container row mx-auto mt-5  '>

                <div className='col-lg-4 px-5'>
                    <button className="btn btn-primary rounded-pill fw-bold">Word explorer</button>
                </div>
                <div className='col-lg-4 px-5'>
                    <button className="btn btn-success rounded-pill fw-bold">Story adventure</button>
                </div>
                <div className='col-lg-4 px-5'>
                    <button className="btn btn-warning rounded-pill fw-bold">Brain quest</button>
                </div>
            </div>


            <div className='row'>
                <div className='col-md-3 mx-5 mt-5'>
                    <div class="card">
                        <h5 class="card-title text-center fs-4 text-secondary fw-bold">Correction</h5>
                        <p class="card-text  text-dark text-center">Some details about corrections.</p>
                        <img src="https://varthana.com/school/wp-content/uploads/2023/05/B369.jpg" alt="" />
                        <p class="card-text bg-dark text-light p-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
                <div className='col-md-8 mx-0'>
                    <Api />
                </div>
            </div>

        </div>
    )
}

export default Next