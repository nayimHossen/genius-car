import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SociaLogin from '../SocialLogin/SociaLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, forgetError] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    let showError;
    if (error || forgetError) {
        showError = <p className='text-danger'>Error: {error?.message} {forgetError?.message}</p>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email send you inbox")
        }
        else {
            toast("Please enter you email address")
        }
    }

    return (
        <div className='container w-50 mx-auto' style={{ height: "90vh" }}>
            <h2>Login</h2>
            <PageTitle title="Login" />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                {loading && "Loading..."}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {showError}
            <p>New to genius car ? <Link to="/register">Create an account</Link></p>
            <p>Forget Password ? <button className='btn btn-link' onClick={resetPassword}>Reset Password</button></p>
            <SociaLogin></SociaLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;