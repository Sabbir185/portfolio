import React from 'react';
import sundarban from '../../images/projects/3.png';
import slider from '../../images/projects/9.png';
import food from '../../images/projects/8.png';
import './style.css';

const CardShape = () => {
    
    return (
        <div className="card-deck mt-5 mb-5 pt-5 pb-3 responsive">
            <div className="card card-container">
                <div className="m-2 card-image tans-effect">
                    <img src={sundarban} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="card-body card-description">
                    <h5 className="card-title">Sundarban Express</h5>
                    <p className="card-text text-justify"> 
                        Sundarban express provides 4 types of transport services. At this time Bike, Bus, Car & also Train transports are available.
                    </p>
                    <a href={`https://${'sundarban-express.web.app/'}`} target='_blank' rel="noreferrer" className="text-decoration-none"> <button className="btn btn-success mt-3 ml-auto d-block">view project</button> </a>
                </div>
            </div>
            <div className="card card-container">
                <div className="m-2 card-image tans-effect">
                    <img src={slider} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="card-body card-description">
                    <h5 className="card-title">Image Slider</h5>
                    <p className="card-text text-justify">
                        In image slider, you can search any types of images. Select multiple images and now set slider duration(ex. 1000 ms). Click create slider.
                    </p>
                    <a href={`https://${'sabbir185.github.io/JavaScript/API-basic-concept/fancy-slider-bug-fixing/index.html'}`} target='_blank' rel="noreferrer" className="text-decoration-none"> <button className="btn btn-success mt-3 ml-auto d-block">view project</button> </a>
                </div>
            </div>
            <div className="card card-container">
                <div className="m-2 card-image tans-effect">
                    <img src={food} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="card-body card-description">
                    <h5 className="card-title">Cooking Master</h5>
                    <p className="card-text text-justify">
                        Cooking master your restaurant ! feel free to search your favorite food item. See details. You may search by a character. 
                    </p>
                    <a href={`https://${'sabbir185.github.io/JavaScript/API-basic-concept/cooking-master/index.html'}`} target='_blank' rel="noreferrer" className="text-decoration-none"> <button className="btn btn-success mt-3 ml-auto d-block">view project</button> </a> 
                </div>
            </div>
        </div>
    );
};

export default CardShape;