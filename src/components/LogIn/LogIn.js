
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {


    return (
        <div className='form-container'>
            <h1>login</h1>
            <form>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='from-submti' type="submit" value="login" />
            </form>
            <p>
                New To Ema-Jone <Link to='/signup'>create an new account</Link>
            </p>
        </div>
    );
};

export default LogIn;