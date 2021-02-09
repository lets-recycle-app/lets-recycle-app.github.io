import React from 'react';
import ad1 from '../../images/aoLapTopAd1.png';
import ad2 from '../../images/aoBusAd1.png';
import ad3 from '../../images/aoWashAd1.png';
import './Sidebar.css';

function Sidebar() {
  return (
        <div className="side-column">
            <p>
                <a href="https://ao.com" target="_blank" rel="noreferrer">
                    <img src={ad1} alt="advertisement1" />
                </a>
            </p>
            <p>
                <a href="https://ao.com" target="_blank" rel="noreferrer">
                    <img src={ad2} alt="advertisement2" />
                </a>
            </p>
            <p>
                <a href="https://ao.com" target="_blank" rel="noreferrer">
                    <img src={ad3} alt="advertisement3" />
                </a>
            </p>
        </div>
  );
}

export default Sidebar;
