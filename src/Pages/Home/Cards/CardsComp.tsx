import React from 'react';
import './CardsComp.css';

export default class Cards extends React.Component{
render(){
  return(
    <>

    <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
      
    </div>
      </div>

        <div className="row">
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">Card One</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
   
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">Card Two</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">Card Three</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
     

    </div>
    </>
  )
}
}


