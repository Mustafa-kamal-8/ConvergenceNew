import React from 'react'
import Logo from '../assets/ASDMLOGO.png'

const Login = () => {
  return (
    <>
    <div className='h-screen w-screen overflow-hidden'>
        <div className="grid grid-cols-2 h-full">
            <div className="flex items-center justify-center">
            <div className='max-w-md  w-full rounded-2xl bg-white'>
        <div className='py-6 px-14 grid gap-6'>
            <div className="flex items-center gap-2">
            <img className='h-24 w-24' src={Logo} alt="" />
            <p className="text-2xl text-theme-primary font-bold">ASDM CONVERGENCE</p>
            </div>

            <div className='grid gap-2 '>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">Username</label>
                    <input  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    type='text'
                    />
                
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                    <input  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    type='password'
                    />
                
                </div>
                <button
              type="submit"
              
              className="w-full mt-4 px-4 py-3 text-lg font-medium text-white bg-theme-primary rounded-lg hover:bg-theme-primary-hover focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
             Sign In
            </button>
            </div>
        </div>


       </div>
            </div>
            <div className="bg-theme-primary"></div>
        </div>
       
    </div>
    </>
  )
}

export default Login
