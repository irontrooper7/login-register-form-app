import React from 'react';
import { useState } from 'react';
import { BiUser, BiUserPlus } from 'react-icons/bi';
import LoginForm from './forms/LoginForm';
import SingUpForm from './forms/SingUpForm';

export default function Tabs() {
    const [tabstate, setTabState] = useState('login');
    return (
        <>
            <div className="tabs is-boxed m-0">
                <ul>
                    <li onClick={() => setTabState('login')} className={tabstate === 'login' ? "is-active" : ""}>
                        <a>
                            <span className="icon is-small">
                                <BiUser />
                            </span>
                        </a>
                    </li>
                    <li onClick={() => setTabState('singup')} className={tabstate === 'singup' ? "is-active" : ""}>
                        <a>
                            <span className="icon is-small">
                                <BiUserPlus />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='content-tabs'>
                {tabstate === 'login' ? <LoginForm /> : ''}
                {tabstate === 'singup' ? <SingUpForm /> : ''}
            </div>
        </>
    )
}