import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { AuthProvider } from './state/auth'

export default function App(){
  return (
    <AuthProvider>
      <div className="app">
        {/* skip link for keyboard users */}
        <a className="skip-link" href="#main">Skip to content</a>

        <header className="app-header">
          <div className="container">
            <Link to="/" className="brand">eNHIMA</Link>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
            </nav>
          </div>
        </header>

        <main id="main" className="container" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="container">© 2025 eNHIMA Prototype</div>
        </footer>
      </div>
    </AuthProvider>
  )
}
