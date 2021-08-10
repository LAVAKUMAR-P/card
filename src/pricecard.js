import React from "react";


export default function PriceCard(probs){
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-4">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{probs.cardData.planname}</h5>
            <h6 className="card-price text-center">{probs.cardData.price}<span class="period">/month</span></h6>
            <hr/>
            <ul className="text-left">
              <li>{probs.cardData.line1}</li>
              <li>{probs.cardData.line2}</li>
              <li>{probs.cardData.line3}</li>
              <li>{probs.cardData.line4}</li>
              <li style={{opacity:(probs.cardData.planname === "Free") ? 0.6:""}}>{probs.cardData.line5}</li>
              <li style={{opacity:(probs.cardData.planname === "Free") ? 0.6:""}}>{probs.cardData.line6}</li>
              <li style={{opacity:(probs.cardData.planname === "Free") ? 0.6:""}}>{probs.cardData.line7}</li>
              <li style={{opacity:(probs.cardData.planname === "Free" || probs.cardData.planname === "PLUS" ) ? 0.6:""}} >{probs.cardData.line8}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
        </div>
      </div>
    );
}