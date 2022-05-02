import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../images/social/google.png';

const SociaLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    let showError;
    if (error) {
        showError = <p className='text-danger'>Error: {error.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {showError}
            <div>
                <button className='btn btn-info w-100 mb-2' onClick={() => signInWithGoogle()}>
                    <img style={{ width: "30px" }} src={google} alt="google" />
                    Google SignIn
                </button>
            </div>
        </div>
    );
};

export default SociaLogin;