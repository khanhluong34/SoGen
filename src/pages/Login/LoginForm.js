import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/loginform.css';

const LoginForm = () => {
  return (
    <section>
      <div className="login-box">
        <div className="form-value">
          <form clasName="login-form" action="">
            <h2>Login</h2>

            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label>Password</label>
            </div>

            <div className="forget">
              <label>
                <input type="checkbox" />
                Remember Me  
                <a style={{ marginLeft: '70px' }} href="">Forget Password</a>
              </label>
            </div>

            <Link to="/home">  
                <button>Log in</button>
            </Link>

            <div className="register">
              <p>
                Don't have an account? <a href="">Register</a>
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
