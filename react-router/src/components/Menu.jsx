import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [activeTab, setActiveTab] = useState('/');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          to={'/'}
          className={`navbar-brand ps-4 ${activeTab === '/' ? 'active' : ''}`}
          onClick={() => handleTabClick('/')}
        >
          <img width="110" height="53" src="./public/image/router_img.png" className="img-fluid" alt="Guvi-blog-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={'/'} className={`nav-link ${activeTab === '/' ? 'active' : ''}`} onClick={() => handleTabClick('/')}>
              All
            </Link>
            <Link to={'/fullStackDevelopment'} className={`nav-link ${activeTab === '/fullStackDevelopment' ? 'active' : ''}`} onClick={() => handleTabClick('/fullStackDevelopment')}>
              Full Stack Development
            </Link>
            <Link to={'/dataScience'} className={`nav-link ${activeTab === '/dataScience' ? 'active' : ''}`} onClick={() => handleTabClick('/dataScience')}>
              Data Science
            </Link>
            <Link to={'/cyberSecurity'} className={`nav-link ${activeTab === '/cyberSecurity' ? 'active' : ''}`} onClick={() => handleTabClick('/cyberSecurity')}>
              Cyber Security
            </Link>
            <Link to={'/career'} className={`nav-link ${activeTab === '/career' ? 'active' : ''}`} onClick={() => handleTabClick('/career')}>
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;