import { createContext, useContext } from 'react'

const AuthContext = createContext({ isAuthenticated: false, user: null })

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ isAuthenticated: false, user: null }}>
      {children}
    </AuthContext.Provider>
  )
}
