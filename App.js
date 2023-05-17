import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import NotFound from './NotFound';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/example" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
