import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Use optional chaining to avoid errors

  // Check if formData is undefined
  if (!formData) {
    return <h1>No data submitted.</h1>; // Provide a fallback UI
  }

  const { name, email, message } = formData;

  return (
    <div>
      <h1>Submission Successful!</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default SubmissionSuccess;
