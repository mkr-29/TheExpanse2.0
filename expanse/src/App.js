import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}
