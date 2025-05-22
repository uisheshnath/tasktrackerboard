import React, { useContext, useState } from 'react';
import UserContext from './UserContext';
import Header from '../components/header/Header';
import './UserProfile.css';

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const [coverPhoto, setCoverPhoto] = useState('default-cover-photo-url');
    const [profilePhoto, setProfilePhoto] = useState('default-profile-photo-url');
    const [activeTab, setActiveTab] = useState('Profile');

    const handleFileUpload = (event, setPhoto) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleCoverPhotoDelete = () => setCoverPhoto('default-cover-photo-url');

    if (!user) return <p>Loading...</p>;

    const getInitial = (name) => name.charAt(0).toUpperCase();

    return (
        <div className="container-fluid">
            <Header />
            {/* <h2 className="text-center">User Profile</h2>
            <div className="user-info mb-4">
                <p><b>Name:</b> {user.emp_name}</p>
                <p><b>ID:</b> {user.emp_id}</p>
                <p><b>Email:</b> {user.emp_email}</p>
                <p><b>Reporting To:</b> {user.reporting_to}</p>
                <p><b>Designation:</b> {user.designation}</p>
                <p><b>Department:</b> {user.department}</p>
            </div> */}

            <div className="settings-container">
                <h2 className="text-center">Settings</h2>
                <div className="tabs d-flex justify-content-start mb-4">
                    <a href="#" 
                       className={activeTab === 'Profile' ? 'active' : ''} 
                       onClick={() => setActiveTab('Profile')}>
                        Profile
                    </a>
                    <a href="#" 
                       className={activeTab === 'Password' ? 'active' : ''} 
                       onClick={() => setActiveTab('Password')}>
                        Password
                    </a>
                    <a href="#" 
                       className={activeTab === 'SocialProfile' ? 'active' : ''} 
                       onClick={() => setActiveTab('SocialProfile')}>
                        Social Profile
                    </a>
                </div>

                {activeTab === 'Profile' && (
                    <div className="profile-section position-relative mb-5">
                        <div className="cover-photo position-relative">
                            <img src={coverPhoto} alt="Cover Photo" className="cover-photo-img img-fluid" />
                            <input type="file" id="cover-upload" onChange={(e) => handleFileUpload(e, setCoverPhoto)} style={{ display: 'none' }} />
                            <button className="delete-btn" onClick={handleCoverPhotoDelete}>&#128465;</button>
                            <label htmlFor="cover-upload" className="upload-btn d-flex align-items-center">
                                <span>&#128247;</span> Update Cover Photo
                            </label>
                        </div>
                        <div className="profile-photo position-absolute rounded-circle">
                            {profilePhoto === 'default-profile-photo-url' ? (
                                <div className="initial-placeholder">
                                    {getInitial(user.emp_name)}
                                </div>
                            ) : (
                                <img src={profilePhoto} alt="Profile Photo" className="profile-photo-img img-fluid rounded-circle" />
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'Profile' && (
                    <div className="profile-form">
                        <form>
                            {/* Profile Form Fields */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-2 ">
                                    <label htmlFor="name" className="form-label mb-0">Name</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary " id="name" placeholder="Name" disabled value={user.emp_name}/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="employee-id" className="form-label mb-0">Employee ID</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="employee-id" placeholder="Employee ID" value={user.emp_id} disabled/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="personal-email" className="form-label mb-0">Personal Email ID</label>
                                    <input type="email" className="form-control" id="personal-email" placeholder="Personal Email ID" />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="official-email" className="form-label mb-0">Official Email ID</label>
                                    <input type="email" className="form-control bg-body-secondary text-body-secondary" id="official-email" placeholder="Official Email ID" value={user.emp_email} disabled/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="dob" className="form-label mb-0">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" placeholder="Date of Birth" />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="mobile-number" className="form-label mb-0">Personal Mobile Number</label>
                                    <input type="tel" className="form-control" id="mobile-number" placeholder="Personal Mobile Number" />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="designation" className="form-label mb-0">Designation</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="designation" placeholder="Designation"  disabled/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="department" className="form-label mb-0">Department</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="department" placeholder="Department" value={user.department} disabled/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="reporting-to" className="form-label mb-0">Reporting To</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="reporting-to" placeholder="Reporting To" value={user.reporting_to} disabled/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="reporting-designation" className="form-label mb-0">Reporting Person Designation</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="reporting-designation" placeholder="Reporting Person Designation" value={user.designation} disabled/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                )}

                {activeTab === 'Password' && (
                    <div className="password-form">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="current-password" className="form-label">Current Password</label>
                                <input type="password" className="form-control" id="current-password" placeholder="Current Password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="new-password" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="new-password" placeholder="New Password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Change Password</button>
                        </form>
                    </div>
                )}

                {activeTab === 'SocialProfile' && (
                    <div className="social-profile-form">
                        <form>
                            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((platform, index) => (
                                <div className="mb-3" key={index}>
                                    <label htmlFor={platform.toLowerCase()} className="form-label">{platform} URL</label>
                                    <input type="url" className="form-control" id={platform.toLowerCase()} placeholder={`${platform} URL`} />
                                </div>
                            ))}
                            <button type="submit" className="btn btn-primary">Save Social Profiles</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
