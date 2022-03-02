import React from 'react'
import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <div>
      <h1>image not found</h1>
        <Link to="/">Go to the home page</Link>
    </div>
  );
}
