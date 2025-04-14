import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="about-container">
            <h1 className="about-heading">About Our Project</h1>
            <p className="about-intro">
                Our project is a full-stack note-taking application designed to streamline the process of managing your personal notes securely. 
                Users can create, view, update, and delete their notes. 
            </p>
            <p className="about-highlight">
                This app leverages modern web development technologies to provide a seamless user experience.
            </p>
            <button className="about-btn" onClick={handleToggleDetails}>
                {showDetails ? 'Hide Details' : 'Learn More'}
            </button>
            {showDetails && (
                <div className="about-details">
                    <h2>Project Features</h2>
                    <ul>
                        <li>🔐 User Authentication (Signup/Login)</li>
                        <li>📝 Create, Edit, and Delete Notes</li>
                        <li>🚀 Fast and Responsive UI</li>
                        <li>📦 Full-stack architecture (React, Node.js, MongoDB)</li>
                        <li>⚡ State management with React Context API</li>
                        <li>🔔 Real-time alerts and notifications</li>
                    </ul>
                    
                    <h2>Technology Stack</h2>
                    <ul>
                        <li>⚛️ Frontend: React.js, TailwindCSS, Bootstrap</li>
                        <li>🖥 Backend: Node.js, Express.js, MongoDB</li>
                        <li>📂 State Management: React Context API</li>
                        <li>🔗 API Integration for authentication and note management</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default About;
