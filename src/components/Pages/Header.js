import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const homeBtn = () => {
        navigate('/')
    }

    return (
        <div>
            <h4 className='text-3xl font-semibold text-red-400 p-10'>CRUD app with React.js, Node.js</h4>
            <button
                onClick={homeBtn}
                className='btn btn-sm'>Home</button>
        </div>
    );
};

export default Header;