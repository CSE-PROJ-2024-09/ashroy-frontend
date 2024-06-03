// src/Register.js
import React, { useEffect, useState } from 'react';
import loginImage from '../assets/images/login-image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (uid) {
          navigate('/');
        } else {
          navigate('/register');
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate('/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className='mt-5 h-75'>
      <div className='row justify-content-md-center h-100'>
        <div className='col-md-6 d-flex  justify-content-center align-items-center'>
          <img src={loginImage} width='100%' />
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <div className='card w-100 p-4 border-dark border-2'>
            <h2 className='text-center'>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-group mb-3'>
                <label htmlFor='formBasicEmail'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='formBasicEmail'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='formBasicPassword'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='formBasicPassword'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type='submit' className='btn btn-dark mt-3'>
                Register
              </button>
            </form>
            <p className='mt-3 text-muted'>
              Already have an account? <Link to='/login'>Login here.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
