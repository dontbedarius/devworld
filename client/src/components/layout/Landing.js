import axios from 'axios';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

export const Landing = () => {
  const [regData, regFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [logData, logFormData] = useState({
    logEmail: '',
    logPassword: '',
  });

  const { name, email, password, password2 } = regData;
  const { logEmail, logPassword } = logData;

  function handleRegister(e) {
    const { name, value } = e.target;
    regFormData(prevValue => ({ ...prevValue, [name]: value }));
  }

  const handleLogin = e =>
    logFormData({ ...logData, [e.target.name]: e.target.value });

  const registerSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password do not match');
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          header: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post('/api/users', body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  // const loginText = document.querySelector('.title-text .login');
  // const loginForm = document.querySelector('form.login');
  // const loginBtn = document.querySelector('label.login');
  // const registerBtn = document.querySelector('label.register');
  // const registerLink = document.querySelector('form .register-link a');

  // registerBtn.onclick = () => {
  //   loginForm.style.marginLeft = '-50%';
  //   loginText.style.marginLeft = '-50%';
  // };
  // loginBtn.onclick = () => {
  //   loginForm.style.marginLeft = '0%';
  //   loginText.style.marginLeft = '0%';
  // };
  // registerLink.onclick = () => {
  //   registerBtn.click();
  //   return false;
  // };

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <div className='row'>
            <div className='column'>
              <div className='home-logo' alt='DevWorld'></div>
              <h1 className='x-large'>DevWorld</h1>
              <p className='lead'>
                A social platform for web developers to share posts and get help
                from others developers
              </p>
            </div>
            <div className='column'>
              <div className='form-box'>
                <div className='title-text'>
                  <div className='title login'>Login</div>
                  <div className='title register'>Register</div>
                </div>
                <div className='form-container'>
                  <div className='button-box'>
                    <input type='radio' name='slide' id='login' checked />
                    <input type='radio' name='slide' id='register' />
                    <label for='login' className='slide login'>
                      Login
                    </label>
                    <label for='register' className='slide register'>
                      Register
                    </label>
                    <div className='slider-tab'></div>
                  </div>
                  <div className='form-inner'>
                    <form id='login' className='login'>
                      <div className='alert alert-danger'>
                        Invalid credentials
                      </div>
                      <div className='form-group'>
                        <input
                          type='email'
                          placeholder='Email Address'
                          name='logEmail'
                          value={logEmail}
                          onChange={handleLogin}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='password'
                          placeholder='Password'
                          name='logPassword'
                          value={logPassword}
                          onChange={handleLogin}
                          required
                        />
                      </div>
                      <input
                        type='submit'
                        className='btn btn-primary'
                        value='Login'
                      />
                      {/* <div className='pass-link'>
                        <a href='#'>Forgot password?</a>
                      </div> */}
                    </form>
                    <form
                      id='register'
                      className='register'
                      onSubmit={registerSubmit}
                    >
                      <div className='form-group'>
                        <input
                          type='text'
                          placeholder='Name'
                          name='name'
                          value={name}
                          onChange={handleRegister}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='email'
                          placeholder='Email Address'
                          name='email'
                          value={email}
                          onChange={handleRegister}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='password'
                          placeholder='Password'
                          name='password'
                          minLength='6'
                          value={password}
                          onChange={handleRegister}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='password'
                          placeholder='Confirm Password'
                          name='password2'
                          minLength='6'
                          value={password2}
                          onChange={handleRegister}
                        />
                      </div>
                      <input
                        type='submit'
                        className='btn btn-primary'
                        value='Register'
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

// const loginText = document.querySelector('.title-text .login');
// const loginForm = document.querySelector('form.login');
// const loginBtn = document.querySelector('label.login');
// const registerBtn = document.querySelector('label.register');
// const registerLink = document.querySelector('form .register-link a');

// registerBtn.onclick = () => {
//   loginForm.style.marginLeft = '-50%';
//   loginText.style.marginLeft = '-50%';
// };
// loginBtn.onclick = () => {
//   loginForm.style.marginLeft = '0%';
//   loginText.style.marginLeft = '0%';
// };
// registerLink.onclick = () => {
//   registerBtn.click();
//   return false;
// };
