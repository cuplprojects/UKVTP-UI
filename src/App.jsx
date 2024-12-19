import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLayout from "./layouts/userLayout";
import GuestLayout from "./layouts/guestLayout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <Routes>
        {/* Guest Routes - with redirect if authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/user/dashboard" replace />
            ) : (
              <GuestLayout />
            )
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/user/dashboard" replace />
            ) : (
              <GuestLayout />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/user"
          element={
            !isAuthenticated ? <Navigate to="/login" replace /> : <UserLayout />
          }
        >
          <Route index element={<Navigate to="/user/dashboard" replace />} />
          <Route path="dashboard" element={<div>Dashboard Content</div>} />
          <Route path="profile" element={<div>Profile Content</div>} />

          {/* Catch all route for authenticated users */}
          <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
        </Route>

        {/* Catch all route for non-authenticated users */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
