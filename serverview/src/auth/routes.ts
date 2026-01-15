import { Router } from 'express'
import { users } from './users'
import { hashPassword, comparePasswords, generateToken } from './utils'
import { User } from './types'
import { randomUUID } from 'crypto'

const router = Router()

// Register
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const existingUser = users.find(u => u.email === email)
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const hashedPassword = await hashPassword(password)

  const newUser: User = {
    id: randomUUID(),
    email,
    password: hashedPassword,
    role,
  }

  users.push(newUser)

  res.status(201).json({ message: 'User registered successfully' })
})

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = users.find(u => u.email === email)
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const validPassword = await comparePasswords(password, user.password)
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = generateToken(user)

  res.json({
    token,
    role: user.role,
  })
})

export default router
