import React, { useState } from 'react';

const LoginSupport = ({onRouteChange}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic for handling login, such as calling an API
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className='box'>
      <h2> 👩‍🚀 Support Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='inp_fld'>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p onClick={() => onRouteChange('cust')}>Are you a Customer? <u> Login here!</u> </p>
    </div>
  );
};

export default LoginSupport;