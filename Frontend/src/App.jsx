import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import { useAuth0 } from "@auth0/auth0-react"

export default function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Public route */}
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Dashboard />}
          />

          {/* Protected route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}
