import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [ formData, setFormData ] = useState({})
  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post(`http://localhost:5000/api/auth/login`, formData)
      setLoading(false)
      if (response.data.success === false) {
        setError(true)
        console.log(response.data);
        return;
      }
      console.log(response)
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" onChange={handleChange} id='email' name='email' placeholder='Email' className='bg-slate-100 p-3 rounded-lg'/>
        <input type="password" onChange={handleChange} id='password' name='password' placeholder='Password' className='bg-slate-100 p-3 rounded-lg'/>
        <button disabled={loading} type='submit' className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">{ loading ? 'Loading...' : "Login"}</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't Have An Account...!?</p>
        <Link to='/register'><span className="text-blue-500">Register</span></Link>
      </div>
      <p className="text-red-700 mt-5">{ error && 'Something Went Wrong!'}</p>
    </div>
  )
}

export default Login
