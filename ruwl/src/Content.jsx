import React from 'react';
import './style/App.css';

export const DownloadContainer = () => {
  const startDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinuxClick = () => {
    alert('Download started for Linux');
    startDownload('https://github.com/meierlink24/ruwl.git');
  };

  const handleWindowsClick = () => {
    alert('Download started for Windows');
    startDownload('https://github.com/meierlink24/ruwl.git');
  };

  return (
    <div className="download-section">
      <div className="download-section-text">
        <h1>How to Install RUWL?</h1>
        <p>RUWL is simple to install. Just download the version compatible with your operating system and follow the setup instructions provided in the documentation.</p>
        
        <h2>Linux</h2>
        <p>Download the Linux version and extract the files. Follow the installation guide to set up the engine on your system.</p>
        
        <div className="download-button">
          <button className="download-button-button" id="linux-button" onClick={handleLinuxClick}>
            Download
          </button>
        </div>
        
        <h2>Windows</h2>
        <p>Download the Windows version and run the installer. Follow the on-screen instructions to complete the installation.</p>
        
        <div className="download-button">
          <button className="download-button-button" id="windows-button" onClick={handleWindowsClick}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export const InformationContainer = () => {
  return (
    <div className="information-section">
      <div className="information-section-text">
        <h1>What is RUWL?</h1>
        <p>RUWL is a 2D game engine written in Rust. It is open-source, allowing you to tweak, customize, and learn from it. It is designed for Rust enthusiasts.</p>
        
        <h2>How Does It Work?</h2>
        <p>RUWL lets you import characters, maps, and items to create your own NPC world. You can define rules for each character, animate them, and generate the necessary code for your game.</p>
      </div>
    </div>
  );
};

export const CreatorContainer = () => {
  return (
    <div className="creator-section">
      <div className="creator-section-text">
        <h1>Who Created RUWL?</h1>
        <p>Hi, I’m Meier. I’m a high school student, and yes, my code is a bit rusty—but hey, it works (probably)!</p>
      </div>
    </div>
  );
};

export const SupportContainer = () => {
  return (
    <div className="support-section">
      <div className="support-section-text">
        <h1>How to Support RUWL?</h1>
        <p>You can support RUWL by contributing on GitHub or leaving a star on the repository. There are plenty of open issues, so it might be a great place for you to start contributing to open-source software.</p>
      </div>
    </div>
  );
};