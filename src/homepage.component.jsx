import React from 'react';
import App from './App';
import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="comntent">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">SHOP NOW</span>                  
                </div>
            </div>
            <div className="menu-item">
                <div className="comntent">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">SHOP NOW</span>                  
                </div>
            </div>
            <div className="menu-item">
                <div className="comntent">
                    <h1 className="title">SNEEKERS</h1>
                    <span className="subtitle">SHOP NOW</span>                  
                </div>
            </div>
            <div className="menu-item">
                <div className="comntent">
                    <h1 className="title">WEMENS</h1>
                    <span className="subtitle">SHOP NOW</span>                  
                </div>
            </div>
            <div className="menu-item">
                <div className="comntent">
                    <h1 className="title">MANS</h1>
                    <span className="subtitle">SHOP NOW</span>                  
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;