import './style/App.css'
import { useEffect } from 'react';

export const DownloadContainer = () => {
    useEffect(() => {
        // Get the buttons by their IDs after they're rendered in the DOM
        const linuxButton = document.getElementById('linux-button');
        const windowsButton = document.getElementById('windows-button');

        // Function to start the download
        function startDownload(url) {
            const link = document.createElement('a');
            link.href = url;
            link.download = ''; // You can specify a default filename here if needed
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Linux button click event
        const handleLinuxClick = () => {
            alert('Download started for Linux');
            // Replace with the actual download link for Linux
            const linuxDownloadUrl = 'https://github.com/your-repo/linux-file.zip';
            startDownload(linuxDownloadUrl);
        };

        // Windows button click event
        const handleWindowsClick = () => {
            alert('Download started for Windows');
            // Replace with the actual download link for Windows
            const windowsDownloadUrl = 'https://github.com/your-repo/windows-file.zip';
            startDownload(windowsDownloadUrl);
        };

        // Add event listeners
        if (linuxButton) {
            linuxButton.addEventListener('click', handleLinuxClick);
        }
        
        if (windowsButton) {
            windowsButton.addEventListener('click', handleWindowsClick);
        }

        // Clean up event listeners
        return () => {
            if (linuxButton) {
                linuxButton.removeEventListener('click', handleLinuxClick);
            }
            
            if (windowsButton) {
                windowsButton.removeEventListener('click', handleWindowsClick);
            }
        };
    }, []); // Empty dependency array so it only runs once on mount

    return (
        <div className="download-section">
            <div className="download-section-text">
                
                <h1>How to install RUWL ? </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima necessitatibus officiis quas cumque voluptas, ab nostrum vero fuga, iste sequi consectetur neque quasi non repellat, asperiores facilis. Rerum, sapiente?</p>
                
                <h2>Linux</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ipsa quod excepturi. Veritatis sit inventore odio itaque temporibus magni ullam quae perferendis qui, ipsam dolores? A incidunt non temporibus obcaecati.</p>
                
                <div className="download-button">
                <button className="download-button-button" id="linux-button">Download</button>
                </div>

                <h2>Windows</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                
                <div className="download-button">
                <button className="download-button-button" id="windows-button">Download</button>
                </div>

            </div>
            
        </div> 
    );
};

export const InformationContainer = () => {
    return(
    <div className="information-section">
        <div className="information-section-text">

            <h1>What is RUWL ?</h1>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos? Ratione maxime quia dignissimos blanditiis delectus nobis aliquid aperiam molestias soluta alias? Culpa eos molestias quaerat similique corporis delectus nisi!
            </p>

            <h2>How it works?</h2>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos? Ratione maxime quia dignissimos blanditiis delectus nobis aliquid aperiam molestias soluta alias? Culpa eos molestias quaerat similique corporis delectus nisi!
            </p>
        </div>
    </div>
    );
};

export const CreatorContainer = () => {
    return(
    <div className="creator-section">
        <div className="creator-section-text">

            <h1> Who created RUWL?</h1>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos? Ratione maxime quia dignissimos blanditiis delectus nobis aliquid aperiam molestias soluta alias? Culpa eos molestias quaerat similique corporis delectus nisi!
            </p>

        </div>
    </div>
    );
};

export const SupportContainer = () => {
    return(
    <div className="support-section">
        <div className="support-section-text">

            <h1> How to support RUWL ?</h1>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos? Ratione maxime quia dignissimos blanditiis delectus nobis aliquid aperiam molestias soluta alias? Culpa eos molestias quaerat similique corporis delectus nisi!
            </p>

        </div>
    </div>
    );
};