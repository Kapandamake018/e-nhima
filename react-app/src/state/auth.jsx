import React, {createContext, useContext, useState} from 'react'

const AuthContext = createContext()
export { AuthContext }

export function AuthProvider({children}){
  const [user,setUser] = useState(null)

  const login = (payload)=>{
    // payload can be a string id or an object {id, role, name}
    if(typeof payload === 'string'){
      setUser({id: payload, role: 'member', name: 'Member User'})
    } else if(payload && typeof payload === 'object'){
      // ensure at least id and role
      const {id, role, name} = payload
      setUser({id: id || payload.memberId || 'unknown', role: role || 'member', name: name || 'User'})
    }
  }

  const logout = ()=> setUser(null)

  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext)
