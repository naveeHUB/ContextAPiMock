import React from "react";

export default function Header(){
    return (
    <header> 
<div id="carouselExampleAutoplaying" className="carousel slide container px-4 px-lg-5 mt-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.apple.com/v/iphone/home/br/images/overview/hero/hero_iphone_15__fano21ho6fqu_large.jpg" className="d-block w-100" alt="img 1" style={{height: "400px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.apple.com/v/iphone-15/c/images/overview/welcome/hero_endframe__e0ajd2ayxqc2_large.jpg" className="d-block w-100" alt="img 2" style={{height: "400px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.apple.com/in/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg" className="d-block w-100" alt="img 3" style={{height: "400px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</header>
) 
}