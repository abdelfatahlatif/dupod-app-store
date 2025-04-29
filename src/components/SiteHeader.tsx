import React from 'react';
import { Link } from 'react-router-dom';
//import './SiteHeader.css'; // Optional for extra styling if needed
import profileImage from '../assets/dupodlogo1Asset-2.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';



const SiteHeader: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className="navbar navbar-expand-lg navbar-light light-background  mb-2">
            <div className="container d-flex justify-content-between align-items-center">

                {/* Left Section: Logo and Company Title */}
                <div className="d-flex align-items-center">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img
                            src={profileImage} // Replace with your logo URL
                            alt="Dupod"
                            className="me-3"
                            width={150}
                            height={50}
                        />
                        <span className="h5 mb-0 fw-bold">Dupod Digital App Store</span>
                    </Link>
                </div>

                {/* Right Section: Profile */}
                <div className="d-flex align-items-center">
                    <Button
                        title='Settings'
                        icon="pi pi-cog"
                        className="p-button-text p-button-plain p-0 m-2"
                        onClick={() => navigate('/admin/apps')}
                        style={{ fontSize: '1.5rem', marginLeft: '10px', border: '0' }}
                    />

                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with profile photo URL
                        alt="Profile"
                        className="rounded-circle me-2"
                        width={40}
                        height={40}
                    />
                    <span className="fw-semibold">Abdelfatah Abdellatif</span>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
