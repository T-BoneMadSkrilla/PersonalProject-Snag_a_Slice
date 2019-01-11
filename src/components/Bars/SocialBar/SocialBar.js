import React from 'react';
import './SocialBar.css';

export default function SocialBar(){
    return(
        <div className = "SocialBar_Container">
            <a className = "Facebook_Social" title = "Visit us on Facebook!" href = "https://www.facebook.com/" ></a>
            <a className = "Twitter_Social" title = "Visit us on Twitter!" href = "https://twitter.com/?lang=en" ></a>
            <a className = "Instagram_Social" title = "Visit us on Instagram!" href = "https://www.instagram.com/?hl=en" ></a>
            <a className = "SnapChat_Social" title = "Visit us on SnapChat!" href = "https://www.snapchat.com/" ></a>
        </div>
    )
};

// This component will be consistent throughout the website.