import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";


const Api = () => {
  const [sciFiItems, setSciFiItems] = useState([]);
  // const navigate = useNavigate();
  //  const handleRoute=()=>{
  //   navigate('/next');
  //  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://child.onrender.com/api/sciencefiction");
        console.log(response.data);
        setSciFiItems(response.data); // Assuming response.data is an array of items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div className=" p-4 ">
      <h1 className="text-center text-light">Science  <span className='text-primary'> Fiction </span> Stories</h1>
      <div className="row row-cols-1 row-cols-md-3 gx-4 gy-4">
        {sciFiItems.length === 0 ? (
          <p>Loading...</p>
        ) : (
          sciFiItems.map((item) => (
            <div key={item._id} className="col mb-3">
              <div className="card bg-primary px-2 mx-5 pt-2" style={{ maxWidth: '350px' }}>
                <img
                  src={`https://ik.imagekit.io/dev24/${item.Image}`}
                  className="card-img-top"
                  alt="Image is not available"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{item.Title}</h5>
                  <button className="btn btn-light rounded-pill fw-bold">Status: {item.Status}</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
     
    </div>
     




  );
};

export default Api;
