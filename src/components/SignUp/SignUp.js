import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfromPassword, setComfromPassword] = useState('');
    const [error, setError] = useState('');



    const handalerEmail = (event) => {
        setEmail(event.target.value);
    };
    const handalerPassword = (event) => {
        setPassword(event.target.value);
    };

    const handelComfromPassword = (event) => {
        setComfromPassword(event.target.value);
    }
    const handelCreateUser = event => {
        event.preventDefault();
        if (password !== comfromPassword) {
            setError('your to passworld');
            return;
        }
    }


    return (
        <div className='form-container'>
            <h1>Sign Up</h1>
            <form onSubmit={handelCreateUser}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handalerEmail} type="email" name='email' required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handalerPassword} type="password" name="password" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">comfrom Password</label>
                    <input onBlur={handelComfromPassword} type="comfrom-password" name="comfrom-password" id="" required />
                </div>
                <input className='from-submti' type="submit" value="Sign Up" />
                <p>
                    {error}
                </p>
            </form>
            <p>
                Already Have an Account <Link to='/login'>login</Link>
            </p>
        </div>
    );
};

export default SignUp;