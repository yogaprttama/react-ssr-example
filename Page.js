import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="Page">
      <h1>Example Page</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
