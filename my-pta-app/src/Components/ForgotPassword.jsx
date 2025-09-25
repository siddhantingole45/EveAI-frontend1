import React, { useState } from 'react'
import Loader from '../Components/Loader'
import { useNavigate } from "react-router-dom"
// import axios from 'axios'

const ForgotPassword = () => {
  const [emailSubmit, setEmailSubmit] = useState(false)
  const [otpValidate, setOtpValidate] = useState(false)
  const [contentVal, setContentValue] = useState("Submit Your Email")

  const [inputField, setInputField] = useState({
    email: "",
    otp: "",
    newPassword: ""
  })

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!emailSubmit) {
      setEmailSubmit(true)
      setContentValue("Submit Your OTP")
      sendOtp()
    } else if (emailSubmit && !otpValidate) {
      setOtpValidate(true)
      verifyOTP()
      setContentValue("Submit Your New Password")
    } else {
      changePassword()
    }
  }

  const changePassword = async () => {
    // API call for changing password
    // await axios.post("/api/change-password", { email: inputField.email, otp: inputField.otp, newPassword: inputField.newPassword })

    // After successful change
    alert("Password changed successfully! Please login again.")
    navigate("/login")
  }

  const verifyOTP = async () => {
    // API call to verify OTP
    // await axios.post("/api/verify-otp", { email: inputField.email, otp: inputField.otp })
  }

  const sendOtp = async () => {
    // API call to send OTP
    // await axios.post("/api/send-otp", { email: inputField.email })
  }

  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value })
  }

  return (
    <div className='w-full'>
      <div className='w-full mb-5'>
        <div>Enter Your Email</div>
        <input
          type="text"
          value={inputField.email}
          onChange={(event) => handleOnChange(event, "email")}
          className='w-1/2 p-2 rounded-lg border-2 border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] '
          placeholder='Enter Your Email'
        />
      </div>
      

      {emailSubmit && (
        <div className='w-full mb-5'>
          <div>Enter Your OTP</div>
          <input
            type="text"
            value={inputField.otp}
            onChange={(event) => handleOnChange(event, "otp")}
            className='w-1/2 p-2 rounded-lg border-2 border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e]'
            placeholder='Enter Your OTP'
          />
        </div>
      )}

      {otpValidate && (
        <div className='w-full mb-5'>
          <div>Enter Your New Password</div>
          <input
            type="password"
            value={inputField.newPassword}
            onChange={(event) => handleOnChange(event, "newPassword")}
            className='w-1/2 p-2 rounded-lg border-2 border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e]'
            placeholder='Enter Your New Password'
          />
        </div>
      )}

      <div
        className=" text-white mx-auto w-2/3 p-3 text-center font-semibold cursor-pointer border-2 hover:border-black flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#607afb] gap-2 pl-4 text-sm  leading-normal tracking-[0.015em]"
        onClick={handleSubmit}
      >
        {contentVal}
      </div>

      {/* {loader && <Loader />} */}
    </div>
  )
}

export default ForgotPassword
