import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your email is not verified</h3>
            <h5 className='text-success'>Please verify your email</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                send Verification email again
            </button>
            <ToastContainer />
        </div>
    }

    return children;
};

export default RequireAuth;