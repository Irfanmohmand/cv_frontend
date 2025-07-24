import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            margin: 'auto',
            textAlign: 'center',
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
