// CustomerReviewForm.js
import React, { useState } from 'react';

const CustomerReviewForm = ({onRouteChange}) => {
  const [token, setToken] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend server
    console.log('Token:', token);
    console.log('Review:', review);
    // Reset form fields
    setReview('');
  };

  return (
    <div className='box'>
      <h2>Customer Review Form</h2>
      <p>Customer Token: </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Token:</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button onClick={() => onRouteChange('init')} type="submit">Submit Review</button>
      </form>
      <div>
      <p onClick={() => onRouteChange('cust')}><u> Log out!</u> </p>
      </div>
    </div>
  );
};

export default CustomerReviewForm;
