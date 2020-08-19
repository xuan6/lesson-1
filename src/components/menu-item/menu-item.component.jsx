import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`menu-item ${size} `} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div style={{backgroundImage: `url(${imageUrl})`}}
        className = 'background-image'/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()} </h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);
export default withRouter(MenuItem);

//it is exactly the same to pass props.title, but we want to destruct it since we will have bg img in propos. We will pull title from the props