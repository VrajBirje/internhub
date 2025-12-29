import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'

// Auth (public)
const Login = lazy(() => import('../pages/auth/Login'))
const Register = lazy(() => import('../pages/auth/Register'))
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'))
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'))
const EmailVerification = lazy(() => import('../pages/auth/EmailVerification'))

// Student (protected)
const StudentDashboard = lazy(() => import('../pages/student/StudentDashboard'))
const ProfileOverview = lazy(() => import('../pages/student/ProfileOverview'))
const InternshipListings = lazy(() => import('../pages/student/InternshipListings'))

// Company (protected)
const CompanyDashboard = lazy(() => import('../pages/company/CompanyDashboard'))

// Superadmin (protected)
const SuperadminDashboard = lazy(() => import('../pages/superadmin/SuperadminDashboard'))

// Public pages
const HomePage = lazy(() => import('../pages/public/Homepage'))
const About = lazy(() => import('../pages/public/About'))
const NotFound = lazy(() => import('../pages/errors/NotFound404'))

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}> 
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="public/internships" element={<InternshipListings />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="verify" element={<EmailVerification />} />
      </Route>

      <Route path="/student" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>}>
        <Route index element={<StudentDashboard />} />
        <Route path="profile" element={<ProfileOverview />} />
        <Route path="internships" element={<InternshipListings />} />
      </Route>

      <Route path="/company" element={<ProtectedRoute><CompanyDashboard /></ProtectedRoute>}>
        <Route index element={<CompanyDashboard />} />
      </Route>

      <Route path="/superadmin" element={<ProtectedRoute><SuperadminDashboard /></ProtectedRoute>}>
        <Route index element={<SuperadminDashboard />} />
      </Route>

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default AppRoutes
