import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import Header from '../components/header/Header';
import './UserProfile.css';
import { format } from 'date-fns'; 
const formatDate = (dateString) => {
    return format(new Date(dateString), 'yyyy-MM-dd');
};

let myurl = process.env.REACT_APP_COMMONURL;


const UserProfile = () => {
    const { user } = useContext(UserContext);
    const [coverPhoto, setCoverPhoto] = useState('https://printertales.com/public/upload/image/667beb56b6aa3_home-banner.webp');
    const [profilePhoto, setProfilePhoto] = useState('default-profile-photo-url');
    const [activeTab, setActiveTab] = useState('Profile');
    const [personal_email, setPersonalEmail] = useState('');
    const [dob, setDob] = useState('');
    const [personal_contact, setPersonalContact] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [github, setGithub] = useState('');

    // get api from userinfo
    // console.log(personal_email , dob ,personal_contact,facebook,twitter ,linkedin,instagram,github)

    useEffect(() => {
        axios.get(`${myurl}/api/user_information`)
            .then((response) => {
                let fresult = response?.data.filter((item) => {
                    return item?.emp_id === user?.emp_id;
                });
                setPersonalEmail(fresult[0]?.persional_email)
                setDob(fresult[0]?.dob ? formatDate(fresult[0]?.dob) : "")
                setPersonalContact(fresult[0]?.personal_contact)
                setFacebook(fresult[0]?.facebook)
                setTwitter(fresult[0]?.twitter)
                setLinkedin(fresult[0]?.linkedin)
                setInstagram(fresult[0]?.instagram)
                setGithub(fresult[0]?.github)
                // console.log()
            })
    }, [user])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let projectid = user.emp_id;
            const dataValues = {
                persional_email:personal_email || null,
                dob: dob || null,
                personal_contact: personal_contact || null,
                facebook: facebook || null,
                twitter: twitter || null,
                linkedin: linkedin || null,
                instagram: instagram || null,
                github: github || null
            };
            const response = await axios.patch(`${myurl}/api/edit_user_information/${projectid}`, dataValues);
            if (response.data.Message === "Success") {
                console.log('Data posted successfully:', response.data , dataValues);
                alert('Data posted successfully');
                window.location.reload();
            } else {
                console.log('Error in response:', response.data);
            }

        } catch (error) {
            console.error('Error posting data:', error);
        }
    };




    



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
            <div className="settings-container ">
                <h2 className="text-center fs-3 pt-5 fw-semibold">Profile Settings</h2>
                <div className="tabs d-flex justify-content-start mb-4">
                    <a href="#"
                        className={activeTab === 'Profile' ? 'active' : ''}
                        onClick={() => setActiveTab('Profile')}>
                        Profile
                    </a>
                    <a href="#"
                        className={activeTab === 'Password' ? 'active' : ''}
                        onClick={() => setActiveTab('Password')}>
                        Change Password
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
                        <form onSubmit={handleSubmit}>
                            {/* Profile Form Fields */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-2 ">
                                    <label htmlFor="name" className="form-label mb-0">Name</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary " id="name" placeholder="Name" disabled value={user.emp_name} />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="employee-id" className="form-label mb-0">Employee ID</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="employee-id" placeholder="Employee ID" value={user.emp_id} disabled />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="personal-email" className="form-label mb-0">Personal Email ID</label>
                                    <input type="email" className="form-control" id="personal-email" placeholder="Personal Email ID" value={personal_email} onChange={(e) => { setPersonalEmail(e.target.value) }} />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="official-email" className="form-label mb-0">Official Email ID</label>
                                    <input type="email" className="form-control bg-body-secondary text-body-secondary" id="official-email" placeholder="Official Email ID" value={user.emp_email} disabled />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="dob" className="form-label mb-0">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" placeholder="Date of Birth" value={dob} onChange={(e) => { setDob(e.target.value) }} />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="mobile-number" className="form-label mb-0">Personal Mobile Number</label>
                                    <input type="tel" className="form-control" id="mobile-number" placeholder="Personal Mobile Number" value={personal_contact} onChange={(e) => { setPersonalContact(e.target.value) }} />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="designation" className="form-label mb-0">Designation</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="designation" placeholder="Designation" disabled />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="department" className="form-label mb-0">Department</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="department" placeholder="Department" value={user.department} disabled />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="reporting-to" className="form-label mb-0">Reporting To</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="reporting-to" placeholder="Reporting To" value={user.reporting_to} disabled />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="reporting-designation" className="form-label mb-0">Reporting Person Designation</label>
                                    <input type="text" className="form-control bg-body-secondary text-body-secondary" id="reporting-designation" placeholder="Reporting Person Designation" value={user.designation} disabled />
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
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3"  >
                                <label htmlFor="Facebook.social" className="form-label">Facebook URL</label>
                                <input type="url" className="form-control" id="Facebook.social" value={facebook} onChange={(e) => { setFacebook(e.target.value) }} />
                            </div>
                            <div className="mb-3"  >
                                <label htmlFor="Twitter.social" className="form-label">Twitter URL</label>
                                <input type="url" className="form-control" id="Twitter.social" value={twitter} onChange={(e) => { setTwitter(e.target.value) }} />
                            </div>
                            <div className="mb-3"  >
                                <label htmlFor="LinkedIn.social" className="form-label">LinkedIn URL</label>
                                <input type="url" className="form-control" id="LinkedIn.social" value={linkedin} onChange={(e) => { setLinkedin(e.target.value) }} />
                            </div>
                            <div className="mb-3"  >
                                <label htmlFor="Instagram.social" className="form-label">Instagram URL</label>
                                <input type="url" className="form-control" id="Instagram.social" value={instagram} onChange={(e) => { setInstagram(e.target.value) }} />
                            </div>
                            <div className="mb-3"  >
                                <label htmlFor="GitHub.social" className="form-label">GitHub URL</label>
                                <input type="url" className="form-control" id="GitHub.social" value={github} onChange={(e) => { setGithub(e.target.value) }} />
                            </div>
                            <button type="submit" className="btn btn-primary">Save Social Profiles</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
