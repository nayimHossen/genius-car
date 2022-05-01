import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';

const SociaLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-100 mb-2'>
                    <img style={{ width: "30px" }} src={google} alt="google" />
                    Google SignIn
                </button>
                <button className='btn btn-info w-100 mb-2'>
                    <img style={{ width: "30px" }} src={facebook} alt="google" />
                    Google SignIn
                </button>
                <button className='btn btn-info w-100 mb-2'>
                    <img style={{ width: "30px" }} src={github} alt="google" />
                    Google SignIn
                </button>
            </div>
        </div>
    );
};

export default SociaLogin;