import React, { useState } from 'react';

const SupportFeedbackForm = ({onRouteChange}) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  backend server
    console.log('feedback:', feedback);
    // Reset form fields
    setFeedback('');
  };

  return (
    <div className='box'>
      <h2>Support Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button onClick={() => onRouteChange('')}  type="submit">Submit Feedback</button>
      </form>
      <div>
      <p onClick={() => onRouteChange('CusSup')}><u> Log out!</u> </p>
      </div>
    </div>
    
  );
};

export default SupportFeedbackForm;