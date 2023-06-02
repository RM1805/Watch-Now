import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import Summary from './components/Summary';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:id" element={<ShowDetails />} />
        <Route path="/details/:id/summary" element={<Summary />} />
        <Route path="/details/:id/summary/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
