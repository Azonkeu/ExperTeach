import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pagess/Home'
import Login from './pagess/Login'
import StudentDashboard from './pagess/StudentDashboard'
import TeacherDashboard from './pagess/TeacherDashboard'
import AdminDashboard from './pagess/AdminDashboard'
import Classroom from './pagess/Classroom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
  path="/studentArea"
  element={
    <ProtectedRoute allowedRoles={['student']}>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/teacherArea"
  element={
    <ProtectedRoute allowedRoles={['teacher']}>
      <TeacherDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/adminArea"
  element={
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/classroom/:lessonId"
  element={
    <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
      <Classroom />
    </ProtectedRoute>
  }
/>
    </Routes>
  )
}

export default App
