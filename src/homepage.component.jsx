import React from 'react';

const HomePage = () => (
    //it does not need any lifecycle or need to store any states so we make it a functional component
    <div className='homepage'>
        <div className='directory-menue'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='titile'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;