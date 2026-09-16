import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { getRole, isAuthenticated } from '../utils/auth'


interface Props {
  children: ReactNode
  allowedRoles: string[]
}

function ProtectedRoute({ children, allowedRoles }: Props) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  const role = getRole()

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
