import React from 'react';
import './notifications.css';

const NotificationsDropdown = () => {
    const notifications = [
        { title: "Extended break Time", description: "Tick-tock! 50 minutes gone. Just a 10...", date: "27 Aug, 2024", time: "03:04 PM" },
    ];

    return (
        <div className="profile_notification">
            <div className="dropdown">
                <img src="assets/img/dummy/displaypic.jpeg" alt="Jhon Doe" className="dropdown-toggle header-profile-pic rounded-5" data-bs-toggle="dropdown" aria-expanded="false" />
                <span className="badge bg-danger rounded-circle notification-badge">3</span>
                <ul className="dropdown-menu dropdown-menu-end notification-dropdown">
                    <li className="dropdown-header">Notifications</li>
                    {notifications.map((notification, index) => (
                        <li key={index} className="dropdown-item">
                            <div className="notification-item">
                                <div className="notification-icon">
                                    <i className="fa fa-bell"></i>
                                </div>
                                <div className="notification-content">
                                    <h6>{notification.title}</h6>
                                    <p>{notification.description}</p>
                                    <small>{notification.date} <span>{notification.time}</span></small>
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className="dropdown-footer">
                        <a href="/notifications" className="text-decoration-none">View all</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NotificationsDropdown;
