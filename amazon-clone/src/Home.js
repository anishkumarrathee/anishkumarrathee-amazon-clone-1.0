import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home__container">

            <img 
                className="home__image"
                src="https://www.filmcompanion.in/wp-content/uploads/2021/06/Lead_Moonlight-2016-1.jpg"
                alt=""
            />

            <div className="home__row">
                <Product 
                id="1234"
                tittle="Drone Shipping"
                price={19.99}
                image="https://st3.depositphotos.com/5988232/14642/v/1600/depositphotos_146422883-stock-illustration-drone-for-delivery-banner.jpg"
                rating={4}
                />
                <Product 
                id="1234567"
                tittle="Military"
                price={100}
                image="https://www.army-technology.com/wp-content/uploads/sites/3/2019/06/4l-image-Predator-B-MQ-9-Reaper.jpg"
                rating={5}
                />
                
            </div>
            
            <div className="home__row">
                <Product
                id="123456"
                tittle="Quadcopter Drone Combo Kit for beginner"
                price={150}
                image="https://www.flyrobo.in/image/cache/wp/gj/combo/Desktop-550x550.webp"
                rating={2}
                />
                <Product 
                id="12345"
                tittle="Phantom 4"
                price={600}
                image="https://cdn.dronefly.com/media/wysiwyg/infographic-drone-v3-with-glossary-final-v4CUT.jpg"
                rating={5}
                />
                <Product 
                id="123457"
                tittle="10850 7kw 25kg thrust brushless motor for drone"
                price={200}
                image="http://sc04.alicdn.com/kf/H57a0974820d640f6b7a54412683570ecl.jpg"
                rating={3}
                />
            </div>

            <div className="home__row">
                <Product 
                id="1234568"
                tittle="DJI Drone Motor Brushless DC Motor NFP-BL-2216"
                price={15.00}
                image="https://nfpshop.com/wp-content/uploads/2018/11/DJI-DRONE-MOTOR-BLDC-BRUSHLESS-DC-MOTOR-NFP-BL-2216-0.jpg"
                rating={4}
                />
                
            </div>

          </div>
        </div>
    )
}

export default Home
