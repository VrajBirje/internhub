import React from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children: React.ReactElement
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  // Placeholder auth check; replace with real auth logic
  const token = localStorage.getItem('authToken')
  if (!token) return <Navigate to="/auth/login" replace />
  return children
}

export default ProtectedRoute
