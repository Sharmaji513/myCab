import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainSignup = () => {



  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')



  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    console.log(captainData);
    
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  return (
    <div className="md:max-w-screen-md  w-full mx-auto md:p-16  ">
         <div className="w-full p-7 h-screen flex flex-col justify-center items-center">
      <img
          className=" h-[25vw] md:h-[5vw] "
          src="https://www.psdgraphics.com/file/taxi-driver-icon.jpg"
          alt=""
        />
        <h1 className="text-3xl  text-black font-bold mb-4 ">myCab</h1>
        <h1 className="text-[4vw] md:text-[1vw]  text-zinc-700 font-bold mb-12 uppercase">
       "Be the Captain of Change"
        </h1>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>

          <h3 className='text-lg w-full  font-medium mb-2'>What's our Captain's name</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button
            className=' text-black bg-yellow-500 font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Create Captain Account</button>

        </form>
        <p className='text-center md:mt-5'>Already have a account? <Link to='/captain-login' className='text-blue-600 '>Login here</Link></p>
      </div>
      <div>
        <p className='text-[14px] mt-16 mb-5 leading-tight text-center md:mt-20'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup