import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from './types'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10)
}

export const comparePasswords = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: '1d' }
  )
}
