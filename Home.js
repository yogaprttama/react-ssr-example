import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <Link to="/example">Example Page</Link>
    </div>
  );
}
