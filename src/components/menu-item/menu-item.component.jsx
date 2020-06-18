import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div style={{backgroundImage: `url(${imageUrl})`}}
    className={`menu-item ${size} `}>
        <div className='content'>
            <h1 className='title'>{title} </h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);
export default MenuItem;

//it is exactly the same to pass props.title, but we want to destruct it since we will have bg img in propos. We will pull title from the props