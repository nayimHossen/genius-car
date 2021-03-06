import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SociaLogin from '../SocialLogin/SociaLogin';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    if (token) {
        navigate('/home')
    }

    let showError;
    if (error) {
        showError = <p className='text-danger'>Error: {error.message}</p>
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2>Register</h2>
            <PageTitle title="Register" />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className={agree ? "text-primary" : "text-danger"} controlId="formBasicCheckbox" id='terms'>
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? "text-primary" : "text-danger"} label="Accept Our terms and condition" />
                </Form.Group>
                {loading && "Loading..."}
                <Button variant="primary" type="submit" disabled={!agree}>
                    Register
                </Button>
            </Form>
            {showError}
            <p>have an account ? <Link to="/login">Login</Link></p>
            <SociaLogin></SociaLogin>
        </div>
    );
};

export default Register;