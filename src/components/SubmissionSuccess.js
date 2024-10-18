import React from 'react';
import { useLocation } from 'react-router-dom';

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state.formData;

  return (
    <div>
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent successfully.</p>
      <h3>Submitted Details:</h3>
      <ul>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Message:</strong> {message}</li>
      </ul>
    </div>
  );
}

export default SubmissionSuccess;
