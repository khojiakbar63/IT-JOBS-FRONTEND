import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const AuthHeader:FC = () => {

    const location = useLocation()

  return (
    <>
        <h1 className="text-2xl font-[900] text-center mb-2s">{location.pathname === '/auth/sign-in' ? 'Sign In' : 'Sign Up'}</h1>
        <p className="text-sm text-gray-500 mb-4 text-center">{location.pathname === '/auth/sign-in' ? 'Sign in to your account on It-Jobs' : 'Create an account on It-Jobs'}</p>
    </>
  )
}

export default AuthHeader
