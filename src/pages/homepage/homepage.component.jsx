import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/direcoty.component';

const HomePage = () => (
    //it does not need any lifecycle or need to store any states so we make it a functional component
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;