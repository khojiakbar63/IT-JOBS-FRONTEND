import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom';


const AuthFooter:FC = () => {
    const location = useLocation()

  return (
    <>
      <p className='text-center text-sm text-gray-400 mt-4'>{location.pathname === '/auth/sign-in' ? 'Don’t have an account?' : 'Already have an account?'} <NavLink to={location.pathname === '/auth/sign-in' ? '/auth/sign-up' : '/auth/sign-in'} className='text-blue-600 cursor-pointer'>{location.pathname === '/auth/sign-in' ? 'Sign Up' : 'Sign In'}</NavLink></p>
    </>
  )
}

export default AuthFooter
