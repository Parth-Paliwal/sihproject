import React from 'react'
import "./Home.css";
import cover1 from './images/cover1.jpg';
import cover2 from './images/cover2.jpg';
import cover3 from './images/cover3.jpg';
const crop = require('./images/crop.png');
const fertilizer = require('./images/fertilizer.png');
const home = require('./images/home.png');
const logo = require('./images/logo.png');
const notify = require('./images/notify.png');
const organic = require('./images/organic.png');
const weather = require('./images/weather.png');

const Home = () => {
    
  return (
    <>
    <div>
    <nav>
      <div className="left">
        <img src={logo} alt="MP Kisan Logo" />
        <p>Agrovation</p>
      </div>
      <div className="right">
        <img className="home" src={home} alt="Home" />
        <img className="notification" src={notify} alt="Notifications" />
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
      </div>
    </nav>
    <div className="moving-text">
        <p>Stay updated with the latest agricultural news, schemes, weather forecasts, expert tips on crop management, organic farming techniques, and sustainable agriculture practices! Empowering farmers for a better tomorrow.</p>
    </div>

    <div className="parentcontainer">
      <div className="container">
        <div className="cardhold" id="card1">
          <div className="overlay">
            <h4>Fertilizers</h4>
            <p>Choosing the best organic fertilizer in place of inorganic fertilizers.</p>
          </div>
        </div>
        <div className="cardhold" id="card2">
          <div className="overlay">
            <h4>Weather Updates</h4>
            <p>Stay informed with real-time weather forecasts for your crops.</p>
          </div>
        </div>
        <div className="cardhold" id="card3">
          <div className="overlay">
            <h4>New Schemes</h4>
            <p>Stay up to date with beneficial government schemes as well as new updates for farmers and rural development.</p>
          </div>
        </div>
        </div>
        <div className="functions">
          <div className="card">
            <div className="card-item">
              <div className="imgpic">
                <img src={fertilizer} alt="Fertilizer" />
              </div>
              <a href="/fertilizer"><button>Fertilizer</button></a>
              
            </div>
            <div className="card-item">
              <div className="imgpic">
                <img src={crop} alt="Crop" />
              </div>
              <button>Crop</button>
            </div>
            <div className="card-item">
              <div className="imgpic">
                <img src={weather} alt="Weather" />
              </div>
              <button>Weather</button>
            </div>
            <div className="card-item">
              <div className="imgpic">
                <img src={organic} alt="Gobar Plant" />
              </div>
              <button>Organic</button>
            </div>
          </div>
      </div>
      <div className="content">
      <div className="up-content" id="slider">
        <img src={cover1} alt="" className="slider-image" />
        <img src={cover2} alt="" className="slider-image" />
        <img src={cover3} alt="" className="slider-image" />
      </div>
    </div>
    <div className="footer">
        <p>Copyright ©2020-21 FW&AD. All Rights Reserved.</p>
        <p>Jaypee University of Technology Guna</p>
        <p>Last Updated on 07-Sep-2024</p>
    </div>
    </div>

    </div>
    </>
  )
}

export default Home
