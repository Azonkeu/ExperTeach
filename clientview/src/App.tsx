import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/studentArea" element={<h1>Student Dashboard</h1>} />
      <Route path="/teacherArea" element={<h1>Teacher Dashboard</h1>} />
      <Route path="/adminArea" element={<h1>Admin Dashboard</h1>} />
      <Route path="/classroom/:lessonId" element={<h1>Classroom</h1>} />
    </Routes>
  )
}

export default App
